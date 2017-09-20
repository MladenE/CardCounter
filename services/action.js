var Actions = (function (){
    
    var _get_lower_bound = function (lowerValue, playerHandValue) {
        return playerHandValue <= lowerValue ? lowerValue : playerHandValue;
    }

    var _get_upper_bound = function (upperValue, playerHandValue) {
        return playerHandValue >= upperValue ? upperValue : playerHandValue;
    }

    var _get_player_index = function (lower, upper, playerHandValue) {
        // formats the players hand value to between the lower and upper bounds of the relevant hand type (hard | soft)
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

            return Collection.soft[_playerHandIndex][_houseHandIndex];
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

            return Collection.hard[_playerHandIndex][_houseHandIndex];
        },

        get_split = function (playerHand, houseHand){
            // 55 & 1010 should return undefined
            var _split_key = playerHand.cards[0].value + playerHand.cards[1].value;
            var _houseHandValue = Hand.value_of_hand(houseHand);        
            var _house_index = _get_house_array_index(_houseHandValue);

            return Collection.split[_split_key][_house_index];
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
    