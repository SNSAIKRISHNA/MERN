export function getStockPrice() {
    return {
        name: "AAPL",
        sym :  "NASDAQ",
        price:(Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString()
    };  
    }