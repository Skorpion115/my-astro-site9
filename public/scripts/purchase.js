(function () {
  const productId = document.body?.dataset?.productId;

  const priceRaw = document.body?.dataset?.price;
  const value = priceRaw ? parseFloat(priceRaw) : null;

  if (!productId || !priceRaw || isNaN(value)) return;

  const sessionKey = `valid_purchase_${productId}`;
  const localKey = `purchase_done_${productId}`;

  // 🔴 1. HARTE DUPLIKAT-SPERRE (global)
  if (localStorage.getItem(localKey) === "1") {
    return;
  }

  // 🔴 2. CHECK: echter Kauf erlaubt?
  const isValidPurchase = sessionStorage.getItem(sessionKey) === "1";

  if (!isValidPurchase) {
    return;
  }

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

  // 🔴 permanent markieren (verhindert JEGLICHE Doppelzählung)
  localStorage.setItem(localKey, "1");

  // 🔴 session Flag verbrauchen
  sessionStorage.removeItem(sessionKey);
})();