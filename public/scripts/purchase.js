(function () {
  const productId = document.body?.dataset?.productId;
  if (!productId) return;

  const storageKey = `purchase_tracked_${productId}`;
  if (sessionStorage.getItem(storageKey)) return;

  const transactionId =
    `${productId}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  window.dataLayer = window.dataLayer || [];

  // optional: verhindert alte ecommerce Daten
  window.dataLayer.push({ ecommerce: null });

  // ✔️ sauberer Purchase Push für GTM + Google Ads
  window.dataLayer.push({
    event: "purchase",
    transaction_id: transactionId,
    value: 5.95,
    currency: "EUR",
    product_id: productId
  });

  sessionStorage.setItem(storageKey, "true");
})();