(function () {
  const productId = document.body?.dataset?.productId;

  if (!productId) {
    console.warn("purchase.js: missing productId");
    return;
  }

  const storageKey = `purchase_tracked_${productId}`;

  if (sessionStorage.getItem(storageKey)) return;

  const transactionId = `${productId}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "purchase",
    transaction_id: transactionId,
    value: 5.95,
    currency: "EUR",
    product_id: productId,
  });

  sessionStorage.setItem(storageKey, "true");
})();