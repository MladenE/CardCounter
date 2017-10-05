
// Rename this to startApp.js
// Acts like Main()

var Main = (function (ConfigFilePath) {

    var _configFilePath = ConfigFilePath;
    var _config;

    var _parseConfigFile = function () {
        try {
            if (!JSON.parse(_ConfigFilePath)) {
                throw "Cannot parse ConfigFile."
            } else {
                _config = JSON.parse(_ConfigFilePath);

                // validate _config values
                if (!Integrity.Validate.string(_config["playerName"].value))                throw "playerName is not a string.";
                if (!Integrity.Validate.string(_config["casinoName"].value))                throw "casinoName is not a string.";
                if (!Integrity.Validate.string(_config["gameName"].value))                  throw "gameName is not a string.";
                if (!Integrity.Validate.uint(_config["gameRules"]["standOn"].value))        throw "gameRules.standOn is not an uint.";
                if (!Integrity.Validate.uint(_config["gameRules"]["numberOfDecks"].value))  throw "gameRules.numberOfDecks is not an uint.";
                if (!Integrity.Validate.url(_config["connectionString"].value))             throw "connectionString is not a valid url.";
            }
        } catch (err) {
            alert("Config file failed JSON parse! \n " + err);
        }
    };

    var _init = function () {
        var Integrity = {}
            Validate(Integrity);

        _parseConfigFile();

        var Persistance = {}
            CardHistory(Persistance);
            Shoe(Persistance, _config["gameRules"]["numberOfDecks"].value);
        
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

        var public = {};
            public.Config      = _config;
            public.Integrity   = Integrity;
            public.Persistance = Persistance;
            public.Domain      = Domain;
            public.Services    = Services;
            public.Controllers = Controllers;

        return public;
    };

    return _init();

})(ConfigFilePath);

// Namespaces to attach modules to.
// Order is important!



