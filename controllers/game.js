var Game = (function (ControllerNameSpace) {

    var _newGame = function () {
        // 
        // clear hands
    };

    var _reset = function () {
        // clear everything: hands, shoe, cardHistory
    };

    var public = {};
    public.newGame   = _newGame;
    //public.undoEvent = _undoEvent; // removes the last action. Gets data from cardHistory {hand, card} and reversed it.
    public.reset     = _reset;

    ControllerNameSpace.Game = public;
    return ControllerNameSpace;
});