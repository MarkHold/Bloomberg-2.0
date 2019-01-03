
var app = function() {

        var ticker = document.getElementById("ticker");

        //ticker.innerHTML = 'bruh';

        $.getJSON("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=KOE7PMEOOPD18BYD", function (json) {

          var times = json["Realtime Currency Exchange Rate"];

              console.log(times[0]);
    });
};
app();
