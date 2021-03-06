
var Game = (function (ControllerNameSpace) {

    var _newGame = function () {
        // clear hands: Either house or player has won.
        Domain.Models.hand.house.cards = [];
        Domain.Models.hand.player.primary.cards = [];
        Domain.Models.hand.player.split.cards = [];
    };

    var _reset = function () {
        // clear everything: hands, shoe, cardHistory
        _newGame();
        Persistance.Shoe.Init(Session.config.gameRules.numberOfDecks);
    };

    var public = {};
        public.newGame   = _newGame;
        public.reset     = _reset;
        //public.undoEvent = _undoEvent; // removes the last action. Gets data from cardHistory {hand, card} and reversed it.

    ControllerNameSpace.Game = public;
    return ControllerNameSpace;
});