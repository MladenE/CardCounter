
function HouseCard(newCard, hand) {
    
    GameState.update_Count(newCard);
    GameState.update_Remaining_Cards_In_Shoe(newCard);

// loop through the players hands
// - check if split hand exists before doing logic
    
    var house_hand_value = Hand.value_of_hand(hand);
    // ! When playing the house cards I don't know whether to use the player's primary or split hand.
    var player_hand_value = Hand.value_of_hand(models.hand.player);

    // Create clean new dto
    var dto = Object.create(models.dto);

    if (house_hand_value < player_hand_value) {
        if (house_hand_value < 17) {
            // Do nothing. House will take another card.
            dto.action = emums.actions.doNothing;
        } else {
            if (house_hand_value = player_hand_value) {
                dto.outcome = enums.outcome.draw;
            } else {
                dto.outcome = enums.outcome.win;
            }
        }
    } else {
        if (Hand.is_bust(hand)) {
            dto.outcome = enums.outcome.win;
        } else {
            dto.outcome = enums.outcome.lose;
        }
    }
    // send dto to UI
    return dto;

}