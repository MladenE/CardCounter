var Actions = (function (){
    
    return {
        get_Soft = function (playerHand, houseHand){

        },

        get_Hard = function (playerHand, houseHand){

        },

        get_split = function (playerHand) {
            
        },

        get_I20 = function (playerHand, houseHand){

        },

        get_F4 = function (playerHand, houseHand){

        },

        split_player_hand = function (playerHand) {
            var split_hand = _hand.player.split.cards;
            split_hand = []; // reset split hand
            split_hand.push(playerHand.cards.pop());
        }
    }

})();
    