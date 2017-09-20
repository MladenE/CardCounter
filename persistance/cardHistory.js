var CardHistory = (function () {  
    // Data that would be written to a persistance layer.

    // Card
    var _cardHistory = [];

    var _addCard = function (newCard){
        _cardHistory.push(newCard);
    }

    return {
        card_history : {
            addCard = function(newCard) {
                this._addCard(newCard);
            }
        }
        
    }
})();