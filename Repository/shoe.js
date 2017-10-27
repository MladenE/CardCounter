var Shoe = (function (RepositoryNameSpace) {

    var _save = function (shoe) {
        Persistence.MockDatabase.document.shoeInstance = shoe;
    };

    // get previous cards (shoeNumber)

    var public = {};
        public.Save = _save;

        RepositoryNameSpace.Shoe = public;
    return RepositoryNameSpace;

});