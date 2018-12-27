
var app = function() {

        var ticker = document.getElementById("ticker");

        //ticker.innerHTML = 'bruh';

        $.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=KOE7PMEOOPD18BYD", function (json) {

            jQuery.ajax({
                url: url,
                dataType: 'json',
                contentType: "application/json",
                success: function(data){
                    console.log(data);
                }
            });
    });
};
app();


//setInterval(updateStock, 5000);
