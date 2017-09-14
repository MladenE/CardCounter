
function PlayerCard(newCard, hand){

    GameState.update_Count(newCard);
    GameState.update_Remaining_Cards_In_Shoe(newCard);

    if (hand.cards.length >= 2) {        
        if (Hand.value_of_hand(hand) == 21) {
            models.dto.action = enums.actions.stand;
            // Wait for house card
        } else {
            if (Hand.is_bust(hand)) { // !!! must do is_soft check
                models.dto.outcome = enums.outcome.lose;
            } else {
                if (Hand.should_split(hand)) {
                    models.dto.action = enums.actions.split;
                } else {                   

                    var basicForm = Hand.is_soft(hand) ? Actions.get_Soft() : Actions.get_Hard();
                                        
                    var i20 = Actions.get_I20(hand);

                    var extendedForm = i20 == false ? Actions.get_F4(hand) : i20;

                    var action = extendedForm == false ? basicForm : extendedForm;

                    models.dto.action = action;
                }
            }
        }
    }
    // send dto to UI
    return models.dto;
}