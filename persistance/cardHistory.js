var CardHistory = (function (PersistanceNameSpace) {  

    // Card
    var _cardHistory = [];

    var _addCard = function (newCard){
        _cardHistory.push(newCard);
    }

    var public = {};
        public.add_card = _addCard;

    PersistanceNameSpace.CardHistory = public;
    return PersistanceNameSpace;

});