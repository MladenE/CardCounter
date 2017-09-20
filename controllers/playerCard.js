
function PlayerCard(newCard, playerHand, houseHand){

    GameState.update_Count(newCard);
    GameState.update_Remaining_Cards_In_Shoe(newCard);

    // Create a clean new dto
    var dto = Object.create(models.dto);

    if (playerHand.cards.length >= 2) {        
        if (Hand.value_of_hand(playerHand) == 21) {
            dto.action = Enums.actions.stand;
            // Wait for house card
        } else if (Hand.is_bust(playerHand)) { // !!! must do is_soft check
            dto.outcome = Enums.outcome.lose;
        } else {
            var splitAction = Hand.has_pair(playerHand) ? Actions.get_split(playerHand, houseHand) : undefined;

            if (splitAction != undefined) {
                dto.action = splitAction;
            } else {             
                var basicForm = Hand.is_soft(playerHand) ? Actions.get_Soft(playerHand, houseHand) : Actions.get_Hard(playerHand, houseHand);
                                    
                var i20 = Actions.get_I20(playerHand, houseHand);

                var extendedForm = i20 == false ? Actions.get_F4(playerHand, houseHand) : i20;

                var action = extendedForm == false ? basicForm : extendedForm;

                dto.action = action;
            }
        }
    } else {
        dto.message = "2 or more cards are required."
    }
    // send dto to UI
    return dto;
}