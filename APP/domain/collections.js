var Collection = (function (DomainNameSpace) {
    

    // Reference table to get card values from the cardName passed into the controller.
    var _card = [
        { id: 1,  icon: Domain.Enums.cardIcons.ace,   name: Domain.Enums.cardNames.ace,   value: Domain.Enums.aceValue.hard },
        { id: 2,  icon: Domain.Enums.cardIcons.two,   name: Domain.Enums.cardNames.two,   value: 2 },
        { id: 3,  icon: Domain.Enums.cardIcons.three, name: Domain.Enums.cardNames.three, value: 3 },
        { id: 4,  icon: Domain.Enums.cardIcons.four,  name: Domain.Enums.cardNames.four,  value: 4 },
        { id: 5,  icon: Domain.Enums.cardIcons.five,  name: Domain.Enums.cardNames.five,  value: 5 },
        { id: 6,  icon: Domain.Enums.cardIcons.six,   name: Domain.Enums.cardNames.six,   value: 6 },
        { id: 7,  icon: Domain.Enums.cardIcons.seven, name: Domain.Enums.cardNames.seven, value: 7 },
        { id: 8,  icon: Domain.Enums.cardIcons.eight, name: Domain.Enums.cardNames.eight, value: 8 },
        { id: 9,  icon: Domain.Enums.cardIcons.nine,  name: Domain.Enums.cardNames.nine,  value: 9 },
        { id: 10, icon: Domain.Enums.cardIcons.ten,   name: Domain.Enums.cardNames.ten,   value: 10 },
        { id: 11, icon: Domain.Enums.cardIcons.jack,  name: Domain.Enums.cardNames.jack,  value: 10 },
        { id: 12, icon: Domain.Enums.cardIcons.queen, name: Domain.Enums.cardNames.queen, value: 10 },
        { id: 13, icon: Domain.Enums.cardIcons.king,  name: Domain.Enums.cardNames.king,  value: 10 }
    ];
    
    
    var public = {};
        public.card  = _card;

        DomainNameSpace.Collection = public;
    return DomainNameSpace;

});