var Collection = (function (DomainNameSpace) {
    

    // Reference table to get card values from the cardName passed into the controller.
    var _card = [
        { id: 1,  name: enums.cardNames.ace,   countValue: enums.countValue.minusOne, value: enums.aceValue.hard },
        { id: 2,  name: enums.cardNames.two,   countValue: enums.countValue.plusOne,  value: 2 },
        { id: 3,  name: enums.cardNames.three, countValue: enums.countValue.plusOne,  value: 3 },
        { id: 4,  name: enums.cardNames.four,  countValue: enums.countValue.plusOne,  value: 4 },
        { id: 5,  name: enums.cardNames.five,  countValue: enums.countValue.plusOne,  value: 5 },
        { id: 6,  name: enums.cardNames.six,   countValue: enums.countValue.plusOne,  value: 6 },
        { id: 7,  name: enums.cardNames.seven, countValue: enums.countValue.zero,     value: 7 },
        { id: 8,  name: enums.cardNames.eight, countValue: enums.countValue.zero,     value: 8 },
        { id: 9,  name: enums.cardNames.nine,  countValue: enums.countValue.zero,     value: 9 },
        { id: 10, name: enums.cardNames.ten,   countValue: enums.countValue.minusOne, value: 10 },
        { id: 11, name: enums.cardNames.jack,  countValue: enums.countValue.minusOne, value: 10 },
        { id: 12, name: enums.cardNames.queen, countValue: enums.countValue.minusOne, value: 10 },
        { id: 13, name: enums.cardNames.king,  countValue: enums.countValue.minusOne, value: 10 }
    ];
        

    // ALL actions are contained in these tables.
    var h  = enums.actions.hit,
        s  = enums.actions.stand,
        dh = enums.actions.doubleHit,
        ds = enums.actions.doubleStand,
        p  = enums.actions.split,
        ph = enums.actions.splitHit,
        rh = enums.actions.surrenderHit

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
        };

    var _soft = {
            "13": [h,h,h,dh,dh,h,h,h,h,h],
            "14": [h,h,h,dh,dh,h,h,h,h,h],
            "15": [h,h,dh,dh,dh,h,h,h,h,h],
            "16": [h,h,dh,dh,dh,h,h,h,h,h],
            "17": [h,dh,dh,dh,dh,h,h,h,h,h],
            "18": [s,ds,ds,ds,ds,s,s,h,h,h],
            "19": [s,s,s,s,s,s,s,s,s,s]
        };

    var _split = {
            "22":   [ph,ph,p,p,p,p,h,h,h,h],
            "33":   [ph,ph,p,p,p,p,h,h,h,h],
            "44":   [h,h,h,ph,ph,h,h,h,h,h],
            "66":   [ph,p,p,p,p,h,h,h,h,h],
            "77":   [p,p,p,p,p,p,h,h,h,h],
            "88":   [p,p,p,p,p,p,p,p,p,p],
            "99":   [p,p,p,p,p,s,p,p,s,s],
            "1111": [p,p,p,p,p,p,p,p,p,p]
        };
    
    var public = {};
        public.hard  = _hard;
        public.soft  = _soft;
        public.split = _split;
        public.card  = _card;

    DomainNameSpace.Collection = public;
    return DomainNameSpace;

});