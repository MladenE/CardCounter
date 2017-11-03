
// Govenor is the web service that makes all the decisions about moves.
// It returns these decisions to the App via a dto

var Govenor = (function (ServiceNameSpace) {

    var _get_player_action = function (gameState, playerHand){
        // ajax call to Govenor
        return ''; // Returns the dto with player actions.
    };

    var _get_house_action = function (gameState){
        // ajax call to Govenor
        return ''; // Returns the dto with player actions.
    };

    var public = {};
        public.getPlayerAction = _get_player_action;
        public.getHouseAction = _get_house_action;

        // Add public methods to the Service NameSpace defined in namespace.js
        ServiceNameSpace.Govenor = public;
    return ServiceNameSpace;


});