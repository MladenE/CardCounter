var Models = (function (DomainNameSpace) {

    // Object to pass back from the controllers
    var _dto = {
            outcome: undefined, // WIN | LOSE | DRAW | undefined
            action:  undefined, // hit | split | stand | double | undefined
            message: undefined  // Message from collection.<hard | soft | split | undefined
        };    


    // Public methods (revealer pattern)
    var public = {};
        public.dto  = _dto;

    // Add methods to the namespace
        DomainNameSpace.Models = public;
    return DomainNameSpace;

});