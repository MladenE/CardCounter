var collection = (function () {  

    // Card
    var _cardHistory = [];

    var _addCard = function (newCard){
        _cardHistory.push(newCard);
    }

    var _shoe = {};

    return {
        card_history : {
            addCard = function(newCard){
                this._addCard(newCard);
            }
        },
        
        shoe : {}
    }
})();