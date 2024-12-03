const nodeList = document.querySelectorAll("p");
var tickerSymbol = nodeList[0].innerHTML;

if (tickerSymbol === ""){
   //don't do anything
}else {

  var stocktickerdiv = document.getElementsByClassName('stockticker-wrapper');

  // Create a new stock price information element
  var div = document.createElement("div");
  // Set the div's content
  div.innerHTML = "<div id=\"stock-price-information\"></div>";
  // Add the div to the page
  stocktickerdiv[0].appendChild(div);
  
  // Create a new stock price element
  var div = document.createElement("div");
  // Set the div's content
  div.innerHTML = "<div id=\"stock-price\"></div>";
  // Add the div to the page
  stocktickerdiv[0].appendChild(div);
  
  // Create a new high price element
  var div = document.createElement("div");
  // Set the div's content
  div.innerHTML = "<div id=\"high-price\"></div>";
  // Add the div to the page
  stocktickerdiv[0].appendChild(div);
  
  // Create a new low-price element
  var div = document.createElement("div");
  // Set the div's content
  div.innerHTML = "<div id=\"low-price\"></div>";
  // Add the div to the page
  stocktickerdiv[0].appendChild(div);
  
  
  // Create a new trade datelement
  var div = document.createElement("div");
  // Set the div's content
  div.innerHTML = "<div id=\"trade-date\"></div>";
  // Add the div to the page
  stocktickerdiv[0].appendChild(div);
  
  
  // Make an HTTP request to the Alpha Vantage API
  //fetch ('http://127.0.0.1:5500/css/stock-price.json')
  fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+tickerSymbol+'&apikey=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
  
       // Extract the stock price ticker
      const stockTicker = data['Global Quote']['01. symbol'];
      
      // Extract the stock price from the API response
      const stockPrice = data['Global Quote']['05. price'];
  
      // Extract the high price
      const highPrice = data['Global Quote']['03. high'];
  
      // Extract the low price
      const lowPrice = data['Global Quote']['04. low'];
  
      // Extract the trade date
      const tradeDate = data['Global Quote']['07. latest trading day'];
     
      // Display title
      document.getElementById('stock-price-information').textContent = 'Stock Price Information (dynamically generated): ' ;
  
      // Display the stock price
      document.getElementById('stock-price').textContent = stockTicker + ': ' + stockPrice;
  
      // Display the high price
      document.getElementById('high-price').textContent = 'High Price: ' + highPrice;
  
       // Display the low price
       document.getElementById('low-price').textContent = 'Low Price: ' + lowPrice;
  
        // Display the last trade date
      document.getElementById('trade-date').textContent = 'Trade Date: ' + tradeDate;
  
    })
    .catch(error => {
      console.log('Error fetching stock price:', error);
    });
  

}