var GameState = (function () {

    return {
        update_Count = function (card){
            // add count values to an array
            _card_history.push(card);
        },

        update_Remaining_Cards_In_Shoe = function (card){
            // find cards by name
            // decrease count by 1
        },

        get_trueCount = function (){
            // get average of _count
            var sum = _card_history.reduce(
                function(accumulator, card)
                {
                    accumulator + card.countValue
                }, 0);
            var trueCount = sum / _card_history.length;
            return trueCount;
        }
    }

})();