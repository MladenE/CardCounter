
var HouseCard = (function (ControllerNameSpace) {
    
    var _play = function (newCard, houseHand) {

        GameState.update_Count(newCard);
        GameState.update_Remaining_Cards_In_Shoe(newCard);

        // loop through the players hands
        // - check if split hand exists before doing logic
        
        var house_hand_value = Hand.value_of_hand(houseHand);
        // ! When playing the house cards I don't know whether to use the player's primary or split hand.
        var player_hand_value = Hand.value_of_hand(models.hand.player);

        // Create clean new dto
        var dto = Object.create(models.dto);

        if (house_hand_value < player_hand_value) {
            if (house_hand_value < 17) { // replace 17 with emum for "house stand limit"
                // Do nothing. House will take another card.
                dto.action = Emums.actions.doNothing;
                dto.message = "House's hand has not reached the stand limit of 17";
            } else if (house_hand_value = player_hand_value) {
                dto.outcome = Enums.outcome.draw;
            } else {
                dto.outcome = Enums.outcome.win;
                dto.message = "Player wins " + player_hand_value + " to " + house_hand_value;
            }
        } else if (Hand.is_bust(houseHand)) {
            dto.outcome = Enums.outcome.win;
            dto.message = "House is bust.";
        } else {
            dto.outcome = Enums.outcome.lose;
            dto.message = "House wins " + house_hand_value + " to " + player_hand_value;
        }
        // send dto to UI
        return dto;
    };

    var public = {};
        public.play = _play;

    ControllerNameSpace.HouseCard = public;
    return ControllerNameSpace;
});