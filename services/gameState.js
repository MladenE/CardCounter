var GameState = (function (ServiceNameSpace) {

        var _update_Count = function (card){
            // add count values to an array
            Persistance.card_history.push(card);
        };

        var _update_Remaining_Cards_In_Shoe = function (card){
            // find cards by name
            // decrease count by 1
        };

        var _get_trueCount = function (){
            // get average of _count
            var sum = Persistance.card_history.reduce(
                function(accumulator, card)
                {
                    accumulator + card.countValue
                }, 0);
            var trueCount = sum / Persistance.card_history.length;
            return trueCount;
        };    

    // Using the revealing module pattern
    var public = {};
        public.update_Count                   = _update_Count;
        public.update_Remaining_Cards_In_Shoe = _update_Remaining_Cards_In_Shoe;
        public.get_trueCount                  = _get_trueCount;
   
    // Add public methods to the Service NameSpace defined in namespace.js
    ServiceNameSpace.GameState = public;
    return ServiceNameSpace;

});