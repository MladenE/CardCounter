
var HouseCard = (function (ControllerNameSpace) {
    
    var _play = function (newCard, houseHand) {
    
        Services.Shoe.Remove_Card(newCard);

        // loop through the player's hands
        // - check if split hand exists before doing logic
        
        var house_hand_value = Hand.value_of_hand(houseHand);
        // ! When playing the house cards I don't know whether to use the player's primary or split hand.
        var player_hand_value = Hand.value_of_hand(models.hand.player);

        var gameState = Service.GameState._get_game_state();
        
        // Create a clean new dto
        var dto = Object.create(Domain.Models.dto);      
        dto = Service.Govenor._get_house_action(gameState);

        // send dto to UI
        return dto;
    };

    var public = {};
        public.play = _play;

    ControllerNameSpace.HouseCard = public;
    return ControllerNameSpace;
});