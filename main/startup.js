
// Rename this to startApp.js
// Acts like Main()

var Main = (function (ConfigFilePath) {

    var _configFilePath = ConfigFilePath;
    var _config;

    var _parseConfigFile = function () {
        try{
            _config = JSON.parse(_ConfigFilePath);
            // validate _config values
        } catch (e) {
            alert("Config file failed JSON parse!");
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
    };

    _init();

})(ConfigFilePath);

// Namespaces to attach modules to.
// Order is important!



