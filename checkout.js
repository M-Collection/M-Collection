const storedOrder = JSON.parse(localStorage.getItem('mCollectionOrder') || 'null');
const paymentForm = document.querySelector('#payment-form');
const paymentMessage = document.querySelector('#payment-message');
const whatsappSupport = document.querySelector('#whatsapp-support');
const defaultProductPrice = 500;
const deliveryPrice = 70;

function updateWhatsappLink(orderNumber) {
  const message = `Hello, I need help with an issue or return for my order.${orderNumber ? ` Order number: ${orderNumber}.` : ''}`;
  whatsappSupport.href = `https://wa.me/201007052517?text=${encodeURIComponent(message)}`;
}

function getProductPrice(productName) {
  return productName.includes('Hoodie') ? 800 : defaultProductPrice;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

if (!storedOrder) {
  paymentForm.innerHTML = '<p class="empty-order">No saved order found. Return to the collection to add items.</p><a class="submit-button empty-link" href="index.html">Back to collection</a>';
} else {
  updateWhatsappLink(storedOrder.orderNumber);
  const items = storedOrder.items || [{ product: storedOrder.product, size: storedOrder.size, quantity: storedOrder.quantity, price: getProductPrice(storedOrder.product) }];
  const summaryCalculations = document.querySelector('#summary-calculations');
  const summaryItemCount = document.querySelector('#summary-item-count');
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  document.querySelector('#summary-quantity').textContent = totalQuantity;
  document.querySelector('#summary-products').innerHTML = items.map((item) => `<div class="summary-item"><span>${item.product} · ${item.size}${item.customText ? `<br />Name to print: ${escapeHtml(item.customText)}` : ''}</span></div>`).join('');
  document.querySelector('#summary-customer').textContent = storedOrder.customerName;
  document.querySelector('#summary-address').textContent = `${storedOrder.address} - ${storedOrder.phone}`;

  function showOrderCalculations() {
    const itemsPrice = items.reduce((total, item) => total + (item.price ?? getProductPrice(item.product)) * item.quantity, 0);
    document.querySelector('#summary-products').innerHTML = items.map((item) => `<div class="summary-item"><span>${item.product} · ${item.size}${item.customText ? `<br />Name to print: ${escapeHtml(item.customText)}` : ''}</span><strong>${item.quantity} × ${(item.price ?? getProductPrice(item.product)).toLocaleString('en-US')} EGP</strong></div>`).join('');
    document.querySelector('#summary-price').textContent = itemsPrice.toLocaleString('en-US');
    document.querySelector('#summary-delivery').textContent = deliveryPrice.toLocaleString('en-US');
    document.querySelector('#summary-total').textContent = (itemsPrice + deliveryPrice).toLocaleString('en-US');
    summaryItemCount.hidden = false;
    summaryCalculations.hidden = false;
  }

  showOrderCalculations();

  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedMethod = paymentForm.querySelector('input[name="payment"]:checked')?.value || 'cash';
    const orderNumber = `MC-${Date.now().toString().slice(-6)}`;
    paymentMessage.textContent = `Order confirmed. Your order number is ${orderNumber}.`;
    paymentForm.querySelector('button[type="submit"]').disabled = true;
    storedOrder.status = 'Confirmed';
    storedOrder.orderNumber = orderNumber;
    storedOrder.paymentMethod = selectedMethod;
    localStorage.setItem('mCollectionOrder', JSON.stringify(storedOrder));
    updateWhatsappLink(orderNumber);
    const savedOrders = JSON.parse(localStorage.getItem('mCollectionOrders') || '[]');
    const orderIndex = savedOrders.findIndex((order) => order.createdAt === storedOrder.createdAt);
    if (orderIndex !== -1) savedOrders[orderIndex] = storedOrder;
    localStorage.setItem('mCollectionOrders', JSON.stringify(savedOrders));
  });
}
