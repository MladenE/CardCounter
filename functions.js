
    var h  = "Hit",
        s  = "Stand",
        dh = "Double if allowed, otherwise hit",
        ds = "Double if allowed, otherwise stand",
        p  = "Split",
        ph = "Split if double after split is allowed, otherwise hit",
        rh = "Surrender if allowed, otherwise hit."


    var _hard = {
        "8":  [h,h,h,h,h,h,h,h,h,h],
        "9":  [h,dh,dh,dh,dh,h,h,h,h,h],
        "10": [dh,dh,dh,dh,dh,dh,dh,dh,h,h],
        "11": [dh,dh,dh,dh,dh,dh,dh,dh,dh,h],
        "12": [h,h,s,s,s,h,h,h,h,h],
        "13": [s,s,s,s,s,h,h,h,h,h],
        "14": [s,s,s,s,s,h,h,h,h,h],
        "15": [s,s,s,s,s,h,h,h,rh,h],
        "16": [s,s,s,s,s,h,h,rh,rh,rh],
        "17": [s,s,s,s,s,s,s,s,s,s]
    }

    var _soft = {
        "13": [h,h,h,dh,dh,h,h,h,h,h],
        "14": [h,h,h,dh,dh,h,h,h,h,h],
        "15": [h,h,dh,dh,dh,h,h,h,h,h],
        "16": [h,h,dh,dh,dh,h,h,h,h,h],
        "17": [h,dh,dh,dh,dh,h,h,h,h,h],
        "18": [s,ds,ds,ds,ds,s,s,h,h,h],
        "19": [s,s,s,s,s,s,s,s,s,s]
    }

    var _splits = {
        "22":   [ph,ph,p,p,p,p,h,h,h,h],
        "33":   [ph,ph,p,p,p,p,h,h,h,h],
        "44":   [h,h,h,ph,ph,h,h,h,h,h],
        "66":   [ph,p,p,p,p,h,h,h,h,h],
        "77":   [p,p,p,p,p,p,h,h,h,h],
        "88":   [p,p,p,p,p,p,p,p,p,p],
        "99":   [p,p,p,p,p,s,p,p,s,s],
        "1111": [p,p,p,p,p,p,p,p,p,p]
    }

var _cardNames = {
    ace: "ace",
    two: "two",
    three: "three",
    four: "four",
    five: "five",
    six: "six",
    seven: "seven",
    eight: "eight",
    nine: "nine",
    ten: "ten",
    jack: "jack",
    queen: "queen",
    king: "king"
}

var _aceValue = {
    hard: 11,
    soft: 1
}

var _card = {
    _a: { name: _cardNames.ace, value: 11, countValue: 0 },
    _2: { name: _cardNames.two, value: 2, countValue: 0 },
    _3: { name: _cardNames.three, value: 3, countValue: 0 },
    _4: { name: _cardNames.four, value: 4, countValue: 0 },
    _5: { name: _cardNames.five, value: 5, countValue: 0 },
    _6: { name: _cardNames.six, value: 6, countValue: 0 },
    _7: { name: _cardNames.seven, value: 7, countValue: 0 },
    _8: { name: _cardNames.eight, value: 8, countValue: 0 },
    _9: { name: _cardNames.nine, value: 9, countValue: 0 },
    _10: { name: _cardNames.ten, value: 10, countValue: 0 },
    _J: { name: _cardNames.jack, value: 10, countValue: 0 },
    _Q: { name: _cardNames.queen, value: 10, countValue: 0 },
    _K: { name: _cardNames.king, value: 10, countValue: 0 }
};

var _hand_types = {
    house: "house",
    primary: "primary",
    split: "split"
}

var _hand = {
        house: {
            type: _hand_types.house,
            cards: []},
        player: {
            primary:
                {
                    type: _hand_types.primary,
                    cards: []},
            split:
                { 
                    type: _hand_types.split,
                    cards: []}
        }
    }

var _actions = {
    hit: "hit",
    split: "split",
    stand: "stand",
    double: "double" };

var _outcome = {
    win: "WIN",
    lose: "LOSE",
    draw: "DRAW"
}

var _card_history = [];

var _shoe = {};

var Hand = (function (){
    
    return {
        value_of_hand = function (hand) {
            var is_hand_Soft = this.is_soft(hand);

            function add(accumulator, newCard){
                var cardValue = (is_hand_Soft && newCard.name == _cardNames.ace) ? _aceValue.soft : newCard.value;
                return accumulator + cardValue;
            }

            var hand_value = hand.cards.reduce(add, 0) // 0 is the initial value for accumilator

            return hand_value;
        },

        is_bust = function (hand) {
            return (this.value_of_hand(hand) > 21) ? true : false;
        },

        is_soft = function (hand) {
            return hand.cards[0].name == _cardNames.ace ? true : false;
        },

        should_split = function (hand) {
            var number_of_cards = hand.cards.length,
                first_card = hand.cards[0].value,
                second_card = hand.cards[1].value

            if (hand.type == _hand_types.primary && number_of_cards == 2 && (first_card == second_card)){
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



/*
    Quick logic sketch
*/

function PlayerCard(newCard, hand){

    GameState.update_Count(newCard);
    GameState.update_Remaining_Cards_In_Shoe(newCard);

    if (hand.cards.length > 1) {        
        if (Hand.value_of_hand(hand) == 21) {
            _actions.stand;
            // Wait for house card
        } else {
            if (Hand.is_bust(hand)) { // !!! must do is_soft check
                _outcome.lose;
            } else {
                if (Hand.should_split(hand)) {
                    _actions.split;
                } else {                   

                    var basicForm = Hand.is_soft(hand) ? Actions.get_Soft() : Actions.get_Hard();
                                        
                    var i20 = Actions.get_I20(hand);

                    var extendedForm = i20 == false ? Actions.get_F4(hand) : i20;

                    var action = extendedForm == false ? basicForm : extendedForm;

                    return action;
                    // return _actions
                }
            }
        }
    }
}

// When playing the house cards I don't know whether to use the player's primary or split hand.
function HouseCard(newCard, hand) {
    
    GameState.update_Count(newCard);
    GameState.update_Remaining_Cards_In_Shoe(newCard);


// loop through the players hands
// - check if split hand exists before doing logic

    var house_hand_value = Hand.value_of_hand(hand);
    var player_hand_value = Hand.value_of_hand(_hand.player);

    if (house_hand_value < player_hand_value) {
        if (house_hand_value < 17) {
            // Do nothing. House will take another card.
        } else {
            if (house_hand_value = player_hand_value) {
                _outcome.draw;
            } else {
                _outcome.win;
            }
        }
    } else {
        if (Hand.is_bust(hand)) {
            _outcome.win;
        } else {
            _outcome.lose;
        }
    }

}