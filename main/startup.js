
// Rename this to startApp.js
// Acts like Main()

var Main = (function (global, ConfigFilePath) {

    var _configFilePath = ConfigFilePath; // Where is this coming from? querystring??
    var _config;

    var _parseConfigFile = function () {
        try {
            if (!JSON.parse(_ConfigFilePath)) {
                throw "Cannot parse ConfigFile."
            } else {
                _config = JSON.parse(_ConfigFilePath);

                // validate _config values
                if (!Integrity.Validate.string(_config.playerName))             throw "playerName is not a string.";
                if (!Integrity.Validate.string(_config.casinoName))             throw "casinoName is not a string.";
                if (!Integrity.Validate.string(_config.gameName))               throw "gameName is not a string.";
                if (!Integrity.Validate.uint(_config.gameRules.standOn))        throw "gameRules.standOn is not an uint.";
                if (!Integrity.Validate.uint(_config.gameRules.numberOfDecks))  throw "gameRules.numberOfDecks is not an uint.";
                if (!Integrity.Validate.url(_config.connectionString))          throw "connectionString is not a valid url.";
            }
        } catch (err) {
            alert("Config file failed JSON parse! \n\n " + err);
        }
    };

    var _init = function () {
        var Integrity = {}
            Validate(Integrity);

        _parseConfigFile();

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

        global.Config      = _config;
        global.Integrity   = Integrity;
        global.Persistance = Persistance;
        global.Domain      = Domain;
        global.Services    = Services;
        global.Controllers = Controllers;

        return global; // Returns the global window with the namespaces
    };

    return _init();

})(window, ConfigFilePath);

// Namespaces to attach modules to.
// Order is important!



