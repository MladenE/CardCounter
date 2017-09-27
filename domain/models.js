var Models = (function (DomainNameSpace) {

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

    // Object to pass back from the controllers
    var _dto = {
            outcome: undefined, // WIN | LOSE | DRAW | undefined
            action:  undefined, // hit | split | stand | double | undefined
            message: undefined  // Message from collection.<hard | soft | split> | undefined
        };    

    // Public methods (revealer pattern)
    var public = {};
        public.hand = _hand;
        public.dto  = _dto;

    // Add methods to the namespace
    DomainNameSpace.Models = public;
    return DomainNameSpace;

});