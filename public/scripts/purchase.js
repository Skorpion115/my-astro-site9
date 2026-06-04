(function () {
  if (sessionStorage.getItem("purchase_tracked")) return;

  const productId = document.body.dataset.productId;

  const transactionId = productId + "-" + Date.now();

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "purchase",
    transaction_id: transactionId,
    value: 5.95,
    currency: "EUR",
    product_id: productId,
  });

  sessionStorage.setItem("purchase_tracked", "true");
})();