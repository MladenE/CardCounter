// Takes house hand : calls house logic

// ----------- This logic needs to be moved to the Govenor application -----------
if (house_hand_value < player_hand_value) {
    if (house_hand_value < Session.Config.gameRules.standOn) { // replace 17 with emum for "house stand limit"

        // Do nothing. House will take another card.
        dto.action = Domain.Emums.actions.doNothing;
        dto.message = "House's hand has not reached the stand limit of 17";

    } else if (house_hand_value = player_hand_value) {

        dto.outcome = Domain.Enums.outcome.draw;

    } else {

        dto.outcome = Domain.Enums.outcome.win;
        dto.message = "Player wins " + player_hand_value + " to " + house_hand_value;

    }
} else if (Hand.is_bust(houseHand)) {

    dto.outcome = Domain.Enums.outcome.win;
    dto.message = "House is bust.";

} else {

    dto.outcome = Domain.Enums.outcome.lose;
    dto.message = "House wins " + house_hand_value + " to " + player_hand_value;

}