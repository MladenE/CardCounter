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
        
    // ALL actions are contained in these tables.
    var h  = Domain.Enums.actions.hit,
        s  = Domain.Enums.actions.stand,
        dh = Domain.Enums.actions.doubleHit,
        ds = Domain.Enums.actions.doubleStand,
        p  = Domain.Enums.actions.split,
        ph = Domain.Enums.actions.splitHit,
        rh = Domain.Enums.actions.surrenderHit

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