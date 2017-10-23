/*
*   This would be a Database or even local storage
*/

var MockDatabase = (function (PersistenceNameSpace) {

    var _document = {
        "user" : {
            "id" : undefined,
            "name" : undefined
        },
        "game" : {
            "casino" : "Betfair",
            "name" : "Super Blackjack",
            "rules" : {
                "standOn" : 17,
                "numberOfDecks" : 6   // etc...
            }
        }
        "cardHistory" : [],
        "shoeInstance" : []
    }

    var _public = {};
    _public.document = _document;

    PersistenceNameSpace.MockDatabase = _public;

})();