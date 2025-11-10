import { getStockPrice } from "./fakeStockAPI.js";
setInterval(function (){
    const stockData= getStockPrice();
    renderStockPrice(stockData);
}, 1500);
function renderStockPrice(stockData) {
    const stockDisplayname = document.getElementById("name");
    const stockDisplayprice = document.getElementById("price");
    const stockDisplaysymbol = document.getElementById("symbol");
    const stockDisplaytime = document.getElementById("time");

    const { name, sym, price, time } = stockData;

    stockDisplayname.textContent = `Name: ${name}`;
    stockDisplayprice.textContent = `Price: $${price}`;
    stockDisplaysymbol.textContent = `Symbol: ${sym}`;
    stockDisplaytime.textContent = `Time: ${time}`;

}

export { renderStockPrice };