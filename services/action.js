var Actions = (function (){
    
    // put private functions here from basicForm.js _normalizePlayerHand, _convertHouseHandToArrayIndex etc.

    var _get_lower_bound = function (lowerValue, playerHandValue) {
        return playerHandValue <= lowerValue13 ? lowerValue : playerHandValue;
    }

    var _get_upper_bound = function (upperValue, playerHandValue) {
        return playerHandValue >= upperValue ? upperValue : playerHandValue;
    }

    var _get_player_index = function (lower, upper, playerHandValue) {
        // formats the players hand value to between 13-19
        var _playerHandValue = _get_lower_bound(lower, playerHandValue);
            _playerHandValue = _get_upper_bound(upper, _playerHandValue);
        return _playerHandValue;
    }

    var _get_house_array_index = function (houseHandValue) {
        return houseHandValue - 2;
    }

    return {
        get_Soft = function (playerHand, houseHand){
            // This is all happy path! Add error catching.
            var _playerHandValue = Hand.value_of_hand(playerHand);
            var _playerHandIndex = _get_player_index(
                                                    indexBounds.soft.lower, // 13
                                                    indexBounds.soft.upper, // 19
                                                    _playerHandValue);
            
            var _houseHandValue = Hand.value_of_hand(houseHand);
            var _houseHandIndex = _get_house_array_index(houseHandValue);

            return collection.soft[_playerHandIndex][_houseHandIndex];
        },

        get_Hard = function (playerHand, houseHand){
            // This is all happy path! Add error catching.
            var _playerHandValue = Hand.value_of_hand(playerHand);
            var _playerHandIndex = _get_player_index(
                                                    indexBounds.hard.lower, // 8
                                                    indexBounds.hard.upper, // 17
                                                    _playerHandValue);
            
            var _houseHandValue = Hand.value_of_hand(houseHand);
            var _houseHandIndex = _get_house_array_index(houseHandValue);

            return collection.hard[_playerHandIndex][_houseHandIndex];
        },

        get_split = function (playerHand, houseHand){
            
        },

        get_I20 = function (playerHand, houseHand){

        },

        get_F4 = function (playerHand, houseHand){

        },

        split_player_hand = function (playerHand){
            var split_hand = models.hand.player.split.cards;
            split_hand = []; // reset split hand
            split_hand.push(playerHand.cards.pop());
        }
    }

})();
    