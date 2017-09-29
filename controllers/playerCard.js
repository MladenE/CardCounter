
var PlayerCard = (function (ControllerNameSpace) {

    var _play = function (newCardId, isPrimaryHand) {
                    
        // Create a clean new dto
        var dto = Object.create(models.dto);

        // Get card object from newCardName
        // Won't work! newCardName == "A", object card name == "ace"
        // Use new id field in _card
        var newCard = Domain.Collection.card.reduce(
                            function(prev, curr) {
                                return (currid == newCardId) ? curr : prev; 
                            }, undefined);

        // Get hands here. The UI can't get them for us!
        // get player hand
        var playerHand = isPrimaryHand
                         ? Domain.Models.hand.player.primary
                         : Domain.Models.hand.player.split;

        // get house hand
        var houseHand = Domain.Models.hand.house;

        // If player and house hands exist
        GameState.update_Count(newCard);
        GameState.update_Remaining_Cards_In_Shoe(newCard);

        // Add card to playerHand
        Services.Hand.add_card(playerHand, newCard);



        // ----------- Put code below this line into a service call -----------
        if (playerHand.cards.length >= 2) {        
            if (Services.Hand.value_of_hand(playerHand) == 21) {

                dto.action = Enums.actions.stand;
                dto.message = "Wait for house card.";

            } else if (Services.Hand.is_bust(playerHand)) {

                dto.outcome = Enums.outcome.lose;
                dto.message = "Bust";

            } else {

                var splitAction = Services.Hand.has_pair(playerHand)
                                    ? Actions.get_split(playerHand, houseHand)
                                    : undefined;

                if (splitAction != undefined) {

                    dto.action = splitAction;

                } else {             

                    var basicForm = Services.Hand.is_soft(playerHand)
                                    ? Services.Actions.get_Soft(playerHand, houseHand)
                                    : Services.Actions.get_Hard(playerHand, houseHand);
                                        
                    var i20 = Services.Actions.get_I20(playerHand, houseHand);

                    var extendedForm = i20 == undefined
                                        ? Services.Actions.get_F4(playerHand, houseHand)
                                        : i20;

                    var action = extendedForm == undefined
                                    ? basicForm
                                    : extendedForm;

                    dto.action = action;
                }
            }
        } else {
            dto.message = "2 or more cards are required.";
        }
        // send dto to UI
        return dto;
    
    };

    var public = {};
        public.play = _play;

    ControllerNameSpace.HouseCard = public;
    return ControllerNameSpace;

});