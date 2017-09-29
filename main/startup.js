
// Rename this to startApp.js
// Acts like Main()

var Main = (function (ConfigFilePath) {

    var _config;

    var _parseConfigFile = function () {
        // Check file exists first using Validate();
        _config = JSON.parse(ConfigFilePath);
    };

    var _namespaces = function () {
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

    var _init = function () {
        _parseConfigFile();
        _namespaces();
    };

    _init();

})(ConfigFilePath);

// Namespaces to attach modules to.
// Order is important!



