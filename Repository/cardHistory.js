var CardHistory = (function (RepositoryNameSpace) {  

    // Card
    var _cardHistory = [];

    var _addCard = function (newCard){
        _cardHistory.push(newCard);
    }

    var public = {};
        public.add_card = _addCard;

        RepositoryNameSpace.CardHistory = public;
    return RepositoryNameSpace;

});