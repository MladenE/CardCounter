var models = (function (DomainNameSpace) {

    // The hands of cards as they appear on the casino table
    var _hand = {
            house: {
                type: enums.hand_types.house,
                cards: []},
            player: {
                primary:
                    {
                        type: enums.hand_types.primary,
                        cards: []},
                split:
                    { 
                        type: enums.hand_types.split,
                        cards: []}
            }
        };

    // What is this. It isn't the shoe! Should the countValues all be 0?
    var _card = {
            _a: { name: enums.cardNames.ace, value: enums.aceValue.hard, countValue: 0 },
            _2: { name: enums.cardNames.two, value: 2, countValue: 0 },
            _3: { name: enums.cardNames.three, value: 3, countValue: 0 },
            _4: { name: enums.cardNames.four, value: 4, countValue: 0 },
            _5: { name: enums.cardNames.five, value: 5, countValue: 0 },
            _6: { name: enums.cardNames.six, value: 6, countValue: 0 },
            _7: { name: enums.cardNames.seven, value: 7, countValue: 0 },
            _8: { name: enums.cardNames.eight, value: 8, countValue: 0 },
            _9: { name: enums.cardNames.nine, value: 9, countValue: 0 },
            _10: { name: enums.cardNames.ten, value: 10, countValue: 0 },
            _J: { name: enums.cardNames.jack, value: 10, countValue: 0 },
            _Q: { name: enums.cardNames.queen, value: 10, countValue: 0 },
            _K: { name: enums.cardNames.king, value: 10, countValue: 0 }
        };

    // Object to pass back from the controllers
    var _dto = {
            outcome: undefined, // WIN | LOSE | DRAW | undefined
            action:  undefined, // hit | split | stand | double | undefined
            message: undefined  // Message from collection.<hard | soft | split> | undefined
        };    

    var public = {};
        public.hand = _hand;
        public.card = _card;
        public.dto  = _dto;

    DomainNameSpace.Models = public;
    return DomainNameSpace;

});