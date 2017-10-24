var Shoe = (function (RepositoryNameSpace) {

    var _save = function (shoe) {
        Persistence.MockDatabase.document.shoeInstance = shoe;
    };

    var public = {};
        public.Save = _save;

        RepositoryNameSpace.Shoe = public;
    return RepositoryNameSpace;

});