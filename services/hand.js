
var Hand = (function (ServiceNameSpace){
    
    var _value_of_hand = function (hand) {
        var is_hand_Soft = this.is_soft(hand);

        function add(accumulator, newCard){
            var cardValue = (is_hand_Soft && newCard.name == enums.cardNames.ace) ? enums.aceValue.soft : newCard.value;
            return accumulator + cardValue;
        }

        var hand_value = hand.cards.reduce(add, 0) // 0 is the initial value for accumilator

        return hand_value;
    };

    var _is_bust = function (hand) {
        return (this.value_of_hand(hand) > 21);
    };

    var _is_soft = function (hand) {
        return (hand.cards[0].name == enums.cardNames.ace);
    };

    var _has_pair = function (hand) {
        var number_of_cards = hand.cards.length,
            first_card = hand.cards[0].value,
            second_card = hand.cards[1].value

        return (hand.type == enums.hand_types.primary && number_of_cards == 2 && (first_card == second_card));            
    };

    var _add_card = function (hand, card){
        hand.cards.push(card);
    };

    // Using the revealing module pattern
    var public = {};
        public.value_of_hand = _value_of_hand;
        public.is_bust       = _is_bust;
        public.is_soft       = _is_soft;
        public.has_pair      = _has_pair;
        public.add_card      = _add_card;    

    // Add public methods to the Service NameSpace defined in namespace.js
    ServiceNameSpace.Hand = public;
    return ServiceNameSpace;

});