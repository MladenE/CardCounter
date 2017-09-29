var Validate = (function (NameSpace) {
    // validations for checking config.json values

    var _string = function (input){
        var _re = /\s/;
        return _re.test(input);
    };

    // countValue
    var _int = function (input){
        var _re = /^([+-]?[1-9]\d*|0)$/;
        return _re.test(input);
    };

    // cardId
    var _uint = function (input){
        var _re = /^([1-9]\d*|0)$/;
        return _re.test(input);
    };

    var _url = function (input){
        var _re = /\s/;
        return _re.test(input);
    };



    var public = {};
    public.string   = _string;
    public.int      = _int;
    public.url      = _url;

    NameSpace.Validate = public;
    return NameSpace;
});