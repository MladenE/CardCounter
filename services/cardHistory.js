var CardHistory = (function (ServicesNameSpace) {  

    /*
        This doesn't have a local working set like Shoe.
        All CRUD is done in the repository on the Persistence layer.
    */

    // Adds card to the persistence layer
    var _addCard = function (newCard, db){
        db.cardHistory.push(newCard);
        //_cardHistory.push(newCard); // OLD
    }


    var _update_Count = function (card, db){
        // add count values to an array
        Repository.card_history.add_card(card, db);
    };

    var _get_trueCount = function (){
        // get average of _count
        var sum = Repository.card_history.reduce(
            function(accumulator, card)
            {
                accumulator + card.countValue
            }, 0);
        var trueCount = sum / Repository.card_history.length;   // THIS WON'T GET THE .length
        // ? What happens if shoe resets?
        /* Abandon card history!
           - Get number of cards dealt as:
                cards dealt = total cards in full shoe - cards currently in shoe
                cards dealt = (cards * suits * decks) - sum(count of each card in shoe)
           */

        return trueCount;
    };    

    var public = {};
        public.add_card = _addCard;

        ServicesNameSpace.CardHistory = public;
    return ServicesNameSpace;

});