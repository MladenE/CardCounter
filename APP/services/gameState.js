var GameState = (function (ServiceNameSpace) {

    var _get_countValue_of_dealt_cards = function (dealtCards) { 
        var sum = dealtCards.reduce(
            function(accumulator, card)
            {
                accumulator + card.countValue
            }, 0);
        return sum;
    };

    var _get_trueCount = function () {
        var dealtCards = Service.Shoe.DealtCardsCount();
        var countValue = Service.Shoe.DealtCardsSumOfCountValue();
        var trueCount = countValue / dealtCards; // Need to do a /0 check.
        return trueCount;
    };

    var _persist_game_state = function (dealtCard, dto) {
        // collates gamestate and saves to persistence
        var gameState = Object.create(Domain.Models.gameState);
            gameState.gameNumber = Session.Config.gameNumber;
            gameState.turn.number = Session.Config.turn;
            gameState.turn.card = dealtCard;
            gameState.shoe.number = Session.Config.shoe;
            gameState.shoe.trueCount = _get_trueCount();
            gameState.shoe.instance = Service.Shoe.GetInstance(); // copy shoe
            gameState.hands = Domain.Models.hands;
            gameState.dto = dto;

        return gameState;
    };

    // Using the revealing module pattern
    var public = {};
        public.getTrueCount = _get_trueCount;
        public.persistGameState = _persist_game_state;
   
    // Add public methods to the Service NameSpace defined in namespace.js
    ServiceNameSpace.GameState = public;
    return ServiceNameSpace;

});