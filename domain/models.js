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
            number: undefined,      // Incremented after each card. Does not reset with game.
            card : undefined        // The card that has been dealt
        },
        shoe : {
            number: undefined,      // Incremented when all counts in shoe == 0
            instance: []            // Updated after each card
        },
        hands: {},                  // Updated after each card
        dto: {}                     // Updated after each card
    };

    // Public methods (revealer pattern)
    var public = {};
        public.hand = _hand;
        public.dto  = _dto;
        public.gameState  = _gameState;

    // Add methods to the namespace
    DomainNameSpace.Models = public;
    return DomainNameSpace;

});