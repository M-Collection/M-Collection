<!doctype html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="M-Collection everyday wear, thoughtfully made." />
  <title>M-Collection | Everyday Wear</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <div class="promo-bar">Free shipping over 1,200 EGP · New season drop is live</div>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="M-Collection - Home">
      <span class="brand-mark" aria-hidden="true">MC</span>
      <span>M-Collection</span>
    </a>
    <nav aria-label="Main navigation">
      <a href="#product">Collection</a>
      <a href="#men">Men</a>
      <a href="#women">Women</a>
      <a href="#details">Details</a>
      <a href="#order">Order</a>
    </nav>
    <button class="bag-button" type="button" data-scroll-bag>
      <span>Bag</span>
      <span class="bag-count" aria-label="Items in bag">0</span>
    </button>
  </header>

  <main id="top">
    <section class="hero" id="product">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> EDITION 01 / EVERYDAY</p>
        <h1>The piece<br /><em>that stays.</em></h1>
        <p class="intro">A relaxed-fit tee in soft cotton, made to be your everyday favorite.</p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-scroll-order>Order now <span>←</span></button>
          <span class="availability"><i></i> Available now</span>
        </div>
        <div class="quick-facts" aria-label="Quick facts">
          <div class="price-fact"><strong>500</strong><span>EGP · T-shirt</span></div>
          <div><strong>5–7</strong><span>Delivery days</span></div>
          <div><strong>100%</strong><span>Cotton</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="image-frame">
          <img src="Clothes/Screenshot%202026-07-15%20141704.png" alt="Customer choosing a M-Collection shirt" />
          <span class="image-label">S-01</span>
        </div>
        <div class="circle-note">Made<br />with care</div>
        <div class="floating-card">
          <span>Best seller</span>
          <strong>Edition 01</strong>
          <small>Soft cotton / easy fit</small>
        </div>
      </div>
    </section>

    <section class="brand-features" aria-label="Brand benefits">
      <div class="feature-item">
        <span class="feature-index">01</span>
        <h3>Premium cotton</h3>
        <p>Breathable, soft-touch fabric that feels effortless every day.</p>
      </div>
      <div class="feature-item">
        <span class="feature-index">02</span>
        <h3>Made to mix</h3>
        <p>Clean silhouettes and neutral shades built for easy styling.</p>
      </div>
      <div class="feature-item">
        <span class="feature-index">03</span>
        <h3>Fast delivery</h3>
        <p>Dependable delivery across the country within 5–7 days.</p>
      </div>
    </section>

    <section class="collection-section" id="collection">
      <div class="section-heading light-heading"><span>02</span><h2>Choose your pieces</h2></div>
      <div class="section-heading collection-category-heading" id="men"><span>01</span><h2>Men</h2></div>
      <div class="product-grid" id="men-product-grid"></div>
      <div class="section-heading collection-category-heading" id="women"><span>02</span><h2>Women</h2></div>
      <div class="product-grid" id="women-product-grid"></div>
    </section>

    <dialog class="product-dialog" id="product-dialog" aria-labelledby="detail-product-name">
      <div class="product-dialog-content">
        <button class="dialog-close" type="button" data-close-product aria-label="Close product details">×</button>
        <div class="detail-gallery">
          <div class="detail-main-image">
            <button class="gallery-arrow gallery-previous" type="button" data-gallery-step="-1" aria-label="Show previous image">‹</button>
            <img id="detail-main-image" src="" alt="" />
            <span class="custom-print-preview" id="detail-custom-preview" aria-hidden="true"></span>
            <button class="gallery-arrow gallery-next" type="button" data-gallery-step="1" aria-label="Show next image">›</button>
          </div>
          <div class="detail-thumbnails" id="detail-thumbnails" aria-label="Product images"></div>
        </div>
        <section class="detail-info">
          <p class="eyebrow"><span></span> EDITION 01 / EVERYDAY</p>
          <h2 id="detail-product-name"></h2>
          <div class="detail-prices"><strong id="detail-price">500 EGP</strong></div>
          <p class="detail-shipping">Shipping: Home delivery (5–7 days) · 70 EGP</p>
          <div class="detail-personalization" id="detail-personalization" hidden>
            <p>You can write your name on a T-shirt.<br /><span dir="rtl">تقدر تكتب اسمك على تيشيرت</span></p>
            <label for="detail-name">Enter your name <span aria-hidden="true">*</span></label>
            <textarea id="detail-name" rows="3" maxlength="200" placeholder="Write the name to print"></textarea>
          </div>
          <fieldset class="detail-size-picker">
            <legend>Size <span aria-hidden="true">*</span></legend>
            <div class="detail-size-options">
              <button type="button" data-detail-size="S" aria-pressed="false">S</button>
              <button type="button" data-detail-size="M" aria-pressed="true">M</button>
              <button type="button" data-detail-size="L" aria-pressed="false">L</button>
              <button type="button" data-detail-size="XL" aria-pressed="false">XL</button>
              <button type="button" data-detail-size="XXL" aria-pressed="false">XXL</button>
            </div>
          </fieldset>
          <div class="detail-purchase">
            <div class="detail-quantity" aria-label="Quantity">
              <button type="button" data-detail-quantity="-1" aria-label="Decrease quantity">−</button>
              <output id="detail-quantity">1</output>
              <button type="button" data-detail-quantity="1" aria-label="Increase quantity">+</button>
            </div>
            <button class="detail-add-button" type="button" data-detail-add>Add to bag</button>
          </div>
          <p class="detail-message" id="detail-message" role="status" aria-live="polite"></p>
        </section>
      </div>
    </dialog>

    <section class="details-section" id="details">
      <div class="section-heading"><span>03</span><h2>Details that matter</h2></div>
      <div class="details-grid">
        <article><span class="detail-number">01</span><h3>Cotton fabric</h3><p>Soft feel and breathable comfort for everyday wear.</p></article>
        <article><span class="detail-number">02</span><h3>Easy fit</h3><p>A balanced cut that gives you room to move.</p></article>
        <article><span class="detail-number">03</span><h3>Clean finish</h3><p>Thoughtful details and quality that lasts.</p></article>
      </div>
    </section>

    <section class="bag-section" id="bag-section" aria-labelledby="bag-title">
      <div class="bag-section-header">
        <div><p class="eyebrow"><span></span> YOUR SELECTION</p><h2 id="bag-title">Your bag</h2></div>
        <span class="bag-section-count"><strong id="bag-section-count">0</strong> items</span>
      </div>
      <div class="cart-summary" id="bag-summary">
        <div id="cart-items" aria-live="polite"><p class="empty-cart">Your bag is empty. Add something you like.</p></div>
      </div>
    </section>

    <section class="order-section" id="order">
      <div class="order-intro">
        <div class="order-heading-row">
          <div><p class="eyebrow"><span></span> THE FINAL STEP</p><h2>Make it<br /><em>yours.</em></h2></div>
          <a class="whatsapp-contact" href="https://wa.me/201007052517?text=Hello%2C%20I%20need%20help%20with%20an%20issue%20or%20return%20for%20my%20order." target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp for order issues or returns">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3C8.86 3 3.02 8.82 3.02 15.98c0 2.28.6 4.5 1.74 6.46L3 29l6.75-1.72a13.1 13.1 0 0 0 6.28 1.6h.01c7.17 0 13.01-5.82 13.01-12.98 0-3.47-1.36-6.73-3.82-9.19A12.94 12.94 0 0 0 16.04 3Zm0 23.66h-.01a10.9 10.9 0 0 1-5.55-1.52l-.4-.24-4.01 1.02 1.07-3.9-.26-.4a10.78 10.78 0 0 1-1.67-5.64c0-5.97 4.87-10.83 10.85-10.83 2.9 0 5.62 1.13 7.67 3.17a10.75 10.75 0 0 1 3.18 7.66c0 5.97-4.87 10.83-10.86 10.83Zm5.96-8.11c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.63-.97-.86-1.63-1.93-1.82-2.26-.19-.33-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.5 5.58 4.91.78.34 1.39.54 1.86.69.78.25 1.49.22 2.05.13.63-.1 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.38Z"/></svg>
          </a>
        </div>
        <p class="order-instructions">Enter your details and we'll contact you to confirm your order.</p>
      </div>
      <form class="order-form" id="order-form">
        <div class="form-row"><label for="name">Full name</label><input id="name" name="name" type="text" placeholder="Enter your name" required /></div>
        <div class="form-row"><label for="phone">Phone number</label><input id="phone" name="phone" type="tel" placeholder="01xxxxxxxxx" required /></div>
        <div class="form-row"><label for="address">Home address</label><input id="address" name="address" type="text" placeholder="Enter your home address only" required /></div>
        <button class="submit-button" type="submit">Place order <span>←</span></button>
        <p class="form-message" id="form-message" role="status"></p>
      </form>
    </section>
  </main>
  <footer><span>M-Collection © 2026</span><span>Everyday wear, made with care.</span></footer>
</body>
</html>

:root {
  --ink: #17211f;
  --paper: #eef3ed;
  --lime: #d5f36b;
  --orange: #ff7048;
  --muted: #71807b;
  --line: rgba(23, 33, 31, .16);
  --display: "Cairo", sans-serif;
  --mono: "DM Mono", monospace;
}

.bag-section { margin: 0 auto; max-width: 1000px; padding: 45px 5vw 0; scroll-margin-top: 90px; }
.bag-section-header { align-items: end; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; padding-bottom: 18px; }
.bag-section-header .eyebrow { margin-bottom: 8px; }
.bag-section-header h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); margin: 0; }
.bag-section-count { color: var(--muted); font-size: .78rem; }
.bag-section-count strong { color: var(--ink); font-family: var(--mono); font-weight: 500; }
.cart-summary { border-right: 3px solid var(--orange); margin-top: 18px; padding: 5px 14px 5px 0; }
.cart-summary > span, .empty-cart, .cart-item-options > div > span { color: var(--muted); font-size: .72rem; }
.empty-cart { margin: 8px 0 0; }
.cart-item { border-bottom: 1px solid var(--line); padding: 14px 0; }
.cart-item-heading, .cart-item-options { align-items: center; display: flex; justify-content: space-between; gap: 12px; }
.cart-item-heading strong { font-size: .82rem; }
.cart-item-heading button { background: transparent; border: 0; color: var(--orange); cursor: pointer; font-size: .7rem; padding: 4px; }
.cart-item-options { align-items: end; margin-top: 10px; }
.cart-item-options label { margin: 0; }
.cart-item-options select { border-bottom: 1px solid var(--line); font-size: .8rem; padding: 3px 0; width: 70px; }
.cart-item-options .quantity-control { gap: 12px; }
.cart-item-options .quantity-control button { font-size: 1.1rem; }
.checkout-items .summary-item:first-child { border-top: 1px solid var(--line); }
.checkout-items .summary-item span { max-width: 65%; }

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: var(--ink); background: var(--paper); font-family: var(--display); }
button, input, select { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
a { color: inherit; text-decoration: none; }
.promo-bar { background: var(--ink); color: rgba(255,255,255,.88); font-family: var(--mono); font-size: .68rem; letter-spacing: .08em; padding: 10px 5vw; text-align: center; text-transform: uppercase; }
.site-header { align-items: center; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; margin: 0 auto; max-width: 1320px; padding: 20px 5vw; position: sticky; top: 0; background: rgba(238,243,237,.9); backdrop-filter: blur(14px); z-index: 50; }
.brand { align-items: center; display: flex; font-size: 1.3rem; font-weight: 800; gap: 10px; }
.brand-mark { align-items: center; background: var(--ink); border-radius: 4px 12px 4px 4px; color: var(--lime); display: flex; font-family: var(--mono); font-size: .78rem; font-weight: 500; height: 40px; justify-content: center; letter-spacing: 0; overflow: hidden; position: relative; width: 40px; }
.brand-mark::before { border: 1px solid rgba(213,243,107,.55); border-radius: 2px 8px 2px 2px; content: ""; inset: 4px; position: absolute; }
.brand-mark::after { background: var(--orange); bottom: 7px; content: ""; height: 3px; position: absolute; right: 7px; width: 10px; }
nav { display: flex; font-size: .85rem; gap: 32px; }
nav a { color: var(--muted); transition: color .2s ease; } nav a:hover { color: var(--orange); }
.bag-button { background: none; border: 0; color: var(--ink); cursor: pointer; display: flex; font-size: .85rem; gap: 10px; padding: 4px; }
.bag-count { align-items: center; background: var(--orange); border-radius: 50%; color: white; display: flex; font-family: var(--mono); font-size: .7rem; height: 22px; justify-content: center; width: 22px; }
.hero { display: grid; gap: 8vw; grid-template-columns: .85fr 1.15fr; margin: 0 auto; max-width: 1320px; min-height: 680px; padding: 80px 5vw 110px; }
.hero-copy { align-self: center; padding-top: 10px; }
.eyebrow { align-items: center; color: var(--muted); display: flex; font-family: var(--mono); font-size: .68rem; gap: 10px; letter-spacing: .08em; margin: 0 0 28px; text-transform: uppercase; }
.brand-features { display: grid; gap: 26px; grid-template-columns: repeat(3, 1fr); margin: 0 auto; max-width: 1320px; padding: 0 5vw 80px; }
.feature-item { background: rgba(23,33,31,.03); border: 1px solid var(--line); padding: 28px 24px; }
.feature-index { color: var(--orange); display: block; font-family: var(--mono); font-size: .68rem; margin-bottom: 16px; }
.feature-item h3 { font-size: 1.2rem; margin: 0 0 8px; }
.feature-item p { color: var(--muted); font-size: .82rem; line-height: 1.7; margin: 0; }
.eyebrow span { background: var(--orange); border-radius: 50%; height: 8px; width: 8px; }
h1, h2, h3, p { margin-top: 0; } h1 { font-size: clamp(3.4rem, 7vw, 7.3rem); letter-spacing: -.095em; line-height: .92; margin-bottom: 32px; } h1 em, h2 em { color: var(--orange); font-style: normal; }
.intro { color: var(--muted); font-size: 1rem; line-height: 1.9; max-width: 360px; }
.hero-actions { align-items: center; display: flex; gap: 23px; margin: 34px 0 54px; }
.primary-button, .submit-button { background: var(--ink); border: 0; color: white; cursor: pointer; font-weight: 700; padding: 16px 23px; transition: background .2s, transform .2s; } .primary-button:hover, .submit-button:hover { background: var(--orange); transform: translateY(-2px); } .primary-button span, .submit-button span { color: var(--lime); margin-right: 12px; }
.availability { color: var(--muted); font-size: .75rem; } .availability i { background: #71b85b; border-radius: 50%; display: inline-block; height: 7px; margin-left: 6px; width: 7px; }
.quick-facts { border-top: 1px solid var(--line); display: flex; gap: 36px; max-width: 400px; padding-top: 17px; } .quick-facts div { display: flex; flex-direction: column; } .quick-facts strong { font-family: var(--mono); font-size: 1.45rem; font-weight: 500; } .quick-facts span { color: var(--muted); font-size: .67rem; }
.hero-visual { align-self: center; position: relative; } .image-frame { background: #dedbd4; overflow: hidden; position: relative; } .image-frame img { display: block; filter: saturate(.75); height: min(65vw, 620px); object-fit: cover; width: 100%; } .image-frame::after { border: 1px solid rgba(255,255,255,.55); content: ""; inset: 16px; pointer-events: none; position: absolute; } .image-label { bottom: 24px; color: white; font-family: var(--mono); font-size: .75rem; left: 25px; position: absolute; z-index: 1; }
.circle-note { align-items: center; background: var(--lime); border-radius: 50%; display: flex; font-size: .75rem; font-weight: 700; height: 100px; justify-content: center; line-height: 1.45; position: absolute; right: -40px; text-align: center; top: -38px; transform: rotate(10deg); width: 100px; }
.floating-card { background: rgba(255,255,255,.8); backdrop-filter: blur(8px); border: 1px solid var(--line); box-shadow: 0 30px 40px rgba(23,33,31,.08); display: flex; flex-direction: column; gap: 4px; max-width: 180px; padding: 16px 18px; position: absolute; right: 18px; bottom: 26px; }
.floating-card span { color: var(--muted); font-family: var(--mono); font-size: .62rem; text-transform: uppercase; }
.floating-card strong { font-size: 1.05rem; }
.floating-card small { color: var(--muted); font-size: .68rem; }
.collection-section { margin: 0 auto; max-width: 1320px; padding: 0 5vw 110px; }
.light-heading { border-bottom-color: var(--line); }
.collection-category-heading { margin-top: 55px; scroll-margin-top: 100px; }
.product-grid { display: grid; gap: 28px 18px; grid-template-columns: repeat(5, 1fr); padding-top: 38px; }
.product-card { min-width: 0; }
.product-image { background: #e4e0d7; border: 0; cursor: pointer; display: block; overflow: hidden; padding: 0; position: relative; text-align: left; width: 100%; }
.product-image img { aspect-ratio: .82; background: #f1f1f1; display: block; object-fit: contain; transition: transform .25s ease; width: 100%; }
.product-card:hover .product-image img, .product-image:focus-visible img { transform: scale(1.04); }
.product-image:focus-visible { outline: 2px solid var(--orange); outline-offset: 3px; }
.product-number, .image-flip-hint { bottom: 9px; font-family: var(--mono); font-size: .64rem; padding: 3px 6px; position: absolute; }
.product-number { background: var(--lime); left: 9px; }
.image-flip-hint { background: rgba(23,33,31,.82); color: white; right: 9px; }
.product-card-info { align-items: start; display: flex; gap: 10px; justify-content: space-between; padding: 14px 0 8px; }
.product-card-info[role="button"] { cursor: pointer; }
.product-card-info[role="button"]:focus-visible { outline: 2px solid var(--orange); outline-offset: 3px; }
.product-card-info h3 { font-size: .86rem; margin: 0 0 4px; }
.product-card-info p { color: var(--muted); font-size: .68rem; margin: 0; }
.product-card-info strong { font-family: var(--mono); font-size: .75rem; font-weight: 500; white-space: nowrap; }
.product-prices { align-items: flex-end; display: flex; flex-direction: column; gap: 2px; white-space: nowrap; }
.product-prices del, .quick-facts .price-fact del { color: var(--muted); font-size: .65rem; }
.product-prices span { color: var(--orange); font-size: .62rem; font-weight: 700; }
.quick-facts .price-fact span { white-space: nowrap; }
.choose-product { background: transparent; border: 1px solid var(--line); color: var(--muted); cursor: pointer; font-size: .7rem; padding: 8px 10px; width: 100%; }
.product-card.is-selected .choose-product, .choose-product:hover { background: var(--ink); border-color: var(--ink); color: white; }
.cart-customization { color: var(--muted); font-size: .72rem; margin: 6px 0 0; }
.product-dialog { background: var(--paper); border: 0; color: var(--ink); max-height: min(90vh, 850px); max-width: 1080px; overflow: auto; padding: 0; position: relative; width: min(92vw, 1080px); }
.product-dialog::backdrop { background: rgba(15, 20, 19, .72); backdrop-filter: blur(3px); }
.product-dialog-content { display: grid; gap: clamp(24px, 5vw, 70px); grid-template-columns: 1.05fr .95fr; min-height: 590px; padding: 28px; position: relative; }
.dialog-close { align-items: center; background: var(--paper); border: 1px solid var(--line); border-radius: 50%; color: var(--ink); cursor: pointer; display: flex; font-size: 1.6rem; height: 40px; justify-content: center; line-height: 1; position: absolute; right: 14px; top: 14px; width: 40px; z-index: 2; }
.detail-gallery { min-width: 0; }
.detail-main-image { background: #e4e0d7; overflow: hidden; position: relative; }
.detail-main-image > img { aspect-ratio: .82; background: #f1f1f1; display: block; height: min(64vh, 550px); object-fit: contain; width: 100%; }
.custom-print-preview { color: #17211f; font-family: var(--display); font-size: clamp(.85rem, 1.8vw, 1.3rem); font-weight: 800; left: 50%; max-width: 72%; overflow-wrap: anywhere; pointer-events: none; position: absolute; text-align: center; text-shadow: 0 1px 2px rgba(255,255,255,.8); top: 17%; transform: translateX(-50%); z-index: 1; }
.gallery-arrow { align-items: center; background: rgba(255,255,255,.9); border: 0; border-radius: 50%; color: var(--ink); cursor: pointer; display: flex; font-family: Arial, sans-serif; font-size: 2rem; height: 46px; justify-content: center; line-height: 1; position: absolute; top: 50%; transform: translateY(-50%); width: 46px; z-index: 1; }
.gallery-previous { left: 12px; }
.gallery-next { right: 12px; }
.detail-thumbnails { display: flex; gap: 12px; margin-top: 14px; }
.detail-thumbnail { background: #e4e0d7; border: 2px solid transparent; cursor: pointer; padding: 0; width: 88px; }
.detail-thumbnail[aria-pressed="true"] { border-color: var(--orange); }
.detail-thumbnail img { aspect-ratio: .82; display: block; object-fit: contain; width: 100%; }
.detail-info { align-self: start; padding: 35px 0 15px; }
.detail-info .eyebrow { margin-bottom: 20px; }
.detail-info h2 { font-size: clamp(1.7rem, 3vw, 2.5rem); line-height: 1.2; margin: 0 0 20px; }
.detail-prices { align-items: baseline; display: flex; flex-wrap: wrap; gap: 12px; }
.detail-prices strong { font-family: var(--mono); font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 500; }
.detail-prices del { color: var(--muted); font-size: .8rem; }
.detail-prices span { background: var(--lime); font-size: .7rem; padding: 3px 7px; }
.detail-shipping { border-bottom: 1px solid var(--line); border-top: 1px solid var(--line); font-size: .9rem; margin: 20px 0; padding: 17px 0; }
.detail-personalization { border-bottom: 1px solid var(--line); margin-bottom: 18px; padding-bottom: 18px; }
.detail-personalization p { font-size: .82rem; line-height: 1.8; margin-bottom: 13px; }
.detail-personalization p span { display: inline-block; margin-top: 3px; }
.detail-personalization label { color: var(--ink); font-size: .82rem; margin-bottom: 8px; }
.detail-personalization label span { color: var(--orange); }
.detail-personalization textarea { background: white; border: 1px solid var(--line); color: var(--ink); display: block; font: inherit; min-height: 75px; padding: 10px 12px; resize: vertical; width: 100%; }
.detail-size-picker { border: 0; margin: 0; padding: 0 0 20px; }
.detail-size-picker legend { font-size: .95rem; margin-bottom: 14px; padding: 0; }
.detail-size-picker legend span { color: var(--orange); }
.detail-size-options { display: flex; flex-wrap: wrap; gap: 9px; }
.detail-size-options button { background: transparent; border: 1px solid var(--ink); cursor: pointer; min-width: 42px; padding: 7px 10px; transition: background .2s, color .2s; }
.detail-size-options button[aria-pressed="true"] { background: var(--ink); color: var(--paper); }
.detail-purchase { align-items: stretch; border-top: 1px solid var(--line); display: flex; gap: 12px; padding-top: 20px; }
.detail-quantity { align-items: center; border: 1px solid var(--line); display: flex; justify-content: space-between; min-width: 145px; }
.detail-quantity button { align-self: stretch; background: var(--ink); border: 0; color: white; cursor: pointer; font-size: 1.15rem; width: 42px; }
.detail-quantity output { font-family: var(--mono); text-align: center; }
.detail-add-button { background: var(--ink); border: 0; color: white; cursor: pointer; flex: 1; font-size: .85rem; font-weight: 700; min-height: 54px; padding: 12px 18px; text-transform: uppercase; }
.detail-add-button:hover { background: var(--orange); }
.detail-message { color: var(--muted); font-size: .78rem; min-height: 18px; }
.details-section { background: var(--ink); color: var(--paper); padding: 78px 5vw 95px; } .section-heading, .details-grid { margin: 0 auto; max-width: 1150px; } .section-heading { align-items: center; border-bottom: 1px solid rgba(245,242,236,.22); display: flex; gap: 25px; padding-bottom: 22px; } .section-heading span, .detail-number { color: var(--lime); font-family: var(--mono); font-size: .7rem; } .section-heading h2 { font-size: 1.25rem; margin: 0; } .details-grid { display: grid; gap: 30px; grid-template-columns: repeat(3, 1fr); padding-top: 48px; } .details-grid article { border-left: 1px solid rgba(245,242,236,.22); padding-left: 25px; } .details-grid h3 { font-size: 1.35rem; margin: 34px 0 12px; } .details-grid p { color: #aab5ae; font-size: .82rem; line-height: 1.8; max-width: 220px; }
.order-section { display: grid; gap: 10vw; grid-template-columns: .7fr 1fr; margin: 0 auto; max-width: 1000px; padding: 115px 5vw; } .order-intro h2 { font-size: clamp(3.2rem, 7vw, 6rem); letter-spacing: -.09em; line-height: .9; margin-bottom: 28px; } .order-instructions { color: var(--muted); font-size: .85rem; line-height: 1.8; } .selected-product { border-right: 3px solid var(--orange); display: flex; flex-direction: column; gap: 5px; margin-top: 35px; padding: 5px 14px 5px 0; } .selected-product span { color: var(--muted); font-size: .68rem; } .selected-product strong { font-size: .9rem; } .order-form { border-top: 2px solid var(--ink); padding-top: 8px; } .form-row { border-bottom: 1px solid var(--line); padding: 15px 0; } label { color: var(--muted); display: block; font-size: .72rem; margin-bottom: 8px; } input, select { background: transparent; border: 0; color: var(--ink); outline: 0; padding: 0; width: 100%; } input::placeholder { color: #aab3ad; } .split { display: grid; gap: 25px; grid-template-columns: 1fr 1fr; } select { appearance: none; cursor: pointer; } .quantity-control { align-items: center; display: flex; gap: 17px; } .quantity-control button { background: transparent; border: 0; cursor: pointer; font-size: 1.25rem; padding: 0; } .quantity-control output { font-family: var(--mono); } .total-line { align-items: center; display: flex; justify-content: space-between; padding: 24px 0; } .total-line strong { font-family: var(--mono); font-size: 1.3rem; font-weight: 500; } .submit-button { width: 100%; } .form-message { color: #438d51; font-size: .78rem; margin: 14px 0 0; min-height: 20px; }
.order-heading-row { align-items: flex-start; display: flex; gap: 14px; justify-content: space-between; }
.order-heading-row .eyebrow { margin-bottom: 22px; }
.order-heading-row h2 { margin-bottom: 24px; }
.whatsapp-contact { align-items: center; background: #e8f7ed; border: 1px solid rgba(37, 211, 102, .35); border-radius: 50%; display: flex; flex: 0 0 auto; height: 54px; justify-content: center; margin-top: 4px; transition: background .2s, transform .2s; width: 54px; }
.whatsapp-contact:hover { background: #d7f3e0; transform: translateY(-2px); }
.whatsapp-contact svg { fill: #25d366; height: 34px; width: 34px; }
.whatsapp-support { align-items: center; color: #257942; display: flex; font-size: .75rem; gap: 9px; line-height: 1.5; margin-top: 20px; }
.whatsapp-support:hover { color: #17572e; text-decoration: underline; }
.whatsapp-support svg { fill: #25d366; flex: 0 0 24px; height: 24px; width: 24px; }
.delivery-note { color: var(--muted); font-size: .72rem; margin: 10px 0 0; text-align: right; }
footer { border-top: 1px solid var(--line); color: var(--muted); display: flex; font-family: var(--mono); font-size: .65rem; justify-content: space-between; margin: 0 5vw; padding: 24px 0 35px; }
.back-link { color: var(--muted); font-size: .78rem; }
.checkout-main { margin: 0 auto; max-width: 1100px; padding: 85px 5vw 120px; }
.checkout-title h1 { font-size: clamp(3.3rem, 7vw, 6.5rem); letter-spacing: -.09em; line-height: .9; margin-bottom: 70px; }
.checkout-layout { display: grid; gap: 8vw; grid-template-columns: 1fr 1fr; }
.summary-panel, .payment-panel { border-top: 2px solid var(--ink); padding-top: 13px; }
.panel-label { font-size: .8rem; font-weight: 700; margin-bottom: 25px; }
.summary-item { align-items: center; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; padding: 14px 0; }
.summary-item span, .customer-note span { color: var(--muted); font-size: .72rem; }
.summary-item strong { font-size: .82rem; }
.summary-total { align-items: center; background: var(--lime); display: flex; justify-content: space-between; margin-top: 20px; padding: 18px; }
.summary-total strong { font-family: var(--mono); font-size: 1.2rem; font-weight: 500; }
.customer-note { border-right: 3px solid var(--orange); display: flex; flex-direction: column; gap: 5px; margin-top: 40px; padding-right: 14px; }
.customer-note strong { font-size: .9rem; } .customer-note small { color: var(--muted); font-size: .72rem; }
.payment-option { align-items: center; border: 1px solid var(--line); cursor: pointer; display: flex; gap: 14px; margin-bottom: 10px; padding: 16px; }
.payment-option:has(input:checked) { border-color: var(--orange); }
.payment-option input { accent-color: var(--orange); width: auto; }
.payment-option span { display: flex; flex: 1; flex-direction: column; gap: 4px; } .payment-option strong { font-size: .8rem; } .payment-option small { color: var(--muted); font-size: .68rem; } .payment-option b { color: var(--muted); font-family: var(--mono); font-size: .7rem; font-weight: 400; }
.demo-note { color: var(--muted); font-size: .65rem; margin: 15px 0 0; } .payment-panel .submit-button { margin-top: 25px; } .submit-button:disabled { cursor: default; opacity: .6; transform: none; } .empty-order { color: var(--muted); line-height: 1.8; } .empty-link { display: inline-block; margin-top: 20px; }
.orders-main { margin: 0 auto; max-width: 1150px; padding: 80px 5vw 120px; }
.orders-heading { align-items: end; display: flex; justify-content: space-between; }
.orders-heading h1 { font-size: clamp(3.2rem, 7vw, 6.5rem); letter-spacing: -.09em; line-height: .9; margin-bottom: 0; }
.admin-label { color: var(--muted); font-family: var(--mono); font-size: .7rem; }
.orders-actions { align-items: center; display: flex; gap: 10px; }
.orders-actions strong { font-family: var(--mono); font-size: .75rem; font-weight: 500; margin-left: 15px; }
.refresh-button, .clear-button { background: transparent; border: 1px solid var(--line); color: var(--ink); cursor: pointer; font-size: .7rem; padding: 9px 13px; }
.clear-button { border-color: var(--orange); color: var(--orange); }
.storage-note { color: var(--muted); font-size: .72rem; margin: 35px 0 16px; }
.orders-list { border-top: 2px solid var(--ink); }
.order-card { border-bottom: 1px solid var(--line); padding: 22px 0; }
.order-card-top, .order-product, .order-customer { align-items: center; display: flex; justify-content: space-between; }
.order-id { color: var(--muted); font-family: var(--mono); font-size: .68rem; }
.order-status { background: var(--lime); font-size: .65rem; padding: 5px 9px; }
.order-product { justify-content: start; margin: 20px 0; }
.order-index { color: var(--orange); font-family: var(--mono); font-size: .72rem; margin-left: 20px; }
.order-product h2 { font-size: 1.05rem; margin: 0 0 5px; } .order-product p { color: var(--muted); font-size: .72rem; margin: 0; }
.order-customer { align-items: start; background: rgba(23,33,31,.035); gap: 20px; padding: 14px 18px; }
.order-customer div { display: flex; flex: 1; flex-direction: column; gap: 5px; min-width: 0; } .order-customer span { color: var(--muted); font-size: .65rem; } .order-customer strong { font-size: .75rem; font-weight: 600; overflow-wrap: anywhere; }
.no-orders { border-bottom: 1px solid var(--line); color: var(--muted); padding: 35px 0; }
@media (max-width: 900px) { .product-grid { grid-template-columns: repeat(3, 1fr); } .brand-features { grid-template-columns: 1fr; } }
@media (max-width: 760px) { nav { display: none; } .promo-bar { letter-spacing: .04em; padding-left: 6vw; padding-right: 6vw; } .site-header { padding: 16px 6vw; } .hero { display: flex; flex-direction: column-reverse; gap: 55px; padding: 45px 6vw 80px; } .hero-visual { width: calc(100% - 12px); } .image-frame img { height: 105vw; } .circle-note { right: -12px; top: -25px; } .floating-card { bottom: 20px; right: 12px; } h1 { font-size: 4.1rem; } .brand-features { padding: 0 6vw 60px; } .collection-section { padding: 0 6vw 75px; } .product-grid { gap: 30px 12px; grid-template-columns: repeat(2, 1fr); } .details-section { padding: 65px 6vw 70px; } .details-grid { grid-template-columns: 1fr; gap: 37px; } .details-grid article { border-left: 0; border-bottom: 1px solid rgba(245,242,236,.22); padding: 0 0 28px; } .details-grid article:last-child { border: 0; padding-bottom: 0; } .details-grid h3 { margin-top: 16px; } .order-section { display: flex; flex-direction: column; gap: 55px; padding: 80px 6vw; } .checkout-main { padding: 55px 6vw 80px; } .checkout-title h1 { margin-bottom: 50px; } .checkout-layout { display: flex; flex-direction: column; gap: 60px; } footer { margin: 0 6vw; } }
@media (max-width: 760px) { .orders-main { padding: 55px 6vw 80px; } .orders-heading { align-items: start; flex-direction: column; gap: 30px; } .orders-actions { flex-wrap: wrap; } .orders-actions strong { margin-left: 0; width: 100%; } .order-customer { display: grid; grid-template-columns: 1fr 1fr; } }
@media (max-width: 760px) {
  .product-dialog { height: 100%; margin: 0; max-height: 100%; max-width: none; width: 100%; }
  .product-dialog-content { gap: 20px; grid-template-columns: 1fr; min-height: 0; padding: 58px 20px 24px; }
  .detail-main-image > img { height: min(42vh, 420px); }
  .detail-info { padding: 0; }
}
