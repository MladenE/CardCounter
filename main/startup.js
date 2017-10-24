
// Rename this to startup.js
/*
    Acts a bit like IIS app.domain
    - on 1st load create the app
    - subsequence clicks go through controllers
*/

var Main = (function (global) {

    var _configFilePath = undefined; // Where is this coming from? querystring??

    var _registerModules = function () {
        
        global.Domain = {};
            Enums(global.Domain);
            Collection(global.Domain);
            Models(global.Domain);

        global.Persistence = {};
            MockDatabase(global.Persistence);

        global.Repository = {};
            CardHistory(global.Repository);
            Shoe(global.Repository);
        
        global.Services = {};            
            Actions(global.Services);
            GameState(global.Services);
            Hand(global.Services);
            Validate(global.Services)
        
        global.Controllers = {};            
            HouseCard(global.Controllers);
            PlayerCard(global.Controllers);

    };

    var _getConfigFilePath = function () {
        // querystring
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        var urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);

        try {
            if(urlParams.configFilePath == undefined){
                throw "configFilePath not specified in querystring."
            } else {
                _configFilePath = urlParams.configFilePath;
            }
        } catch (err) {
            alert(err);
        }
    };

    var _parseConfigFile = function () {
        try {
            if (!JSON.parse(_configFilePath)) {
                throw "Cannot parse ConfigFile."
            } else {
                var _config = JSON.parse(_configFilePath);

                // validate _config values
                if (!Services.Validate.string(_config.playerName))             throw "playerName is not a string.";
                if (!Services.Validate.string(_config.casinoName))             throw "casinoName is not a string.";
                if (!Services.Validate.string(_config.gameName))               throw "gameName is not a string.";
                if (!Services.Validate.uint(_config.gameRules.standOn))        throw "gameRules.standOn is not an uint.";
                if (!Services.Validate.uint(_config.gameRules.numberOfDecks))  throw "gameRules.numberOfDecks is not an uint.";
                if (!Services.Validate.url(_config.connectionString))          throw "connectionString is not a valid url.";
                
                global.Session.Config = _config;
            }
        } catch (err) {
            alert("Config file failed JSON parse! \n\n " + err);
        }
    };


    var _init = function () {
        _registerModules();
        // Get player name from querystring (Human name like Matthew, Mark, Luke, John etc..)
        // Get config for player from webService.
        // Load config into session.
        _getConfigFilePath();
        _parseConfigFile();
        // Write game settings to screen

        return global; // Returns the global window with the namespaces
    };

    return _init();

})(window);

// Namespaces to attach modules to.
// Order is important!



