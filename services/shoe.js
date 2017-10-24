var Shoe = (function (ServiceNameSpace) {  

    /*
     *  All this should be server side.
     */

    var _full_value = undefined; 

    // A working set for the shoe.
    var _shoe = [
        { id: 1,  name: Domain.Enums.cardNames.ace,   count: _full_value }, 
        { id: 2,  name: Domain.Enums.cardNames.two,   count: _full_value },
        { id: 3,  name: Domain.Enums.cardNames.three, count: _full_value },
        { id: 4,  name: Domain.Enums.cardNames.four,  count: _full_value },
        { id: 5,  name: Domain.Enums.cardNames.five,  count: _full_value },
        { id: 6,  name: Domain.Enums.cardNames.six,   count: _full_value },
        { id: 7,  name: Domain.Enums.cardNames.seven, count: _full_value },
        { id: 8,  name: Domain.Enums.cardNames.eight, count: _full_value },
        { id: 9,  name: Domain.Enums.cardNames.nine,  count: _full_value },
        { id: 10, name: Domain.Enums.cardNames.ten,   count: _full_value },
        { id: 11, name: Domain.Enums.cardNames.jack,  count: _full_value },
        { id: 12, name: Domain.Enums.cardNames.queen, count: _full_value },
        { id: 13, name: Domain.Enums.cardNames.king,  count: _full_value }
    ];

    var _persist = function () {
        Repository.Shoe.Save(_shoe);
    };

    var _remove_card = function (card) {
        // find card in shoe
        var shoeCard = _shoe.reduce(
                        function(prev, curr) {
                            return (curr.id == card.id) ? curr : prev; 
                        }, undefined);

        // -1 from count
        shoeCard.count = shoeCard.count - 1;
    };

    var _reset = function () { 
        for (i=0; i<=_shoe.length; i++){
            _shoe[i].count = _full_value;
        }
    };

    var _init = function (numberOfDecks) {
         // sets up the shoe using number of decks
         _full_value = numberOfDecks * Domain.Enums.numberOfSuits; // count = decks in shoe (from config.json) * 4 (number of suits)
         _reset();
    };

    var public = {};
        public.Remove_Card = _remove_card;
        public.Reset = _reset;
        public.Persist = _persist;
        public.Init = _init;

        ServiceNameSpace.Shoe = public;
    return ServiceNameSpace;
    
});