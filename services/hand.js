var Hand = (function (){
    
    return {
        value_of_hand = function (hand) {
            var is_hand_Soft = this.is_soft(hand);

            function add(accumulator, newCard){
                var cardValue = (is_hand_Soft && newCard.name == enums.cardNames.ace) ? enums.aceValue.soft : newCard.value;
                return accumulator + cardValue;
            }

            var hand_value = hand.cards.reduce(add, 0) // 0 is the initial value for accumilator

            return hand_value;
        },

        is_bust = function (hand) {
            return (this.value_of_hand(hand) > 21) ? true : false;
        },

        is_soft = function (hand) {
            return hand.cards[0].name == enums.cardNames.ace ? true : false;
        },

        should_split = function (hand) {
            var number_of_cards = hand.cards.length,
                first_card = hand.cards[0].value,
                second_card = hand.cards[1].value

            if (hand.type == enums.hand_types.primary && number_of_cards == 2 && (first_card == second_card)){
                // check actions for split
                return ;
            } else {
                return false;
            }
        },

        add_card = function (hand, card){
            hand.cards.push(card);
        }
    }

})();