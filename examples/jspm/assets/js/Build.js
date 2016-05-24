System.registerDynamic("npm:core-js@1.2.6/library/modules/$.cof.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iobject.js", ["npm:core-js@1.2.6/library/modules/$.cof.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.defined.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-iobject.js", ["npm:core-js@1.2.6/library/modules/$.iobject.js", "npm:core-js@1.2.6/library/modules/$.defined.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject.js'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.fails.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.object-sap.js", ["npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.fails.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core.js'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails.js');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js", ["npm:core-js@1.2.6/library/modules/$.to-iobject.js", "npm:core-js@1.2.6/library/modules/$.object-sap.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject.js');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap.js')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor.js", ["npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/helpers/get.js", ["npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$getOwnPropertyDescriptor = $__require('npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor.js')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/create.js", ["npm:core-js@1.2.6/library/modules/$.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/object/create.js", ["npm:core-js@1.2.6/library/fn/object/create.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/create.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.global.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.export.js", ["npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.ctx.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-object.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.an-object.js", ["npm:core-js@1.2.6/library/modules/$.is-object.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.a-function.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.ctx.js", ["npm:core-js@1.2.6/library/modules/$.a-function.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function.js');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-proto.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/$.ctx.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('npm:core-js@1.2.6/library/modules/$.js').getDesc,
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js", ["npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.set-proto.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js');
  $export($export.S, 'Object', {setPrototypeOf: $__require('npm:core-js@1.2.6/library/modules/$.set-proto.js').set});
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.core.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/set-prototype-of.js", ["npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').Object.setPrototypeOf;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/object/set-prototype-of.js", ["npm:core-js@1.2.6/library/fn/object/set-prototype-of.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/set-prototype-of.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/helpers/inherits.js", ["npm:babel-runtime@5.8.35/core-js/object/create.js", "npm:babel-runtime@5.8.35/core-js/object/set-prototype-of.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$create = $__require('npm:babel-runtime@5.8.35/core-js/object/create.js')["default"];
  var _Object$setPrototypeOf = $__require('npm:babel-runtime@5.8.35/core-js/object/set-prototype-of.js')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/define-property.js", ["npm:core-js@1.2.6/library/modules/$.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/object/define-property.js", ["npm:core-js@1.2.6/library/fn/object/define-property.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/define-property.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/helpers/create-class.js", ["npm:babel-runtime@5.8.35/core-js/object/define-property.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('npm:babel-runtime@5.8.35/core-js/object/define-property.js')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/helpers/class-call-check.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

System.register("assets/js/UI/Query.js", ["npm:babel-runtime@5.8.35/helpers/create-class.js", "npm:babel-runtime@5.8.35/helpers/class-call-check.js"], function (_export) {
    var _createClass, _classCallCheck, Query;

    return {
        setters: [function (_npmBabelRuntime5835HelpersCreateClassJs) {
            _createClass = _npmBabelRuntime5835HelpersCreateClassJs["default"];
        }, function (_npmBabelRuntime5835HelpersClassCallCheckJs) {
            _classCallCheck = _npmBabelRuntime5835HelpersClassCallCheckJs["default"];
        }],
        execute: function () {
            "use strict";

            Query = (function () {
                function Query() {
                    _classCallCheck(this, Query);
                }

                _createClass(Query, [{
                    key: "show",
                    value: function show(melding) {
                        document.querySelector("#melding").innerHTML = melding;
                    }
                }]);

                return Query;
            })();

            _export("default", Query);
        }
    };
});
System.register("assets/js/UI/Alert.js", ["npm:babel-runtime@5.8.35/helpers/get.js", "npm:babel-runtime@5.8.35/helpers/inherits.js", "npm:babel-runtime@5.8.35/helpers/class-call-check.js", "assets/js/UI/Query.js"], function (_export) {
    var _get, _inherits, _classCallCheck, Query, Alert;

    return {
        setters: [function (_npmBabelRuntime5835HelpersGetJs) {
            _get = _npmBabelRuntime5835HelpersGetJs["default"];
        }, function (_npmBabelRuntime5835HelpersInheritsJs) {
            _inherits = _npmBabelRuntime5835HelpersInheritsJs["default"];
        }, function (_npmBabelRuntime5835HelpersClassCallCheckJs) {
            _classCallCheck = _npmBabelRuntime5835HelpersClassCallCheckJs["default"];
        }, function (_assetsJsUIQueryJs) {
            Query = _assetsJsUIQueryJs["default"];
        }],
        execute: function () {
            "use strict";

            Alert = (function (_Query) {
                _inherits(Alert, _Query);

                function Alert() {
                    _classCallCheck(this, Alert);

                    _get(Object.getPrototypeOf(Alert.prototype), "constructor", this).call(this);
                    this.show("ES6 Alert");
                }

                return Alert;
            })(Query);

            _export("default", Alert);
        }
    };
});
System.register("assets/js/bootstrap.js", ["assets/js/UI/Alert.js"], function (_export) {
    "use strict";

    var Alert;

    _export("bootstrap", bootstrap);

    function bootstrap() {

        new Alert();
    }

    return {
        setters: [function (_assetsJsUIAlertJs) {
            Alert = _assetsJsUIAlertJs["default"];
        }],
        execute: function () {}
    };
});
System.register('assets/js/Main.js', ['assets/js/bootstrap.js'], function (_export) {
  'use strict';

  var bootstrap;
  return {
    setters: [function (_assetsJsBootstrapJs) {
      bootstrap = _assetsJsBootstrapJs.bootstrap;
    }],
    execute: function () {
      bootstrap();
    }
  };
});
//# sourceMappingURL=Build.js.map