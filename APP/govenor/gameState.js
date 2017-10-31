
var GameState = (function (RepositoryNameSpace) {

        var _save = function (gameState) {
            Persistence.MockDatabase.document.gameState = gameState;
        };
    
        var _public = {};
            _public.Save = _save;
    
        RepositoryNameSpace.GameState = _piblic;
        return RepositoryNameSpace;
    });