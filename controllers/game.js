var Game = (function (ControllerNameSpace) {

    var _newGame = function () {
        // 
        // clear hands
        Domain.Models.hand.house.cards = [];
        Domain.Models.hand.player.primary.cards = [];
        Domain.Models.hand.player.split.cards = [];
    };

    var _reset = function () {
        // clear everything: hands, shoe, cardHistory
        _newGame();
        Persistance.Shoe.Init(Config.gameRules.numberOfDecks);
    };

    var public = {};
    public.newGame   = _newGame;
    //public.undoEvent = _undoEvent; // removes the last action. Gets data from cardHistory {hand, card} and reversed it.
    public.reset     = _reset;

    ControllerNameSpace.Game = public;
    return ControllerNameSpace;
});