let priceText = document.getElementById("price-value");
const btn = document.getElementById("btn");

btn.addEventListener("click", function updatePrice() {
  fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot")
    .then((response) => response.json())
    .then((data) => {
      priceText.textContent = `$${(Math.round(data.data.amount * 100) / 100)}`;
    })
    .catch((error) => {
      console.error("Error fetching Bitcoin price:", error);
    })
    .finally(() => {
      console.log("Price update attempt finished.");
    });

  setTimeout(updatePrice, 1000);
  setInterval(updatePrice, 5000);
});
