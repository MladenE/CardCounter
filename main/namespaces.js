
// Rename this to startApp.js
// Acts like Main()

// Namespaces to attach modules to.
// Order is important!

var Persistance = {}
    CardHistory(Persistance);
    Shoe(Persistance);

var Domain = {};
    Eums(Domain);
    Collection(Domain);
    Models(Domain);

var Services = {};
    Actions(Services);
    GameState(Services);
    Hand(Services);

var Controllers = {};
    HouseCard(Controllers);
    PlayerCard(Controllers);

