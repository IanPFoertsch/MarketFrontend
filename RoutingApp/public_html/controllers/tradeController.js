angular.module("myApp")
        .controller('tradeController', ['MarketService','TradeService', function(MarketService, TradeService) {
            var self = this;
            self.tradeService = TradeService;
            self.symbolArray = MarketService.symbolArray;
            }]);

                
                
                
            