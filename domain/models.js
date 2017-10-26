var Models = (function (DomainNameSpace) {

    // The hands of cards as they appear on the casino table
    var _hand = {
            house: {
                type: Domain.Enums.hand_types.house,
                cards: []},
            player: {
                primary:
                    {
                        type: Domain.Enums.hand_types.primary,
                        cards: []},
                split:
                    { 
                        type: Domain.Enums.hand_types.split,
                        cards: []}
            }
        };

    // Object to pass back from the controllers
    var _dto = {
            outcome: undefined, // WIN | LOSE | DRAW | undefined
            action:  undefined, // hit | split | stand | double | undefined
            message: undefined  // Message from collection.<hard | soft | split | undefined
        };    

    // The state of the game to pass to persistence after every action.
    var _gameState = {
        gameNumber: undefined,      // Incremented after an outcome WIN | LOSE | DRAW
        turn : {
            Number: undefined,      // Incremented after each card. Does not reset with game.
            Card : undefined        // The card that has been dealt
        },
        shoe : {
            Number: undefined,      // Incremented when all counts in shoe == 0
            Instance: undefined     // Updated after each card
        },
        hands: undefined,           // Updated after each card
        dto: undefined              // Updated after each card
    };

    // Public methods (revealer pattern)
    var public = {};
        public.hand = _hand;
        public.dto  = _dto;

    // Add methods to the namespace
    DomainNameSpace.Models = public;
    return DomainNameSpace;

});