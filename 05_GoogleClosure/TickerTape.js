goog.provide('tickerTape');
goog.require('goog.dom');
goog.require('goog.string.format');
goog.require('goog.net.XhrIo');

tickerTape.interestingStocks =
        ["HSBA.L", "RDSA.L", "BP.L", "VOD.L", "GSK.L", "AZN.L", "BARC.L", "BATS.L", "RIO.L", "BLT.L"];

tickerTape.insert = function(elementId) {
    var queryStringFormat = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in ("%s")&env=store://datatables.org/alltableswithkeys&format=json';

    var queryString = goog.string.format(queryStringFormat, tickerTape.interestingStocks);

    goog.net.XhrIo.send(queryString, function(completedEvent) {
        var tickerContainer = goog.dom.getElement(elementId);
        tickerContainer.innerHTML = "Hello Closure World - now I've got some data for you!";
    });
}