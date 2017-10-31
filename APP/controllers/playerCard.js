
var PlayerCard = (function (ControllerNameSpace) {

    var _play = function (newCardId, isPrimaryHand) {
                    
        var newCard = Domain.Collection.card.reduce(
                            function(prev, curr) {
                                return (curr.id == newCardId) ? curr : prev; 
                            }, undefined);

        // Get hands here. The UI can't get them for us!
        // get player hand
        var playerHand = isPrimaryHand
                         ? Domain.Models.hand.player.primary
                         : Domain.Models.hand.player.split;

        // get house hand
        var houseHand = Domain.Models.hand.house;

        // If player and house hands exist
        Services.Shoe.Remove_Card(newCard);

        // Add card to playerHand
        Services.Hand.add_card(playerHand, newCard);

        // Create a clean new dto
        var dto = Object.create(Domain.Models.dto);      
        // Replace the below code with: var dto = Govenor.Action();

        // ----------- This logic needs to be moved to the Govenor application -----------
        if (playerHand.cards.length >= Domain.Enums.minimumOf2CardsInAHand) {        
            if (Services.Hand.value_of_hand(playerHand) == Domain.Enums.twentyOne) {

                dto.action = Domain.Enums.actions.stand;
                dto.message = "Wait for house card.";

            } else if (Services.Hand.is_bust(playerHand)) {

                dto.outcome = Domain.Enums.outcome.lose;
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

    ControllerNameSpace.PlayerCard = public;
    return ControllerNameSpace;

});