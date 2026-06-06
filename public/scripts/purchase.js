(function () {
  const productId = document.body?.dataset?.productId;

  const priceRaw = document.body?.dataset?.price;
  const value = priceRaw ? parseFloat(priceRaw) : null;

  if (!productId || !priceRaw || isNaN(value)) return;

  const storageKey = `purchase_tracked_${productId}`;

  // const transactionId = `${productId}-${Date.now()}`;

  const transactionId = `${productId}-${crypto.randomUUID()}`;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({ ecommerce: null });

  window.dataLayer.push({
    event: "purchase",
    transaction_id: transactionId,
    value: value,
    currency: "EUR",
    product_id: productId,
  });

  sessionStorage.setItem(storageKey, "true");
})();