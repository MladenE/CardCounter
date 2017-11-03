var Enums = (function (DomainNameSpace) {

    var _actions = {
        stand: "Stand",
        hit: "Hit",
        split: "Split",
        splitHit: "Split if double after split is allowed, otherwise hit.",
        doubleHit: "Double if allowed, otherwise hit.",
        doubleStand: "Double if allowed, otherwise stand.",
        surrenderHit: "Surrender if allowed, otherwise hit.",
        doNothing: "Do nothing. House will take another card." // Better as "Wait" "House will take another card"?  
    };      
    
    var _outcome = {
        win:  "WIN",
        lose: "LOSE",
        draw: "DRAW"
    };

    // keep in app
    var _hand_types = {
        house:   "house",
        primary: "primary",
        split:   "split"
    };

    // keep in app
    var _numberOfSuits = 4;

    // keep in app
    var _cardNames = {
        ace:   "ace",
        two:   "two",
        three: "three",
        four:  "four",
        five:  "five",
        six:   "six",
        seven: "seven",
        eight: "eight",
        nine:  "nine",
        ten:   "ten",
        jack:  "jack",
        queen: "queen",
        king:  "king"
    };

    // keep in app
    var _cardIcons = {
        ace:   "A",
        two:   "2",
        three: "3",
        four:  "4",
        five:  "5",
        six:   "6",
        seven: "7",
        eight: "8",
        nine:  "9",
        ten:   "10",
        jack:  "J",
        queen: "Q",
        king:  "K"
    };
    
    var _twentyOne = 21;

    var _minimumOf2CardsInAHand = 2;

    // keep in app
    var _aceValue = {
        hard: 11,
        soft: 1
    };

    // keep in app
    var _countValue = {
        minusOne: -1,
        zero:      0,
        plusOne:   1
    };

    var _indexBounds = {
        hard : {
            lower : 8,
            upper : 17
        },
        soft : {
            lower : 13,
            upper : 19
        }
    };

    var public = {};
        public.actions = _actions;
        public.outcome = _outcome;
        public.hand_types = _hand_types;
        public.numberOfSuits = _numberOfSuits;
        public.cardNames = _cardNames;
        public.cardIcons = _cardIcons;
        public.twentyOne = _twentyOne;
        public.minimumOf2CardsInAHand = _minimumOf2CardsInAHand;
        public.aceValue = _aceValue;
        public.countValue = _countValue;
        public.indexBounds = _indexBounds;

        DomainNameSpace.Enums = public;
    return DomainNameSpace;

});