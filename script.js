const tShirtPrice = 500;
const hoodiePrice = 800;
let cart = [];

function getProductPrice(productName) {
  return productName.includes('Hoodie') ? hoodiePrice : tShirtPrice;
}

const imagePath = (path) => encodeURI(`Clothes/${path}`);
const menProducts = [
  ['Graphic T-Shirt 01', 'White / Printed', ['T-Shirt boy/Cloth1/Screenshot 2026-07-09 161003.png', 'T-Shirt boy/Cloth1/Screenshot 2026-07-09 161816.png'], true],
  ['Graphic T-Shirt 02', 'Green / Printed', ['T-Shirt boy/Cloth2/front.png', 'T-Shirt boy/Cloth2/Back.png']],
  ['Graphic T-Shirt 03', 'Blue / Printed', ['T-Shirt boy/Cloth3/Front.png', 'T-Shirt boy/Cloth3/Back.png']],
  ['Graphic T-Shirt 04', 'Black / Printed', ['T-Shirt boy/Cloth4/Front.png', 'T-Shirt boy/Cloth4/Back.png']],
  ['Graphic T-Shirt 05', 'White / Printed', ['T-Shirt boy/Cloth5/Front.png', 'T-Shirt boy/Cloth5/Back.png']],
  ['Graphic T-Shirt 06', 'Black / Printed', ['T-Shirt boy/Cloth6/Front.png', 'T-Shirt boy/Cloth6/Back.png']],
  ['Graphic T-Shirt 07', 'Grey / Printed', ['T-Shirt boy/Cloth7/Front.png', 'T-Shirt boy/Cloth7/Back.png']],
  ['Graphic T-Shirt 08', 'Blue / Printed', ['T-Shirt boy/Cloth8/front.png', 'T-Shirt boy/Cloth8/back.png']],
  ['Graphic T-Shirt 09', 'Red / Printed', ['T-Shirt boy/Cloth9/front.png', 'T-Shirt boy/Cloth9/back.png']],
  ['Graphic T-Shirt 10', 'Red / Printed', ['T-Shirt boy/Cloth10/front.png', 'T-Shirt boy/Cloth10/Back.png']]
].map(([name, detail, images, customizable = false]) => [name, detail, images.map(imagePath), 'Men', customizable]);

const menHoodieImages = [
  '6ce100b0-6d0f-4ff6-855c-707976f0e230-1_all_814.png',
  '1000006368.png', '1000006372.png', '1000006374.png', '1000006375.png',
  '1000006377.png', '1000006378.png', '1000006376.png', '1000006371.png',
  '1000006373.png', '1000006370.png'
];
const womenHoodieImages = [
  '6a187f2a-5bb1-491d-a0f2-2c2682380f24.png',
  '8cb7fdc8-7342-458d-8918-24e37460f475.png',
  '8e0daec4-48ac-4d77-bb74-6aea5d1bdf60.png',
  '539115f1-e9e1-423d-8f63-2996220b9083.png',
  '400e2295-b1aa-4c7a-bd07-4f6a8d420184.png',
  'f88606f5-23be-4647-85a1-6c75035eed26.png',
  '14febe52-c100-40bc-a033-30961f2f9c06.png',
  '33924108-6ae2-4834-bcd6-2c0e71dba325.png',
  '1000006379.png',
  '1000006380.png'
];
const createHoodies = (gender, images) => images.map((image, index) => {
  const folder = gender === 'Men' ? 'hoddie boy' : 'hoodie girl';
  return [`${gender} Hoodie ${String(index + 1).padStart(2, '0')}`, 'Everyday / Hoodie', [imagePath(`${folder}/cloth ${index + 1}/${image}`)], gender, false];
});
menProducts.push(...createHoodies('Men', menHoodieImages));
const womenProducts = createHoodies('Women', womenHoodieImages);
const products = [...menProducts, ...womenProducts];

const bagCount = document.querySelector('.bag-count');
const cartItemsOutput = document.querySelector('#cart-items');
const orderForm = document.querySelector('#order-form');
const formMessage = document.querySelector('#form-message');
const productDialog = document.querySelector('#product-dialog');
const detailImage = document.querySelector('#detail-main-image');
const detailThumbnails = document.querySelector('#detail-thumbnails');
const detailQuantityOutput = document.querySelector('#detail-quantity');
const detailMessage = document.querySelector('#detail-message');
const detailNameInput = document.querySelector('#detail-name');
const detailPersonalization = document.querySelector('#detail-personalization');
const detailCustomPreview = document.querySelector('#detail-custom-preview');
const detailAddButton = document.querySelector('[data-detail-add]');
let activeProductIndex = 0;
let activeImageIndex = 0;
let activeSize = 'M';
let activeQuantity = 1;

function renderProducts(gridId, categoryProducts) {
  document.querySelector(`#${gridId}`).innerHTML = categoryProducts.map(([name, detail, images], categoryIndex) => {
    const index = products.findIndex((product) => product[0] === name);
    const price = getProductPrice(name);
    return `
      <article class="product-card" data-product-card="${index}">
        <button class="product-image" type="button" data-open-product="${index}" aria-label="View details for ${name}">
          <img src="${images[0]}" alt="${name} - image 1" loading="lazy" />
          <span class="product-number">${String(categoryIndex + 1).padStart(2, '0')}</span>
          <span class="image-flip-hint" aria-hidden="true">View details</span>
        </button>
        <div class="product-card-info" data-open-product="${index}" role="button" tabindex="0" aria-label="View details for ${name}"><div><h3>${name}</h3><p>${detail}</p></div><div class="product-prices"><strong>${price} EGP</strong></div></div>
        <button class="choose-product" type="button" data-product-index="${index}">Add to bag</button>
      </article>
    `;
  }).join('');
}

renderProducts('men-product-grid', menProducts);
renderProducts('women-product-grid', womenProducts);

function showDetailImage(index) {
  const [name, , images] = products[activeProductIndex];
  activeImageIndex = (index + images.length) % images.length;
  detailImage.src = images[activeImageIndex];
  detailImage.alt = `${name} - image ${activeImageIndex + 1}`;
  detailCustomPreview.hidden = !products[activeProductIndex][4] || activeImageIndex !== 0;
  detailThumbnails.querySelectorAll('button').forEach((thumbnail, thumbnailIndex) => {
    const selected = thumbnailIndex === activeImageIndex;
    thumbnail.setAttribute('aria-pressed', String(selected));
  });
}

function openProductDetails(index) {
  activeProductIndex = index;
  activeImageIndex = 0;
  activeSize = 'M';
  activeQuantity = 1;
  const [name, , images, , customizable] = products[index];
  document.querySelector('#detail-product-name').textContent = name;
  document.querySelector('#detail-price').textContent = `${getProductPrice(name)} EGP`;
  detailMessage.textContent = '';
  detailAddButton.textContent = 'Add to bag';
  detailQuantityOutput.textContent = activeQuantity;
  detailPersonalization.hidden = !customizable;
  if (!customizable) detailNameInput.value = '';
  detailCustomPreview.textContent = detailNameInput.value.trim() || 'Your text here';
  document.querySelectorAll('[data-detail-size]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.detailSize === activeSize));
  });
  detailThumbnails.innerHTML = images.map((image, imageIndex) => `
    <button class="detail-thumbnail" type="button" data-detail-image="${imageIndex}" aria-label="Show image ${imageIndex + 1} of ${name}" aria-pressed="${imageIndex === 0}">
      <img src="${image}" alt="" />
    </button>
  `).join('');
  productDialog.querySelectorAll('[data-gallery-step]').forEach((button) => {
    button.hidden = images.length < 2;
  });
  showDetailImage(0);
  productDialog.showModal();
}

detailNameInput.addEventListener('input', () => {
  detailCustomPreview.textContent = detailNameInput.value.trim() || 'Your text here';
});

document.querySelector('#collection').addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-open-product]');
  if (trigger) openProductDetails(Number(trigger.dataset.openProduct));
});

document.querySelector('#collection').addEventListener('keydown', (event) => {
  const trigger = event.target.closest('.product-card-info[role="button"]');
  if (trigger && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    openProductDetails(Number(trigger.dataset.openProduct));
  }
});

document.querySelectorAll('[data-close-product]').forEach((button) => {
  button.addEventListener('click', () => productDialog.close());
});

productDialog.addEventListener('click', (event) => {
  if (event.target === productDialog) productDialog.close();
  const thumbnail = event.target.closest('[data-detail-image]');
  if (thumbnail) showDetailImage(Number(thumbnail.dataset.detailImage));
});

productDialog.querySelectorAll('[data-gallery-step]').forEach((button) => {
  button.addEventListener('click', () => showDetailImage(activeImageIndex + Number(button.dataset.galleryStep)));
});

productDialog.querySelectorAll('[data-detail-size]').forEach((button) => {
  button.addEventListener('click', () => {
    activeSize = button.dataset.detailSize;
    productDialog.querySelectorAll('[data-detail-size]').forEach((option) => {
      option.setAttribute('aria-pressed', String(option === button));
    });
  });
});

productDialog.querySelectorAll('[data-detail-quantity]').forEach((button) => {
  button.addEventListener('click', () => {
    activeQuantity = Math.max(1, activeQuantity + Number(button.dataset.detailQuantity));
    detailQuantityOutput.textContent = activeQuantity;
  });
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function updateOrderSummary() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  bagCount.textContent = totalQuantity;
  document.querySelector('#bag-section-count').textContent = totalQuantity;
  cartItemsOutput.innerHTML = cart.length ? cart.map((item, index) => `
    <article class="cart-item">
      <div class="cart-item-heading"><strong>${item.product}</strong><button type="button" data-cart-action="remove" data-item-index="${index}" aria-label="Remove ${item.product}">Remove</button></div>
      ${item.customText ? `<p class="cart-customization">Name to print: ${escapeHtml(item.customText)}</p>` : ''}
      <div class="cart-item-options">
        <label>Size<select data-cart-size="${index}"><option${item.size === 'S' ? ' selected' : ''}>S</option><option${item.size === 'M' ? ' selected' : ''}>M</option><option${item.size === 'L' ? ' selected' : ''}>L</option><option${item.size === 'XL' ? ' selected' : ''}>XL</option><option${item.size === 'XXL' ? ' selected' : ''}>XXL</option></select></label>
        <div><span>Quantity</span><div class="quantity-control"><button type="button" data-cart-action="decrease" data-item-index="${index}" aria-label="Decrease quantity">−</button><output>${item.quantity}</output><button type="button" data-cart-action="increase" data-item-index="${index}" aria-label="Increase quantity">+</button></div></div>
      </div>
    </article>
  `).join('') : '<p class="empty-cart">Your bag is empty. Add something you like.</p>';
  document.querySelectorAll('[data-product-index]').forEach((button) => {
    const [product] = products[Number(button.dataset.productIndex)];
    const productQuantity = cart.reduce((total, item) => total + (item.product === product ? item.quantity : 0), 0);
    button.textContent = productQuantity ? 'In bag' : 'Add to bag';
  });
}

document.querySelectorAll('[data-product-index]').forEach((button) => {
  button.addEventListener('click', () => {
    openProductDetails(Number(button.dataset.productIndex));
  });
});

detailAddButton.addEventListener('click', () => {
  const [product, , , , customizable] = products[activeProductIndex];
  const customText = detailNameInput.value.trim();
  const normalizedText = customText
    .split(/\r?\n|,/)
    .map((name) => name.trim())
    .filter(Boolean)
    .join(', ');
  if (customizable && !normalizedText) {
    detailMessage.textContent = 'Enter a name to print on the T-shirt.';
    detailNameInput.focus();
    return;
  }
  cart.push({
    product,
    customText: customizable ? normalizedText : '',
    size: activeSize,
    quantity: activeQuantity,
    price: getProductPrice(product),
    productIndex: activeProductIndex
  });
  formMessage.textContent = '';
  detailMessage.textContent = `${product} added to your bag.`;
  detailAddButton.textContent = 'Added to bag';
  updateOrderSummary();
});

cartItemsOutput.addEventListener('click', (event) => {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;
  const index = Number(button.dataset.itemIndex);
  const action = button.dataset.cartAction;
  if (action === 'remove') cart.splice(index, 1);
  if (action === 'increase') cart[index].quantity += 1;
  if (action === 'decrease') cart[index].quantity = Math.max(1, cart[index].quantity - 1);
  updateOrderSummary();
});

cartItemsOutput.addEventListener('change', (event) => {
  if (event.target.matches('[data-cart-size]')) cart[Number(event.target.dataset.cartSize)].size = event.target.value;
});

document.querySelectorAll('[data-scroll-order]').forEach((button) => {
  button.addEventListener('click', () => {
    const collectionSection = document.querySelector('#collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.querySelector('[data-scroll-bag]').addEventListener('click', () => {
  document.querySelector('#bag-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!cart.length) {
    formMessage.textContent = 'Add at least one item to your bag before placing your order.';
    return;
  }
  const items = cart.map((item) => ({ ...item }));
  const customerName = document.querySelector('#name').value.trim();
  const order = {
    customerName,
    phone: document.querySelector('#phone').value.trim(),
    address: document.querySelector('#address').value.trim(),
    items,
    product: items.map((item) => item.product).join(', '),
    size: items.map((item) => item.size).join(', '),
    quantity: items.reduce((total, item) => total + item.quantity, 0),
    status: 'Awaiting payment',
    createdAt: new Date().toISOString()
  };
  const savedOrders = JSON.parse(localStorage.getItem('mCollectionOrders') || '[]');
  savedOrders.push(order);
  localStorage.setItem('mCollectionOrders', JSON.stringify(savedOrders));
  localStorage.setItem('mCollectionOrder', JSON.stringify(order));
  window.location.href = 'checkout.html';
});

updateOrderSummary();
