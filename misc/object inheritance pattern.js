
var inherit = function (BaseClass) {
	// Objects are reference objects
	// Use Object.create() to create a duplicate BaseClass to use as the base for the new Class
	return BaseClass === undefined ? {} : Object.create(BaseClass);
}

var Base = (function (base) {	
    // Private properties/methods
	var _propBase = "property of Base class";
	var _methBase = function () {
		return "_method of Base class";
	}
    
    // Extend base with exposed properties/methods
	base["propBase"] = _propBase;
	base["methBase"] = _methBase;
	return base;
	
})({}); // Pass in empty object {} as this is the base class.


var Class1 = (function (base) {	
    // Private properties/methods
	var _prop2 = "prop2";
	var _meth2 = function () {
		return "_meth2";
	}
    
    // Extend base with exposed properties/methods
	base["prop2"] = _prop2;
	base["meth2"] = _meth2;		
	return base;
	
})(inherit(Base));


var Class2 = (function (base) {	
    // Private properties/methods
	var _prop3 = "prop3";
	var _meth3 = function () {
		return "_meth3";
    }
    
	// Extend base with exposed properties/methods
	base["prop3"] = _prop3;
	base["meth3"] = _meth3;		
	return base;
	
})(inherit(Base));

//alert(JSON.stringify(Class, null, 4));
console.log(JSON.stringify(Base, null, 4));
console.log(JSON.stringify(Class1, null, 4));
console.log(Base.meth1());
console.log(Class1.prop1 + " " + Class1.prop2);
console.log(Class2.prop1 + " " + Class2.prop2 + " " + Class2.prop3);
