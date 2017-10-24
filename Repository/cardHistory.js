var CardHistory = (function (RepositoryNameSpace) {  

    // Card
    var _cardHistory = [];

    var _addCard = function (newCard, db){
        db.cardHistory.push(newCard);
        //_cardHistory.push(newCard); // OLD
    }

    var public = {};
        public.add_card = _addCard;

        RepositoryNameSpace.CardHistory = public;
    return RepositoryNameSpace;

});