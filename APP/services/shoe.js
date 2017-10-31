var Shoe = (function (ServiceNameSpace) {  

    var _full_value = undefined; 

    // A working set for the shoe.
    var _shoe = [
        { id: 1,  name: Domain.Enums.cardNames.ace,   countValue: Domain.Enums.countValue.minusOne, count: _full_value }, 
        { id: 2,  name: Domain.Enums.cardNames.two,   countValue: Domain.Enums.countValue.plusOne,  count: _full_value },
        { id: 3,  name: Domain.Enums.cardNames.three, countValue: Domain.Enums.countValue.plusOne,  count: _full_value },
        { id: 4,  name: Domain.Enums.cardNames.four,  countValue: Domain.Enums.countValue.plusOne,  count: _full_value },
        { id: 5,  name: Domain.Enums.cardNames.five,  countValue: Domain.Enums.countValue.plusOne,  count: _full_value },
        { id: 6,  name: Domain.Enums.cardNames.six,   countValue: Domain.Enums.countValue.plusOne,  count: _full_value },
        { id: 7,  name: Domain.Enums.cardNames.seven, countValue: Domain.Enums.countValue.zero,     count: _full_value },
        { id: 8,  name: Domain.Enums.cardNames.eight, countValue: Domain.Enums.countValue.zero,     count: _full_value },
        { id: 9,  name: Domain.Enums.cardNames.nine,  countValue: Domain.Enums.countValue.zero,     count: _full_value },
        { id: 10, name: Domain.Enums.cardNames.ten,   countValue: Domain.Enums.countValue.minusOne, count: _full_value },
        { id: 11, name: Domain.Enums.cardNames.jack,  countValue: Domain.Enums.countValue.minusOne, count: _full_value },
        { id: 12, name: Domain.Enums.cardNames.queen, countValue: Domain.Enums.countValue.minusOne, count: _full_value },
        { id: 13, name: Domain.Enums.cardNames.king,  countValue: Domain.Enums.countValue.minusOne, count: _full_value }
    ];

    // get number of dealt cards
    var _dealt_cards_count = function () {
        var dealtCards = 0;
        _shoe.forEach(function(element) {
            dealtCards += (_full_value - element.count);
        }, this);
        return dealtCards;
    };

    // get sum(countValue) of dealt cards
    var _dealt_cards_sum_of_countValue = function () {
        var total = 0;
        _shoe.forEach(function(element) {
            total += (_full_value - element.count) * element.countValue;
        }, this);
    };

    var _remove_card = function (cardToRemove) {
        // find card in shoe
        var shoeCard = _shoe.reduce(
                        function(prev, curr) {
                            return (curr.id == cardToRemove.id) ? curr : prev; 
                        }, undefined);

        // -1 from count
        shoeCard.count = shoeCard.count - 1;
    };

    var _reset = function () { 
        for (i=0; i<=_shoe.length; i++){
            _shoe[i].count = _full_value;
        }
    };

    var _get_instance = function () {
        // returns a copy of the shoe.
        // Prevents the heap value of the shoe being exposed and modified.
        return JSON.parse(JSON.stringify(_shoe));
    };

    var _init = function (numberOfDecks) {
         // sets up the shoe using number of decks
         _full_value = numberOfDecks * Domain.Enums.numberOfSuits; // count = decks in shoe (from config.json) * 4 (number of suits)
         _reset();
    };

    var public = {};
        public.Remove_Card = _remove_card;
        public.Reset = _reset;
        public.GetInstance = _get_instance;
        public.DealtCardsCount = _dealt_cards_count;
        public.DealtCardsSumOfCountValue = _dealt_cards_sum_of_countValue;
        public.Init = _init;

        ServiceNameSpace.Shoe = public;
    return ServiceNameSpace;
    
});