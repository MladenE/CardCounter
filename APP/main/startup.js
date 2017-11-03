
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
            Enums(global.Domain);       // Moved to Govnr
            Collection(global.Domain);
            Models(global.Domain);

            // Moved to Govnr
        global.Persistence = {};
            MockDatabase(global.Persistence);

            // Moved to Govnr
        global.Repository = {};
            CardHistory(global.Repository);
            Shoe(global.Repository);
        
        global.Services = {};            
            Actions(global.Services);   // Moved to Govnr
            GameState(global.Services); 
            Hand(global.Services);      // Moved to Govnr
            Validate(global.Services)
        
        global.Controllers = {};            
            HouseCard(global.Controllers);
            PlayerCard(global.Controllers);

    };

    var _getGameId = function () {
        /* 
            Gets the gameId from the url to use in communications with the Govenor
        */
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

    var _getConfigFile = function () {
        /*
            Using the gameId from the querystring, make a call to Govenor to get setup information for the shoe.

            ? Is this needed? Any setup information could just be kept by the Govenor and referenced using the gameId!
            - Could be useful for the purpose of checking the game you are playing matches the casino.
        */
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
                if (!Services.Validate.uint(_config.gameRules.standOn))        throw "gameRules.standOn is not an uint.";       // Not needed. Keep on Govenor!
                if (!Services.Validate.uint(_config.gameRules.numberOfDecks))  throw "gameRules.numberOfDecks is not an uint.";
                
                global.Session.Config = _config;
                global.Session.Config.game = 1;
                global.Session.Config.turn = 1;
                global.Session.Config.shoe = 0;     // Shoe service should increment this on init and reset
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
        _getGameId();
        _getConfigFile();
        _parseConfigFile();
        // Write game settings to screen

        return global; // Returns the global window with the namespaces
    };

    return _init();

})(window);

// Namespaces to attach modules to.
// Order is important!



