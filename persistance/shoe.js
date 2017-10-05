var Shoe = (function (PersistanceNameSpace, numberOfDecks) {  

    var _full_value = numberOfDecks * 4; // count = decks in shoe (from config.json) * 4 (number of suits)

    var _shoe = [
        { id: 1,  name: enums.cardNames.ace,   count: _full_value}, 
        { id: 2,  name: enums.cardNames.two,   count: _full_value},
        { id: 3,  name: enums.cardNames.three, count: _full_value},
        { id: 4,  name: enums.cardNames.four,  count: _full_value},
        { id: 5,  name: enums.cardNames.five,  count: _full_value},
        { id: 6,  name: enums.cardNames.six,   count: _full_value},
        { id: 7,  name: enums.cardNames.seven, count: _full_value},
        { id: 8,  name: enums.cardNames.eight, count: _full_value},
        { id: 9,  name: enums.cardNames.nine,  count: _full_value},
        { id: 10, name: enums.cardNames.ten,   count: _full_value},
        { id: 11, name: enums.cardNames.jack,  count: _full_value},
        { id: 12, name: enums.cardNames.queen, count: _full_value},
        { id: 13, name: enums.cardNames.king,  count: _full_value}
    ];

    var _remove_card = function (card) {
        // find card in shoe
        var shoeCard = Domain.Collection.card.reduce(
                                function(prev, curr) {
                                    return (curr.id == card.id) ? curr : prev; 
                                }, undefined);

        // -1 from count
        shoeCard.count = shoeCard.count - 1;
    };

    var _reset = function () { 
        // for each item in _shoe set count to _full_value;
     };

    var public = {};
        public.Remove_Card = _remove_card;
        public.Reset = _reset;

    PersistanceNameSpace.Shoe = public;
    return PersistanceNameSpace;
    
});