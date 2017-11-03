
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
        var houseHand = Domain.Models.hand.house;   // Not needed. GameState will pass this to Govenor.

        // If player and house hands exist
        Services.Shoe.Remove_Card(newCard);

        // Add card to playerHand
        Services.Hand.add_card(playerHand, newCard);

        var gameState = Service.GameState._get_game_state();

        // Create a clean new dto
        var dto = Object.create(Domain.Models.dto);      
        dto = Service.Govenor._get_player_action(gameState, playerHand);

        // send dto to UI
        return dto;
    
    };

    var public = {};
        public.play = _play;

    ControllerNameSpace.PlayerCard = public;
    return ControllerNameSpace;

});