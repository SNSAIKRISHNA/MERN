let price = document.getElementById("btc-price");
const btn = document.getElementById("btn");

btn.addEventListener("click", function updatePrice() {
  fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot")
    .then((response) => response.json())
    .then((data) => {
      price.textContent = `Current Bitcoin Price: $${data.data.amount}`;
    })
    .catch((error) => {
      console.error("Error fetching Bitcoin price:", error);
    })
    .finally(() => {
      console.log("Price update attempt finished.");
    });
setTimeout(updatePrice, 1000);
});
