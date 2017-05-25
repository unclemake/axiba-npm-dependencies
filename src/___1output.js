/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	exports.___0 = __webpack_require__(1);exports.___1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));exports.___2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));exports.___3 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));exports.___4 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"core-decorators\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));exports.___5 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));exports.___6 = __webpack_require__(31);exports.___7 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux-actions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));exports.___8 = __webpack_require__(141);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(3);

	var ReactChildren = __webpack_require__(4);
	var ReactComponent = __webpack_require__(17);
	var ReactPureComponent = __webpack_require__(20);
	var ReactClass = __webpack_require__(21);
	var ReactDOMFactories = __webpack_require__(23);
	var ReactElement = __webpack_require__(8);
	var ReactPropTypes = __webpack_require__(24);
	var ReactVersion = __webpack_require__(29);

	var onlyChild = __webpack_require__(30);
	var warning = __webpack_require__(10);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (false) {
	  var canDefineProperty = require('./canDefineProperty');
	  var ReactElementValidator = require('./ReactElementValidator');
	  var didWarnPropTypesDeprecated = false;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (false) {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	// TODO: Fix tests so that this deprecation warning doesn't cause failures.
	if (false) {
	  if (canDefineProperty) {
	    Object.defineProperty(React, 'PropTypes', {
	      get: function () {
	        process.env.NODE_ENV !== 'production' ? warning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated. Use ' + 'the prop-types package from npm instead.') : void 0;
	        didWarnPropTypesDeprecated = true;
	        return ReactPropTypes;
	      }
	    });
	  }
	}

	module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(5);
	var ReactElement = __webpack_require__(8);

	var emptyFunction = __webpack_require__(11);
	var traverseAllChildren = __webpack_require__(14);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(6);

	var invariant = __webpack_require__(7);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ?  false ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(3);

	var ReactCurrentOwner = __webpack_require__(9);

	var warning = __webpack_require__(10);
	var canDefineProperty = __webpack_require__(12);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(13);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (false) {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (false) {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	       false ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	       false ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (false) {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (false) {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (false) {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(11);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (false) {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (false) {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(6);

	var ReactCurrentOwner = __webpack_require__(9);
	var REACT_ELEMENT_TYPE = __webpack_require__(13);

	var getIteratorFn = __webpack_require__(15);
	var invariant = __webpack_require__(7);
	var KeyEscapeUtils = __webpack_require__(16);
	var warning = __webpack_require__(10);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (false) {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (false) {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ?  false ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(6);

	var ReactNoopUpdateQueue = __webpack_require__(18);

	var canDefineProperty = __webpack_require__(12);
	var emptyObject = __webpack_require__(19);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(10);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  false ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (false) {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(10);

	function warnNoop(publicInstance, callerName) {
	  if (false) {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (false) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(3);

	var ReactComponent = __webpack_require__(17);
	var ReactNoopUpdateQueue = __webpack_require__(18);

	var emptyObject = __webpack_require__(19);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(6),
	    _assign = __webpack_require__(3);

	var ReactComponent = __webpack_require__(17);
	var ReactElement = __webpack_require__(8);
	var ReactPropTypeLocationNames = __webpack_require__(22);
	var ReactNoopUpdateQueue = __webpack_require__(18);

	var emptyObject = __webpack_require__(19);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(10);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (false) {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (false) {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (false) {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	       false ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ?  false ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ?  false ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (false) {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ?  false ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ?  false ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ?  false ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (false) {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ?  false ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ?  false ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ?  false ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ?  false ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (false) {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	var didWarnDeprecated = false;

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    if (false) {
	      process.env.NODE_ENV !== 'production' ? warning(didWarnDeprecated, '%s: React.createClass is deprecated and will be removed in version 16. ' + 'Use plain JavaScript classes instead. If you\'re not yet ready to ' + 'migrate, create-react-class is available on npm as a ' + 'drop-in replacement.', spec && spec.displayName || 'A Component') : void 0;
	      didWarnDeprecated = true;
	    }

	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (false) {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (false) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ?  false ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (false) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ?  false ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (false) {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (false) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(8);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (false) {
	  var ReactElementValidator = require('./ReactElementValidator');
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _require = __webpack_require__(8),
	    isValidElement = _require.isValidElement;

	var factory = __webpack_require__(25);

	module.exports = factory(isValidElement);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	// React 15.5 references this module, and assumes PropTypes are still callable in production.
	// Therefore we re-export development-only version with all the PropTypes checks here.
	// However if one is migrating to the `prop-types` npm library, they will go through the
	// `index.js` entry point, and it will branch depending on the environment.
	var factory = __webpack_require__(26);
	module.exports = function(isValidElement) {
	  // It is still allowed in 15.5.
	  var throwOnDirectAccess = false;
	  return factory(isValidElement, throwOnDirectAccess);
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(11);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(10);

	var ReactPropTypesSecret = __webpack_require__(27);
	var checkPropTypes = __webpack_require__(28);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (false) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (false) {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       false ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       false ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (false) {
	  var invariant = require('fbjs/lib/invariant');
	  var warning = require('fbjs/lib/warning');
	  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (false) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.5.4';

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(6);

	var ReactElement = __webpack_require__(8);

	var invariant = __webpack_require__(7);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ?  false ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _progress = __webpack_require__(32);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _progress2["default"];
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(33);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(71);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(75);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(76);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(112);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _propTypes = __webpack_require__(120);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _icon = __webpack_require__(122);

	var _icon2 = _interopRequireDefault(_icon);

	var _rcProgress = __webpack_require__(126);

	var _classnames = __webpack_require__(123);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};

	var statusColorMap = {
	    normal: '#108ee9',
	    exception: '#ff5500',
	    success: '#87d068'
	};

	var Progress = function (_React$Component) {
	    (0, _inherits3["default"])(Progress, _React$Component);

	    function Progress() {
	        (0, _classCallCheck3["default"])(this, Progress);
	        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
	    }

	    Progress.prototype.render = function render() {
	        var _classNames;

	        var props = this.props;

	        var prefixCls = props.prefixCls,
	            className = props.className,
	            _props$percent = props.percent,
	            percent = _props$percent === undefined ? 0 : _props$percent,
	            status = props.status,
	            format = props.format,
	            trailColor = props.trailColor,
	            type = props.type,
	            strokeWidth = props.strokeWidth,
	            width = props.width,
	            showInfo = props.showInfo,
	            _props$gapDegree = props.gapDegree,
	            gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
	            gapPosition = props.gapPosition,
	            restProps = __rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "type", "strokeWidth", "width", "showInfo", "gapDegree", "gapPosition"]);

	        var progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
	        var progressInfo = void 0;
	        var progress = void 0;
	        var textFormatter = format || function (percentNumber) {
	            return percentNumber + '%';
	        };
	        if (showInfo) {
	            var text = void 0;
	            var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';
	            if (progressStatus === 'exception') {
	                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'cross' + iconType });
	            } else if (progressStatus === 'success') {
	                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'check' + iconType });
	            } else {
	                text = textFormatter(percent);
	            }
	            progressInfo = _react2["default"].createElement(
	                'span',
	                { className: prefixCls + '-text' },
	                text
	            );
	        }
	        if (type === 'line') {
	            var percentStyle = {
	                width: percent + '%',
	                height: strokeWidth || 10
	            };
	            progress = _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: prefixCls + '-outer' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: prefixCls + '-inner' },
	                        _react2["default"].createElement('div', { className: prefixCls + '-bg', style: percentStyle })
	                    )
	                ),
	                progressInfo
	            );
	        } else if (type === 'circle' || type === 'dashboard') {
	            var circleSize = width || 132;
	            var circleStyle = {
	                width: circleSize,
	                height: circleSize,
	                fontSize: circleSize * 0.16 + 6
	            };
	            var circleWidth = strokeWidth || 6;
	            var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
	            var gapDeg = gapDegree || type === 'dashboard' && 75;
	            progress = _react2["default"].createElement(
	                'div',
	                { className: prefixCls + '-inner', style: circleStyle },
	                _react2["default"].createElement(_rcProgress.Circle, { percent: percent, strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor, prefixCls: prefixCls, gapDegree: gapDeg, gapPosition: gapPos }),
	                progressInfo
	            );
	        }
	        var classString = (0, _classnames2["default"])(prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-info', showInfo), _classNames), className);
	        return _react2["default"].createElement(
	            'div',
	            (0, _extends3["default"])({}, restProps, { className: classString }),
	            progress
	        );
	    };

	    return Progress;
	}(_react2["default"].Component);

	exports["default"] = Progress;

	Progress.defaultProps = {
	    type: 'line',
	    percent: 0,
	    showInfo: true,
	    trailColor: '#f3f3f3',
	    prefixCls: 'ant-progress'
	};
	Progress.propTypes = {
	    status: _propTypes2["default"].oneOf(['normal', 'exception', 'active', 'success']),
	    type: _propTypes2["default"].oneOf(['line', 'circle', 'dashboard']),
	    showInfo: _propTypes2["default"].bool,
	    percent: _propTypes2["default"].number,
	    width: _propTypes2["default"].number,
	    strokeWidth: _propTypes2["default"].number,
	    trailColor: _propTypes2["default"].string,
	    format: _propTypes2["default"].func,
	    gapDegree: _propTypes2["default"].number
	};
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(34);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	module.exports = __webpack_require__(39).Object.assign;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(37);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(52)});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(38)
	  , core      = __webpack_require__(39)
	  , ctx       = __webpack_require__(40)
	  , hide      = __webpack_require__(42)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(41);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(43)
	  , createDesc = __webpack_require__(51);
	module.exports = __webpack_require__(47) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(44)
	  , IE8_DOM_DEFINE = __webpack_require__(46)
	  , toPrimitive    = __webpack_require__(50)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(47) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(45);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(47) && !__webpack_require__(48)(function(){
	  return Object.defineProperty(__webpack_require__(49)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(48)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(45)
	  , document = __webpack_require__(38).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(45);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(53)
	  , gOPS     = __webpack_require__(68)
	  , pIE      = __webpack_require__(69)
	  , toObject = __webpack_require__(70)
	  , IObject  = __webpack_require__(57)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(48)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(54)
	  , enumBugKeys = __webpack_require__(67);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(55)
	  , toIObject    = __webpack_require__(56)
	  , arrayIndexOf = __webpack_require__(60)(false)
	  , IE_PROTO     = __webpack_require__(64)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(57)
	  , defined = __webpack_require__(59);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(58);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(56)
	  , toLength  = __webpack_require__(61)
	  , toIndex   = __webpack_require__(63);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(62)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(62)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(65)('keys')
	  , uid    = __webpack_require__(66);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(38)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(59);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(72);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(74);
	var $Object = __webpack_require__(39).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(47), 'Object', {defineProperty: __webpack_require__(43).f});

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(77);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(78);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(98);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	__webpack_require__(93);
	module.exports = __webpack_require__(97).f('iterator');

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(81)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(82)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(62)
	  , defined   = __webpack_require__(59);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(83)
	  , $export        = __webpack_require__(37)
	  , redefine       = __webpack_require__(84)
	  , hide           = __webpack_require__(42)
	  , has            = __webpack_require__(55)
	  , Iterators      = __webpack_require__(85)
	  , $iterCreate    = __webpack_require__(86)
	  , setToStringTag = __webpack_require__(90)
	  , getPrototypeOf = __webpack_require__(92)
	  , ITERATOR       = __webpack_require__(91)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(87)
	  , descriptor     = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(90)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(42)(IteratorPrototype, __webpack_require__(91)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(44)
	  , dPs         = __webpack_require__(88)
	  , enumBugKeys = __webpack_require__(67)
	  , IE_PROTO    = __webpack_require__(64)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(49)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(89).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(43)
	  , anObject = __webpack_require__(44)
	  , getKeys  = __webpack_require__(53);

	module.exports = __webpack_require__(47) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38).document && document.documentElement;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(43).f
	  , has = __webpack_require__(55)
	  , TAG = __webpack_require__(91)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(65)('wks')
	  , uid        = __webpack_require__(66)
	  , Symbol     = __webpack_require__(38).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(55)
	  , toObject    = __webpack_require__(70)
	  , IE_PROTO    = __webpack_require__(64)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	var global        = __webpack_require__(38)
	  , hide          = __webpack_require__(42)
	  , Iterators     = __webpack_require__(85)
	  , TO_STRING_TAG = __webpack_require__(91)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(95)
	  , step             = __webpack_require__(96)
	  , Iterators        = __webpack_require__(85)
	  , toIObject        = __webpack_require__(56);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(82)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(91);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(100);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	module.exports = __webpack_require__(39).Symbol;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(38)
	  , has            = __webpack_require__(55)
	  , DESCRIPTORS    = __webpack_require__(47)
	  , $export        = __webpack_require__(37)
	  , redefine       = __webpack_require__(84)
	  , META           = __webpack_require__(101).KEY
	  , $fails         = __webpack_require__(48)
	  , shared         = __webpack_require__(65)
	  , setToStringTag = __webpack_require__(90)
	  , uid            = __webpack_require__(66)
	  , wks            = __webpack_require__(91)
	  , wksExt         = __webpack_require__(97)
	  , wksDefine      = __webpack_require__(102)
	  , keyOf          = __webpack_require__(103)
	  , enumKeys       = __webpack_require__(104)
	  , isArray        = __webpack_require__(105)
	  , anObject       = __webpack_require__(44)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(50)
	  , createDesc     = __webpack_require__(51)
	  , _create        = __webpack_require__(87)
	  , gOPNExt        = __webpack_require__(106)
	  , $GOPD          = __webpack_require__(108)
	  , $DP            = __webpack_require__(43)
	  , $keys          = __webpack_require__(53)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(107).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(69).f  = $propertyIsEnumerable;
	  __webpack_require__(68).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(83)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(42)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(66)('meta')
	  , isObject = __webpack_require__(45)
	  , has      = __webpack_require__(55)
	  , setDesc  = __webpack_require__(43).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(48)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(38)
	  , core           = __webpack_require__(39)
	  , LIBRARY        = __webpack_require__(83)
	  , wksExt         = __webpack_require__(97)
	  , defineProperty = __webpack_require__(43).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(53)
	  , toIObject = __webpack_require__(56);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(53)
	  , gOPS    = __webpack_require__(68)
	  , pIE     = __webpack_require__(69);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(58);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(56)
	  , gOPN      = __webpack_require__(107).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(54)
	  , hiddenKeys = __webpack_require__(67).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(69)
	  , createDesc     = __webpack_require__(51)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(50)
	  , has            = __webpack_require__(55)
	  , IE8_DOM_DEFINE = __webpack_require__(46)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(47) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(102)('asyncIterator');

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(102)('observable');

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(113);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(117);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(77);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	module.exports = __webpack_require__(39).Object.setPrototypeOf;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(37);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(116).set});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(45)
	  , anObject = __webpack_require__(44);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(40)(Function.call, __webpack_require__(108).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var $Object = __webpack_require__(39).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(87)});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(121)();
	}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(11);
	var invariant = __webpack_require__(7);
	var ReactPropTypesSecret = __webpack_require__(27);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(33);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(71);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(123);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _omit = __webpack_require__(124);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Icon = function Icon(props) {
	    var type = props.type,
	        _props$className = props.className,
	        className = _props$className === undefined ? '' : _props$className,
	        spin = props.spin;

	    var classString = (0, _classnames2["default"])((0, _defineProperty3["default"])({
	        anticon: true,
	        'anticon-spin': !!spin || type === 'loading'
	    }, 'anticon-' + type, true), className);
	    return _react2["default"].createElement('i', (0, _extends3["default"])({}, (0, _omit2["default"])(props, ['type', 'spin']), { className: classString }));
	};
	exports["default"] = Icon;
	module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(125);

	module.exports = function omit(obj, fields) {
	  var copy = assign({}, obj);
	  for (var i = 0; i < fields.length; i++) {
	    var key = fields[i];
	    delete copy[key];
	  }
	  return copy;
	};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Circle = exports.Line = undefined;

	var _Line = __webpack_require__(127);

	var _Line2 = _interopRequireDefault(_Line);

	var _Circle = __webpack_require__(140);

	var _Circle2 = _interopRequireDefault(_Circle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports.Line = _Line2['default'];
	exports.Circle = _Circle2['default'];
	exports['default'] = {
	  Line: _Line2['default'],
	  Circle: _Circle2['default']
	};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(33);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(128);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _classCallCheck2 = __webpack_require__(75);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(129);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(76);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(112);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _enhancer = __webpack_require__(130);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _types = __webpack_require__(139);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var Line = function (_Component) {
	  (0, _inherits3['default'])(Line, _Component);

	  function Line() {
	    (0, _classCallCheck3['default'])(this, Line);
	    return (0, _possibleConstructorReturn3['default'])(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
	  }

	  (0, _createClass3['default'])(Line, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          className = _props.className,
	          percent = _props.percent,
	          prefixCls = _props.prefixCls,
	          strokeColor = _props.strokeColor,
	          strokeLinecap = _props.strokeLinecap,
	          strokeWidth = _props.strokeWidth,
	          style = _props.style,
	          trailColor = _props.trailColor,
	          trailWidth = _props.trailWidth,
	          restProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);


	      delete restProps.gapPosition;

	      var pathStyle = {
	        strokeDasharray: '100px, 100px',
	        strokeDashoffset: 100 - percent + 'px',
	        transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear'
	      };

	      var center = strokeWidth / 2;
	      var right = 100 - strokeWidth / 2;
	      var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
	      var viewBoxString = '0 0 100 ' + strokeWidth;

	      return _react2['default'].createElement(
	        'svg',
	        (0, _extends3['default'])({
	          className: prefixCls + '-line ' + className,
	          viewBox: viewBoxString,
	          preserveAspectRatio: 'none',
	          style: style
	        }, restProps),
	        _react2['default'].createElement('path', {
	          className: prefixCls + '-line-trail',
	          d: pathString,
	          strokeLinecap: strokeLinecap,
	          stroke: trailColor,
	          strokeWidth: trailWidth || strokeWidth,
	          fillOpacity: '0'
	        }),
	        _react2['default'].createElement('path', {
	          className: prefixCls + '-line-path',
	          d: pathString,
	          strokeLinecap: strokeLinecap,
	          stroke: strokeColor,
	          strokeWidth: strokeWidth,
	          fillOpacity: '0',
	          ref: function ref(path) {
	            _this2.path = path;
	          },
	          style: pathStyle
	        })
	      );
	    }
	  }]);
	  return Line;
	}(_react.Component);

	Line.propTypes = _types.propTypes;

	Line.defaultProps = _types.defaultProps;

	exports['default'] = (0, _enhancer2['default'])(Line);
	module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(72);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(75);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(129);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(76);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(131);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(112);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var enhancer = function enhancer(WrappedComponent) {
	  return function (_WrappedComponent) {
	    (0, _inherits3['default'])(Progress, _WrappedComponent);

	    function Progress() {
	      (0, _classCallCheck3['default'])(this, Progress);
	      return (0, _possibleConstructorReturn3['default'])(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
	    }

	    (0, _createClass3['default'])(Progress, [{
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate() {
	        var now = Date.now();
	        this.path.style.transitionDuration = '0.3s, 0.3s';
	        if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
	          this.path.style.transitionDuration = '0s, 0s';
	        }
	        this.prevTimeStamp = Date.now();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _get3['default'])(Progress.prototype.__proto__ || Object.getPrototypeOf(Progress.prototype), 'render', this).call(this);
	      }
	    }]);
	    return Progress;
	  }(WrappedComponent);
	};

	exports['default'] = enhancer;
	module.exports = exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getPrototypeOf = __webpack_require__(132);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = __webpack_require__(136);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
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
	};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(134);
	module.exports = __webpack_require__(39).Object.getPrototypeOf;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(70)
	  , $getPrototypeOf = __webpack_require__(92);

	__webpack_require__(135)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(37)
	  , core    = __webpack_require__(39)
	  , fails   = __webpack_require__(48);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(138);
	var $Object = __webpack_require__(39).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(56)
	  , $getOwnPropertyDescriptor = __webpack_require__(108).f;

	__webpack_require__(135)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.propTypes = exports.defaultProps = undefined;

	var _propTypes = __webpack_require__(120);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var defaultProps = exports.defaultProps = {
	  className: '',
	  percent: 0,
	  prefixCls: 'rc-progress',
	  strokeColor: '#2db7f5',
	  strokeLinecap: 'round',
	  strokeWidth: 1,
	  style: {},
	  trailColor: '#D9D9D9',
	  trailWidth: 1
	};

	var propTypes = exports.propTypes = {
	  className: _propTypes2['default'].string,
	  percent: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
	  prefixCls: _propTypes2['default'].string,
	  strokeColor: _propTypes2['default'].string,
	  strokeLinecap: _propTypes2['default'].oneOf(['butt', 'round', 'square']),
	  strokeWidth: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
	  style: _propTypes2['default'].object,
	  trailColor: _propTypes2['default'].string,
	  trailWidth: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string])
	};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(33);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(128);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _classCallCheck2 = __webpack_require__(75);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(129);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(76);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(112);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(120);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _enhancer = __webpack_require__(130);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _types = __webpack_require__(139);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/* eslint react/prop-types: 0 */
	var Circle = function (_Component) {
	  (0, _inherits3['default'])(Circle, _Component);

	  function Circle() {
	    (0, _classCallCheck3['default'])(this, Circle);
	    return (0, _possibleConstructorReturn3['default'])(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
	  }

	  (0, _createClass3['default'])(Circle, [{
	    key: 'getPathStyles',
	    value: function getPathStyles() {
	      var _props = this.props,
	          percent = _props.percent,
	          strokeWidth = _props.strokeWidth,
	          _props$gapDegree = _props.gapDegree,
	          gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
	          gapPosition = _props.gapPosition;

	      var radius = 50 - strokeWidth / 2;
	      var beginPositionX = 0;
	      var beginPositionY = -radius;
	      var endPositionX = 0;
	      var endPositionY = -2 * radius;
	      switch (gapPosition) {
	        case 'left':
	          beginPositionX = -radius;
	          beginPositionY = 0;
	          endPositionX = 2 * radius;
	          endPositionY = 0;
	          break;
	        case 'right':
	          beginPositionX = radius;
	          beginPositionY = 0;
	          endPositionX = -2 * radius;
	          endPositionY = 0;
	          break;
	        case 'bottom':
	          beginPositionY = radius;
	          endPositionY = 2 * radius;
	          break;
	        default:
	      }
	      var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
	      var len = Math.PI * 2 * radius;
	      var trailPathStyle = {
	        strokeDasharray: len - gapDegree + 'px ' + len + 'px',
	        strokeDashoffset: '-' + gapDegree / 2 + 'px',
	        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
	      };
	      var strokePathStyle = {
	        strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
	        strokeDashoffset: '-' + gapDegree / 2 + 'px',
	        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
	      };
	      return { pathString: pathString, trailPathStyle: trailPathStyle, strokePathStyle: strokePathStyle };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props,
	          prefixCls = _props2.prefixCls,
	          strokeWidth = _props2.strokeWidth,
	          trailWidth = _props2.trailWidth,
	          strokeColor = _props2.strokeColor,
	          trailColor = _props2.trailColor,
	          strokeLinecap = _props2.strokeLinecap,
	          style = _props2.style,
	          className = _props2.className,
	          restProps = (0, _objectWithoutProperties3['default'])(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'trailColor', 'strokeLinecap', 'style', 'className']);

	      var _getPathStyles = this.getPathStyles(),
	          pathString = _getPathStyles.pathString,
	          trailPathStyle = _getPathStyles.trailPathStyle,
	          strokePathStyle = _getPathStyles.strokePathStyle;

	      delete restProps.percent;
	      delete restProps.gapDegree;
	      delete restProps.gapPosition;
	      return _react2['default'].createElement(
	        'svg',
	        (0, _extends3['default'])({
	          className: prefixCls + '-circle ' + className,
	          viewBox: '0 0 100 100',
	          style: style
	        }, restProps),
	        _react2['default'].createElement('path', {
	          className: prefixCls + '-circle-trail',
	          d: pathString,
	          stroke: trailColor,
	          strokeWidth: trailWidth || strokeWidth,
	          fillOpacity: '0',
	          style: trailPathStyle
	        }),
	        _react2['default'].createElement('path', {
	          className: prefixCls + '-circle-path',
	          d: pathString,
	          strokeLinecap: strokeLinecap,
	          stroke: strokeColor,
	          strokeWidth: strokeWidth,
	          fillOpacity: '0',
	          ref: function ref(path) {
	            _this2.path = path;
	          },
	          style: strokePathStyle
	        })
	      );
	    }
	  }]);
	  return Circle;
	}(_react.Component);

	Circle.propTypes = (0, _extends3['default'])({}, _types.propTypes, {
	  gapPosition: _propTypes2['default'].oneOf(['top', 'bottom', 'left', 'right'])
	});

	Circle.defaultProps = (0, _extends3['default'])({}, _types.defaultProps, {
	  gapPosition: 'top'
	});

	exports['default'] = (0, _enhancer2['default'])(Circle);
	module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global, setImmediate) {/**
	 * @license
	 * Lo-Dash 1.0.2 (Custom Build) <http://lodash.com/>
	 * Build: `lodash -o ./dist/lodash.compat.js`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.4.4 <http://underscorejs.org/>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
	 * Available under MIT license <http://lodash.com/license>
	 */
	;(function(window, undefined) {

	  /** Detect free variable `exports` */
	  var freeExports = typeof exports == 'object' && exports;

	  /** Detect free variable `module` */
	  var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;

	  /** Detect free variable `global` and use it as `window` */
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    window = freeGlobal;
	  }

	  /** Used for array and object method references */
	  var arrayRef = [],
	      objectRef = {};

	  /** Used to generate unique IDs */
	  var idCounter = 0;

	  /** Used internally to indicate various things */
	  var indicatorObject = objectRef;

	  /** Used by `cachedContains` as the default size when optimizations are enabled for large arrays */
	  var largeArraySize = 30;

	  /** Used to restore the original `_` reference in `noConflict` */
	  var oldDash = window._;

	  /** Used to match HTML entities */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;

	  /** Used to match empty string literals in compiled template source */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match regexp flags from their coerced string values */
	  var reFlags = /\w*$/;

	  /** Used to detect if a method is native */
	  var reNative = RegExp('^' +
	    (objectRef.valueOf + '')
	      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	      .replace(/valueOf|for [^\]]+/g, '.+?') + '$'
	  );

	  /**
	   * Used to match ES6 template delimiters
	   * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.8.6
	   */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match "interpolate" template delimiters */
	  var reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to ensure capturing order of template delimiters */
	  var reNoMatch = /($^)/;

	  /** Used to match HTML characters */
	  var reUnescapedHtml = /[&<>"']/g;

	  /** Used to match unescaped characters in compiled string literals */
	  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

	  /** Used to fix the JScript [[DontEnum]] bug */
	  var shadowed = [
	    'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
	    'toLocaleString', 'toString', 'valueOf'
	  ];

	  /** Used to make template sourceURLs easier to identify */
	  var templateCounter = 0;

	  /** Native method shortcuts */
	  var ceil = Math.ceil,
	      concat = arrayRef.concat,
	      floor = Math.floor,
	      getPrototypeOf = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
	      hasOwnProperty = objectRef.hasOwnProperty,
	      push = arrayRef.push,
	      toString = objectRef.toString;

	  /* Native method shortcuts for methods with the same name as other `lodash` methods */
	  var nativeBind = reNative.test(nativeBind = slice.bind) && nativeBind,
	      nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray,
	      nativeIsFinite = window.isFinite,
	      nativeIsNaN = window.isNaN,
	      nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys,
	      nativeMax = Math.max,
	      nativeMin = Math.min,
	      nativeRandom = Math.random;

	  /** `Object#toString` result shortcuts */
	  var argsClass = '[object Arguments]',
	      arrayClass = '[object Array]',
	      boolClass = '[object Boolean]',
	      dateClass = '[object Date]',
	      funcClass = '[object Function]',
	      numberClass = '[object Number]',
	      objectClass = '[object Object]',
	      regexpClass = '[object RegExp]',
	      stringClass = '[object String]';

	  /** Detect various environments */
	  var isIeOpera = !!window.attachEvent,
	      isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

	  /* Detect if `Function#bind` exists and is inferred to be fast (all but V8) */
	  var isBindFast = nativeBind && !isV8;

	  /* Detect if `Object.keys` exists and is inferred to be fast (IE, Opera, V8) */
	  var isKeysFast = nativeKeys && (isIeOpera || isV8);

	  /**
	   * Detect the JScript [[DontEnum]] bug:
	   *
	   * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
	   * made non-enumerable as well.
	   */
	  var hasDontEnumBug;

	  /**
	   * Detect if a `prototype` properties are enumerable by default:
	   *
	   * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
	   * (if the prototype or a property on the prototype has been set)
	   * incorrectly sets a function's `prototype` property [[Enumerable]]
	   * value to `true`.
	   */
	  var hasEnumPrototype;

	  /** Detect if own properties are iterated after inherited properties (IE < 9) */
	  var iteratesOwnLast;

	  /**
	   * Detect if `Array#shift` and `Array#splice` augment array-like objects
	   * incorrectly:
	   *
	   * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
	   * and `splice()` functions that fail to remove the last element, `value[0]`,
	   * of array-like objects even though the `length` property is set to `0`.
	   * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
	   * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
	   */
	  var hasObjectSpliceBug = (hasObjectSpliceBug = { '0': 1, 'length': 1 },
	    arrayRef.splice.call(hasObjectSpliceBug, 0, 1), hasObjectSpliceBug[0]);

	  /** Detect if `arguments` object indexes are non-enumerable (Firefox < 4, IE < 9, PhantomJS, Safari < 5.1) */
	  var nonEnumArgs = true;

	  (function() {
	    var props = [];
	    function ctor() { this.x = 1; }
	    ctor.prototype = { 'valueOf': 1, 'y': 1 };
	    for (var prop in new ctor) { props.push(prop); }
	    for (prop in arguments) { nonEnumArgs = !prop; }

	    hasDontEnumBug = !/valueOf/.test(props);
	    hasEnumPrototype = ctor.propertyIsEnumerable('prototype');
	    iteratesOwnLast = props[0] != 'x';
	  }(1));

	  /** Detect if `arguments` objects are `Object` objects (all but Opera < 10.5) */
	  var argsAreObjects = arguments.constructor == Object;

	  /** Detect if `arguments` objects [[Class]] is unresolvable (Firefox < 4, IE < 9) */
	  var noArgsClass = !isArguments(arguments);

	  /**
	   * Detect lack of support for accessing string characters by index:
	   *
	   * IE < 8 can't access characters by index and IE 8 can only access
	   * characters by index on string literals.
	   */
	  var noCharByIndex = ('x'[0] + Object('x')[0]) != 'xx';

	  /**
	   * Detect if a DOM node's [[Class]] is unresolvable (IE < 9)
	   * and that the JS engine won't error when attempting to coerce an object to
	   * a string without a `toString` function.
	   */
	  try {
	    var noNodeClass = toString.call(document) == objectClass && !({ 'toString': 0 } + '');
	  } catch(e) { }

	  /** Used to identify object classifications that `_.clone` supports */
	  var cloneableClasses = {};
	  cloneableClasses[funcClass] = false;
	  cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
	  cloneableClasses[boolClass] = cloneableClasses[dateClass] =
	  cloneableClasses[numberClass] = cloneableClasses[objectClass] =
	  cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

	  /** Used to lookup a built-in constructor by [[Class]] */
	  var ctorByClass = {};
	  ctorByClass[arrayClass] = Array;
	  ctorByClass[boolClass] = Boolean;
	  ctorByClass[dateClass] = Date;
	  ctorByClass[objectClass] = Object;
	  ctorByClass[numberClass] = Number;
	  ctorByClass[regexpClass] = RegExp;
	  ctorByClass[stringClass] = String;

	  /** Used to determine if values are of the language type Object */
	  var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	  };

	  /** Used to escape characters for inclusion in compiled string literals */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\t': 't',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates a `lodash` object, that wraps the given `value`, to enable method
	   * chaining.
	   *
	   * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
	   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
	   * and `unshift`
	   *
	   * The chainable wrapper functions are:
	   * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`, `compose`,
	   * `concat`, `countBy`, `debounce`, `defaults`, `defer`, `delay`, `difference`,
	   * `filter`, `flatten`, `forEach`, `forIn`, `forOwn`, `functions`, `groupBy`,
	   * `initial`, `intersection`, `invert`, `invoke`, `keys`, `map`, `max`, `memoize`,
	   * `merge`, `min`, `object`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	   * `pick`, `pluck`, `push`, `range`, `reject`, `rest`, `reverse`, `shuffle`,
	   * `slice`, `sort`, `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`,
	   * `union`, `uniq`, `unshift`, `values`, `where`, `without`, `wrap`, and `zip`
	   *
	   * The non-chainable wrapper functions are:
	   * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `has`, `identity`,
	   * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`, `isEmpty`,
	   * `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`, `isObject`,
	   * `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`, `lastIndexOf`,
	   * `mixin`, `noConflict`, `pop`, `random`, `reduce`, `reduceRight`, `result`,
	   * `shift`, `size`, `some`, `sortedIndex`, `template`, `unescape`, and `uniqueId`
	   *
	   * The wrapper functions `first` and `last` return wrapped values when `n` is
	   * passed, otherwise they return unwrapped values.
	   *
	   * @name _
	   * @constructor
	   * @category Chaining
	   * @param {Mixed} value The value to wrap in a `lodash` instance.
	   * @returns {Object} Returns a `lodash` instance.
	   */
	  function lodash(value) {
	    // exit early if already wrapped, even if wrapped by a different `lodash` constructor
	    if (value && typeof value == 'object' && value.__wrapped__) {
	      return value;
	    }
	    // allow invoking `lodash` without the `new` operator
	    if (!(this instanceof lodash)) {
	      return new lodash(value);
	    }
	    this.__wrapped__ = value;
	  }

	  /**
	   * By default, the template delimiters used by Lo-Dash are similar to those in
	   * embedded Ruby (ERB). Change the following template settings to use alternative
	   * delimiters.
	   *
	   * @static
	   * @memberOf _
	   * @type Object
	   */
	  lodash.templateSettings = {

	    /**
	     * Used to detect `data` property values to be HTML-escaped.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'escape': /<%-([\s\S]+?)%>/g,

	    /**
	     * Used to detect code to be evaluated.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'evaluate': /<%([\s\S]+?)%>/g,

	    /**
	     * Used to detect `data` property values to inject.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'interpolate': reInterpolate,

	    /**
	     * Used to reference the data object in the template text.
	     *
	     * @memberOf _.templateSettings
	     * @type String
	     */
	    'variable': '',

	    /**
	     * Used to import variables into the compiled template.
	     *
	     * @memberOf _.templateSettings
	     * @type Object
	     */
	    'imports': {

	      /**
	       * A reference to the `lodash` function.
	       *
	       * @memberOf _.templateSettings.imports
	       * @type Function
	       */
	      '_': lodash
	    }
	  };

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The template used to create iterator functions.
	   *
	   * @private
	   * @param {Obect} data The data object used to populate the text.
	   * @returns {String} Returns the interpolated text.
	   */
	  var iteratorTemplate = function(obj) {
	    
	    var __p = 'var index, iterable = ' +
	    (obj.firstArg ) +
	    ', result = iterable;\nif (!iterable) return result;\n' +
	    (obj.top ) +
	    ';\n';
	     if (obj.arrays) {
	    __p += 'var length = iterable.length; index = -1;\nif (' +
	    (obj.arrays ) +
	    ') {  ';
	     if (obj.noCharByIndex) {
	    __p += '\n  if (isString(iterable)) {\n    iterable = iterable.split(\'\')\n  }  ';
	     } ;
	    __p += '\n  while (++index < length) {\n    ' +
	    (obj.loop ) +
	    '\n  }\n}\nelse {  ';
	      } else if (obj.nonEnumArgs) {
	    __p += '\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += \'\';\n      ' +
	    (obj.loop ) +
	    '\n    }\n  } else {  ';
	     } ;
	    
	     if (obj.hasEnumPrototype) {
	    __p += '\n  var skipProto = typeof iterable == \'function\';\n  ';
	     } ;
	    
	     if (obj.isKeysFast && obj.useHas) {
	    __p += '\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    ';
	     if (obj.hasEnumPrototype) {
	    __p += 'if (!(skipProto && index == \'prototype\')) {\n  ';
	     } ;
	    __p += 
	    (obj.loop ) +
	    '';
	     if (obj.hasEnumPrototype) {
	    __p += '}\n';
	     } ;
	    __p += '  }  ';
	     } else {
	    __p += '\n  for (index in iterable) {';
	        if (obj.hasEnumPrototype || obj.useHas) {
	    __p += '\n    if (';
	          if (obj.hasEnumPrototype) {
	    __p += '!(skipProto && index == \'prototype\')';
	     }      if (obj.hasEnumPrototype && obj.useHas) {
	    __p += ' && ';
	     }      if (obj.useHas) {
	    __p += 'hasOwnProperty.call(iterable, index)';
	     }    ;
	    __p += ') {    ';
	     } ;
	    __p += 
	    (obj.loop ) +
	    ';    ';
	     if (obj.hasEnumPrototype || obj.useHas) {
	    __p += '\n    }';
	     } ;
	    __p += '\n  }  ';
	     } ;
	    
	     if (obj.hasDontEnumBug) {
	    __p += '\n\n  var ctor = iterable.constructor;\n    ';
	     for (var k = 0; k < 7; k++) {
	    __p += '\n  index = \'' +
	    (obj.shadowed[k] ) +
	    '\';\n  if (';
	          if (obj.shadowed[k] == 'constructor') {
	    __p += '!(ctor && ctor.prototype === iterable) && ';
	          } ;
	    __p += 'hasOwnProperty.call(iterable, index)) {\n    ' +
	    (obj.loop ) +
	    '\n  }    ';
	     } ;
	    
	     } ;
	    
	     if (obj.arrays || obj.nonEnumArgs) {
	    __p += '\n}';
	     } ;
	    __p += 
	    (obj.bottom ) +
	    ';\nreturn result';
	    
	    
	    return __p
	  };

	  /** Reusable iterator options for `assign` and `defaults` */
	  var defaultsIteratorOptions = {
	    'args': 'object, source, guard',
	    'top':
	      'var args = arguments,\n' +
	      '    argsIndex = 0,\n' +
	      "    argsLength = typeof guard == 'number' ? 2 : args.length;\n" +
	      'while (++argsIndex < argsLength) {\n' +
	      '  iterable = args[argsIndex];\n' +
	      '  if (iterable && objectTypes[typeof iterable]) {',
	    'loop': "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
	    'bottom': '  }\n}'
	  };

	  /** Reusable iterator options shared by `each`, `forIn`, and `forOwn` */
	  var eachIteratorOptions = {
	    'args': 'collection, callback, thisArg',
	    'top': "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
	    'arrays': "typeof length == 'number'",
	    'loop': 'if (callback(iterable[index], index, collection) === false) return result'
	  };

	  /** Reusable iterator options for `forIn` and `forOwn` */
	  var forOwnIteratorOptions = {
	    'top': 'if (!objectTypes[typeof iterable]) return result;\n' + eachIteratorOptions.top,
	    'arrays': false
	  };

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates a function optimized to search large arrays for a given `value`,
	   * starting at `fromIndex`, using strict equality for comparisons, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Mixed} value The value to search for.
	   * @param {Number} [fromIndex=0] The index to search from.
	   * @param {Number} [largeSize=30] The length at which an array is considered large.
	   * @returns {Boolean} Returns `true`, if `value` is found, else `false`.
	   */
	  function cachedContains(array, fromIndex, largeSize) {
	    fromIndex || (fromIndex = 0);

	    var length = array.length,
	        isLarge = (length - fromIndex) >= (largeSize || largeArraySize);

	    if (isLarge) {
	      var cache = {},
	          index = fromIndex - 1;

	      while (++index < length) {
	        // manually coerce `value` to a string because `hasOwnProperty`, in some
	        // older versions of Firefox, coerces objects incorrectly
	        var key = array[index] + '';
	        (hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = [])).push(array[index]);
	      }
	    }
	    return function(value) {
	      if (isLarge) {
	        var key = value + '';
	        return hasOwnProperty.call(cache, key) && indexOf(cache[key], value) > -1;
	      }
	      return indexOf(array, value, fromIndex) > -1;
	    }
	  }

	  /**
	   * Used by `_.max` and `_.min` as the default `callback` when a given
	   * `collection` is a string value.
	   *
	   * @private
	   * @param {String} value The character to inspect.
	   * @returns {Number} Returns the code unit of given character.
	   */
	  function charAtCallback(value) {
	    return value.charCodeAt(0);
	  }

	  /**
	   * Used by `sortBy` to compare transformed `collection` values, stable sorting
	   * them in ascending order.
	   *
	   * @private
	   * @param {Object} a The object to compare to `b`.
	   * @param {Object} b The object to compare to `a`.
	   * @returns {Number} Returns the sort order indicator of `1` or `-1`.
	   */
	  function compareAscending(a, b) {
	    var ai = a.index,
	        bi = b.index;

	    a = a.criteria;
	    b = b.criteria;

	    // ensure a stable sort in V8 and other engines
	    // http://code.google.com/p/v8/issues/detail?id=90
	    if (a !== b) {
	      if (a > b || typeof a == 'undefined') {
	        return 1;
	      }
	      if (a < b || typeof b == 'undefined') {
	        return -1;
	      }
	    }
	    return ai < bi ? -1 : 1;
	  }

	  /**
	   * Creates a function that, when called, invokes `func` with the `this` binding
	   * of `thisArg` and prepends any `partialArgs` to the arguments passed to the
	   * bound function.
	   *
	   * @private
	   * @param {Function|String} func The function to bind or the method name.
	   * @param {Mixed} [thisArg] The `this` binding of `func`.
	   * @param {Array} partialArgs An array of arguments to be partially applied.
	   * @param {Object} [rightIndicator] Used to indicate partially applying arguments from the right.
	   * @returns {Function} Returns the new bound function.
	   */
	  function createBound(func, thisArg, partialArgs, rightIndicator) {
	    var isFunc = isFunction(func),
	        isPartial = !partialArgs,
	        key = thisArg;

	    // juggle arguments
	    if (isPartial) {
	      partialArgs = thisArg;
	    }
	    if (!isFunc) {
	      thisArg = func;
	    }

	    function bound() {
	      // `Function#bind` spec
	      // http://es5.github.com/#x15.3.4.5
	      var args = arguments,
	          thisBinding = isPartial ? this : thisArg;

	      if (!isFunc) {
	        func = thisArg[key];
	      }
	      if (partialArgs.length) {
	        args = args.length
	          ? (args = slice(args), rightIndicator ? args.concat(partialArgs) : partialArgs.concat(args))
	          : partialArgs;
	      }
	      if (this instanceof bound) {
	        // ensure `new bound` is an instance of `bound` and `func`
	        noop.prototype = func.prototype;
	        thisBinding = new noop;
	        noop.prototype = null;

	        // mimic the constructor's `return` behavior
	        // http://es5.github.com/#x13.2.2
	        var result = func.apply(thisBinding, args);
	        return isObject(result) ? result : thisBinding;
	      }
	      return func.apply(thisBinding, args);
	    }
	    return bound;
	  }

	  /**
	   * Produces a callback bound to an optional `thisArg`. If `func` is a property
	   * name, the created callback will return the property value for a given element.
	   * If `func` is an object, the created callback will return `true` for elements
	   * that contain the equivalent object properties, otherwise it will return `false`.
	   *
	   * @private
	   * @param {Mixed} [func=identity] The value to convert to a callback.
	   * @param {Mixed} [thisArg] The `this` binding of the created callback.
	   * @param {Number} [argCount=3] The number of arguments the callback accepts.
	   * @returns {Function} Returns a callback function.
	   */
	  function createCallback(func, thisArg, argCount) {
	    if (func == null) {
	      return identity;
	    }
	    var type = typeof func;
	    if (type != 'function') {
	      if (type != 'object') {
	        return function(object) {
	          return object[func];
	        };
	      }
	      var props = keys(func);
	      return function(object) {
	        var length = props.length,
	            result = false;
	        while (length--) {
	          if (!(result = isEqual(object[props[length]], func[props[length]], indicatorObject))) {
	            break;
	          }
	        }
	        return result;
	      };
	    }
	    if (typeof thisArg != 'undefined') {
	      if (argCount === 1) {
	        return function(value) {
	          return func.call(thisArg, value);
	        };
	      }
	      if (argCount === 2) {
	        return function(a, b) {
	          return func.call(thisArg, a, b);
	        };
	      }
	      if (argCount === 4) {
	        return function(accumulator, value, index, object) {
	          return func.call(thisArg, accumulator, value, index, object);
	        };
	      }
	      return function(value, index, object) {
	        return func.call(thisArg, value, index, object);
	      };
	    }
	    return func;
	  }

	  /**
	   * Creates compiled iteration functions.
	   *
	   * @private
	   * @param {Object} [options1, options2, ...] The compile options object(s).
	   *  arrays - A string of code to determine if the iterable is an array or array-like.
	   *  useHas - A boolean to specify using `hasOwnProperty` checks in the object loop.
	   *  args - A string of comma separated arguments the iteration function will accept.
	   *  top - A string of code to execute before the iteration branches.
	   *  loop - A string of code to execute in the object loop.
	   *  bottom - A string of code to execute after the iteration branches.
	   *
	   * @returns {Function} Returns the compiled function.
	   */
	  function createIterator() {
	    var data = {
	      // support properties
	      'hasDontEnumBug': hasDontEnumBug,
	      'hasEnumPrototype': hasEnumPrototype,
	      'isKeysFast': isKeysFast,
	      'nonEnumArgs': nonEnumArgs,
	      'noCharByIndex': noCharByIndex,
	      'shadowed': shadowed,

	      // iterator options
	      'arrays': 'isArray(iterable)',
	      'bottom': '',
	      'loop': '',
	      'top': '',
	      'useHas': true
	    };

	    // merge options into a template data object
	    for (var object, index = 0; object = arguments[index]; index++) {
	      for (var key in object) {
	        data[key] = object[key];
	      }
	    }
	    var args = data.args;
	    data.firstArg = /^[^,]+/.exec(args)[0];

	    // create the function factory
	    var factory = Function(
	        'createCallback, hasOwnProperty, isArguments, isArray, isString, ' +
	        'objectTypes, nativeKeys',
	      'return function(' + args + ') {\n' + iteratorTemplate(data) + '\n}'
	    );
	    // return the compiled function
	    return factory(
	      createCallback, hasOwnProperty, isArguments, isArray, isString,
	      objectTypes, nativeKeys
	    );
	  }

	  /**
	   * A function compiled to iterate `arguments` objects, arrays, objects, and
	   * strings consistenly across environments, executing the `callback` for each
	   * element in the `collection`. The `callback` is bound to `thisArg` and invoked
	   * with three arguments; (value, index|key, collection). Callbacks may exit
	   * iteration early by explicitly returning `false`.
	   *
	   * @private
	   * @type Function
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array|Object|String} Returns `collection`.
	   */
	  var each = createIterator(eachIteratorOptions);

	  /**
	   * Used by `template` to escape characters for inclusion in compiled
	   * string literals.
	   *
	   * @private
	   * @param {String} match The matched character to escape.
	   * @returns {String} Returns the escaped character.
	   */
	  function escapeStringChar(match) {
	    return '\\' + stringEscapes[match];
	  }

	  /**
	   * Used by `escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {String} match The matched character to escape.
	   * @returns {String} Returns the escaped character.
	   */
	  function escapeHtmlChar(match) {
	    return htmlEscapes[match];
	  }

	  /**
	   * Checks if `value` is a DOM node in IE < 9.
	   *
	   * @private
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true` if the `value` is a DOM node, else `false`.
	   */
	  function isNode(value) {
	    // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
	    // methods that are `typeof` "string" and still can coerce nodes to strings
	    return typeof value.toString != 'function' && typeof (value + '') == 'string';
	  }

	  /**
	   * A no-operation function.
	   *
	   * @private
	   */
	  function noop() {
	    // no operation performed
	  }

	  /**
	   * Slices the `collection` from the `start` index up to, but not including,
	   * the `end` index.
	   *
	   * Note: This function is used, instead of `Array#slice`, to support node lists
	   * in IE < 9 and to ensure dense arrays are returned.
	   *
	   * @private
	   * @param {Array|Object|String} collection The collection to slice.
	   * @param {Number} start The start index.
	   * @param {Number} end The end index.
	   * @returns {Array} Returns the new array.
	   */
	  function slice(array, start, end) {
	    start || (start = 0);
	    if (typeof end == 'undefined') {
	      end = array ? array.length : 0;
	    }
	    var index = -1,
	        length = end - start || 0,
	        result = Array(length < 0 ? 0 : length);

	    while (++index < length) {
	      result[index] = array[start + index];
	    }
	    return result;
	  }

	  /**
	   * Used by `unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {String} match The matched character to unescape.
	   * @returns {String} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(match) {
	    return htmlUnescapes[match];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Checks if `value` is an `arguments` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is an `arguments` object, else `false`.
	   * @example
	   *
	   * (function() { return _.isArguments(arguments); })(1, 2, 3);
	   * // => true
	   *
	   * _.isArguments([1, 2, 3]);
	   * // => false
	   */
	  function isArguments(value) {
	    return toString.call(value) == argsClass;
	  }
	  // fallback for browsers that can't detect `arguments` objects by [[Class]]
	  if (noArgsClass) {
	    isArguments = function(value) {
	      return value ? hasOwnProperty.call(value, 'callee') : false;
	    };
	  }

	  /**
	   * Iterates over `object`'s own and inherited enumerable properties, executing
	   * the `callback` for each property. The `callback` is bound to `thisArg` and
	   * invoked with three arguments; (value, key, object). Callbacks may exit iteration
	   * early by explicitly returning `false`.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The object to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * function Dog(name) {
	   *   this.name = name;
	   * }
	   *
	   * Dog.prototype.bark = function() {
	   *   alert('Woof, woof!');
	   * };
	   *
	   * _.forIn(new Dog('Dagny'), function(value, key) {
	   *   alert(key);
	   * });
	   * // => alerts 'name' and 'bark' (order is not guaranteed)
	   */
	  var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
	    'useHas': false
	  });

	  /**
	   * Iterates over an object's own enumerable properties, executing the `callback`
	   * for each property. The `callback` is bound to `thisArg` and invoked with three
	   * arguments; (value, key, object). Callbacks may exit iteration early by explicitly
	   * returning `false`.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The object to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
	   *   alert(key);
	   * });
	   * // => alerts '0', '1', and 'length' (order is not guaranteed)
	   */
	  var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);

	  /**
	   * Checks if `value` is an array.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is an array, else `false`.
	   * @example
	   *
	   * (function() { return _.isArray(arguments); })();
	   * // => false
	   *
	   * _.isArray([1, 2, 3]);
	   * // => true
	   */
	  var isArray = nativeIsArray || function(value) {
	    // `instanceof` may cause a memory leak in IE 7 if `value` is a host object
	    // http://ajaxian.com/archives/working-aroung-the-instanceof-memory-leak
	    return (argsAreObjects && value instanceof Array) || toString.call(value) == arrayClass;
	  };

	  /**
	   * Creates an array composed of the own enumerable property names of `object`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns a new array of property names.
	   * @example
	   *
	   * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => ['one', 'two', 'three'] (order is not guaranteed)
	   */
	  var keys = !nativeKeys ? shimKeys : function(object) {
	    if (!isObject(object)) {
	      return [];
	    }
	    if ((hasEnumPrototype && typeof object == 'function') ||
	        (nonEnumArgs && object.length && isArguments(object))) {
	      return shimKeys(object);
	    }
	    return nativeKeys(object);
	  };

	  /**
	   * A fallback implementation of `isPlainObject` that checks if a given `value`
	   * is an object created by the `Object` constructor, assuming objects created
	   * by the `Object` constructor have no inherited enumerable properties and that
	   * there are no `Object.prototype` extensions.
	   *
	   * @private
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if `value` is a plain object, else `false`.
	   */
	  function shimIsPlainObject(value) {
	    // avoid non-objects and false positives for `arguments` objects
	    var result = false;
	    if (!(value && typeof value == 'object') || isArguments(value)) {
	      return result;
	    }
	    // check that the constructor is `Object` (i.e. `Object instanceof Object`)
	    var ctor = value.constructor;
	    if ((!isFunction(ctor) && (!noNodeClass || !isNode(value))) || ctor instanceof ctor) {
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      if (iteratesOwnLast) {
	        forIn(value, function(value, key, object) {
	          result = !hasOwnProperty.call(object, key);
	          return false;
	        });
	        return result === false;
	      }
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      forIn(value, function(value, key) {
	        result = key;
	      });
	      return result === false || hasOwnProperty.call(value, result);
	    }
	    return result;
	  }

	  /**
	   * A fallback implementation of `Object.keys` that produces an array of the
	   * given object's own enumerable property names.
	   *
	   * @private
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns a new array of property names.
	   */
	  function shimKeys(object) {
	    var result = [];
	    forOwn(object, function(value, key) {
	      result.push(key);
	    });
	    return result;
	  }

	  /**
	   * Used to convert characters to HTML entities:
	   *
	   * Though the `>` character is escaped for symmetry, characters like `>` and `/`
	   * don't require escaping in HTML and have no special meaning unless they're part
	   * of a tag or an unquoted attribute value.
	   * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
	   */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;'
	  };

	  /** Used to convert HTML entities to characters */
	  var htmlUnescapes = invert(htmlEscapes);

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object. Subsequent sources will overwrite propery assignments of previous
	   * sources. If a `callback` function is passed, it will be executed to produce
	   * the assigned values. The `callback` is bound to `thisArg` and invoked with
	   * two arguments; (objectValue, sourceValue).
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @alias extend
	   * @category Objects
	   * @param {Object} object The destination object.
	   * @param {Object} [source1, source2, ...] The source objects.
	   * @param {Function} [callback] The function to customize assigning values.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the destination object.
	   * @example
	   *
	   * _.assign({ 'name': 'moe' }, { 'age': 40 });
	   * // => { 'name': 'moe', 'age': 40 }
	   *
	   * var defaults = _.partialRight(_.assign, function(a, b) {
	   *   return typeof a == 'undefined' ? b : a;
	   * });
	   *
	   * var food = { 'name': 'apple' };
	   * defaults(food, { 'name': 'banana', 'type': 'fruit' });
	   * // => { 'name': 'apple', 'type': 'fruit' }
	   */
	  var assign = createIterator(defaultsIteratorOptions, {
	    'top':
	      defaultsIteratorOptions.top.replace(';',
	        ';\n' +
	        "if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n" +
	        '  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n' +
	        "} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n" +
	        '  callback = args[--argsLength];\n' +
	        '}'
	      ),
	    'loop': 'result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]'
	  });

	  /**
	   * Creates a clone of `value`. If `deep` is `true`, nested objects will also
	   * be cloned, otherwise they will be assigned by reference. If a `callback`
	   * function is passed, it will be executed to produce the cloned values. If
	   * `callback` returns `undefined`, cloning will be handled by the method instead.
	   * The `callback` is bound to `thisArg` and invoked with one argument; (value).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to clone.
	   * @param {Boolean} [deep=false] A flag to indicate a deep clone.
	   * @param {Function} [callback] The function to customize cloning values.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
	   * @param- {Array} [stackB=[]] Internally used to associate clones with source counterparts.
	   * @returns {Mixed} Returns the cloned `value`.
	   * @example
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * var shallow = _.clone(stooges);
	   * shallow[0] === stooges[0];
	   * // => true
	   *
	   * var deep = _.clone(stooges, true);
	   * deep[0] === stooges[0];
	   * // => false
	   *
	   * _.mixin({
	   *   'clone': _.partialRight(_.clone, function(value) {
	   *     return _.isElement(value) ? value.cloneNode(false) : undefined;
	   *   })
	   * });
	   *
	   * var clone = _.clone(document.body);
	   * clone.childNodes.length;
	   * // => 0
	   */
	  function clone(value, deep, callback, thisArg, stackA, stackB) {
	    var result = value;

	    // allows working with "Collections" methods without using their `callback`
	    // argument, `index|key`, for this method's `callback`
	    if (typeof deep == 'function') {
	      thisArg = callback;
	      callback = deep;
	      deep = false;
	    }
	    if (typeof callback == 'function') {
	      callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 1);
	      result = callback(result);

	      var done = typeof result != 'undefined';
	      if (!done) {
	        result = value;
	      }
	    }
	    // inspect [[Class]]
	    var isObj = isObject(result);
	    if (isObj) {
	      var className = toString.call(result);
	      if (!cloneableClasses[className] || (noNodeClass && isNode(result))) {
	        return result;
	      }
	      var isArr = isArray(result);
	    }
	    // shallow clone
	    if (!isObj || !deep) {
	      return isObj && !done
	        ? (isArr ? slice(result) : assign({}, result))
	        : result;
	    }
	    var ctor = ctorByClass[className];
	    switch (className) {
	      case boolClass:
	      case dateClass:
	        return done ? result : new ctor(+result);

	      case numberClass:
	      case stringClass:
	        return done ? result : new ctor(result);

	      case regexpClass:
	        return done ? result : ctor(result.source, reFlags.exec(result));
	    }
	    // check for circular references and return corresponding clone
	    stackA || (stackA = []);
	    stackB || (stackB = []);

	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == value) {
	        return stackB[length];
	      }
	    }
	    // init cloned object
	    if (!done) {
	      result = isArr ? ctor(result.length) : {};

	      // add array properties assigned by `RegExp#exec`
	      if (isArr) {
	        if (hasOwnProperty.call(value, 'index')) {
	          result.index = value.index;
	        }
	        if (hasOwnProperty.call(value, 'input')) {
	          result.input = value.input;
	        }
	      }
	    }
	    // add the source value to the stack of traversed objects
	    // and associate it with its clone
	    stackA.push(value);
	    stackB.push(result);

	    // recursively populate clone (susceptible to call stack limits)
	    (isArr ? forEach : forOwn)(done ? result : value, function(objValue, key) {
	      result[key] = clone(objValue, deep, callback, undefined, stackA, stackB);
	    });

	    return result;
	  }

	  /**
	   * Creates a deep clone of `value`. If a `callback` function is passed, it will
	   * be executed to produce the cloned values. If `callback` returns the value it
	   * was passed, cloning will be handled by the method instead. The `callback` is
	   * bound to `thisArg` and invoked with one argument; (value).
	   *
	   * Note: This function is loosely based on the structured clone algorithm. Functions
	   * and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
	   * objects created by constructors other than `Object` are cloned to plain `Object` objects.
	   * See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to deep clone.
	   * @param {Function} [callback] The function to customize cloning values.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the deep cloned `value`.
	   * @example
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * var deep = _.cloneDeep(stooges);
	   * deep[0] === stooges[0];
	   * // => false
	   *
	   * var view = {
	   *   'label': 'docs',
	   *   'node': element
	   * };
	   *
	   * var clone = _.cloneDeep(view, function(value) {
	   *   return _.isElement(value) ? value.cloneNode(true) : value;
	   * });
	   *
	   * clone.node == view.node;
	   * // => false
	   */
	  function cloneDeep(value, callback, thisArg) {
	    return clone(value, true, callback, thisArg);
	  }

	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object for all destination properties that resolve to `undefined`. Once a
	   * property is set, additional defaults of the same property will be ignored.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The destination object.
	   * @param {Object} [source1, source2, ...] The source objects.
	   * @param- {Object} [guard] Internally used to allow working with `_.reduce`
	   *  without using its callback's `key` and `object` arguments as sources.
	   * @returns {Object} Returns the destination object.
	   * @example
	   *
	   * var food = { 'name': 'apple' };
	   * _.defaults(food, { 'name': 'banana', 'type': 'fruit' });
	   * // => { 'name': 'apple', 'type': 'fruit' }
	   */
	  var defaults = createIterator(defaultsIteratorOptions);

	  /**
	   * Creates a sorted array of all enumerable properties, own and inherited,
	   * of `object` that have function values.
	   *
	   * @static
	   * @memberOf _
	   * @alias methods
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns a new array of property names that have function values.
	   * @example
	   *
	   * _.functions(_);
	   * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
	   */
	  function functions(object) {
	    var result = [];
	    forIn(object, function(value, key) {
	      if (isFunction(value)) {
	        result.push(key);
	      }
	    });
	    return result.sort();
	  }

	  /**
	   * Checks if the specified object `property` exists and is a direct property,
	   * instead of an inherited property.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to check.
	   * @param {String} property The property to check for.
	   * @returns {Boolean} Returns `true` if key is a direct property, else `false`.
	   * @example
	   *
	   * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
	   * // => true
	   */
	  function has(object, property) {
	    return object ? hasOwnProperty.call(object, property) : false;
	  }

	  /**
	   * Creates an object composed of the inverted keys and values of the given `object`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to invert.
	   * @returns {Object} Returns the created inverted object.
	   * @example
	   *
	   *  _.invert({ 'first': 'moe', 'second': 'larry' });
	   * // => { 'moe': 'first', 'larry': 'second' } (order is not guaranteed)
	   */
	  function invert(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = {};

	    while (++index < length) {
	      var key = props[index];
	      result[object[key]] = key;
	    }
	    return result;
	  }

	  /**
	   * Checks if `value` is a boolean value.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is a boolean value, else `false`.
	   * @example
	   *
	   * _.isBoolean(null);
	   * // => false
	   */
	  function isBoolean(value) {
	    return value === true || value === false || toString.call(value) == boolClass;
	  }

	  /**
	   * Checks if `value` is a date.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is a date, else `false`.
	   * @example
	   *
	   * _.isDate(new Date);
	   * // => true
	   */
	  function isDate(value) {
	    return value instanceof Date || toString.call(value) == dateClass;
	  }

	  /**
	   * Checks if `value` is a DOM element.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is a DOM element, else `false`.
	   * @example
	   *
	   * _.isElement(document.body);
	   * // => true
	   */
	  function isElement(value) {
	    return value ? value.nodeType === 1 : false;
	  }

	  /**
	   * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
	   * length of `0` and objects with no own enumerable properties are considered
	   * "empty".
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Array|Object|String} value The value to inspect.
	   * @returns {Boolean} Returns `true`, if the `value` is empty, else `false`.
	   * @example
	   *
	   * _.isEmpty([1, 2, 3]);
	   * // => false
	   *
	   * _.isEmpty({});
	   * // => true
	   *
	   * _.isEmpty('');
	   * // => true
	   */
	  function isEmpty(value) {
	    var result = true;
	    if (!value) {
	      return result;
	    }
	    var className = toString.call(value),
	        length = value.length;

	    if ((className == arrayClass || className == stringClass ||
	        className == argsClass || (noArgsClass && isArguments(value))) ||
	        (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
	      return !length;
	    }
	    forOwn(value, function() {
	      return (result = false);
	    });
	    return result;
	  }

	  /**
	   * Performs a deep comparison between two values to determine if they are
	   * equivalent to each other. If `callback` is passed, it will be executed to
	   * compare values. If `callback` returns `undefined`, comparisons will be handled
	   * by the method instead. The `callback` is bound to `thisArg` and invoked with
	   * two arguments; (a, b).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} a The value to compare.
	   * @param {Mixed} b The other value to compare.
	   * @param {Function} [callback] The function to customize comparing values.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @param- {Object} [stackA=[]] Internally used track traversed `a` objects.
	   * @param- {Object} [stackB=[]] Internally used track traversed `b` objects.
	   * @returns {Boolean} Returns `true`, if the values are equvalent, else `false`.
	   * @example
	   *
	   * var moe = { 'name': 'moe', 'age': 40 };
	   * var copy = { 'name': 'moe', 'age': 40 };
	   *
	   * moe == copy;
	   * // => false
	   *
	   * _.isEqual(moe, copy);
	   * // => true
	   *
	   * var words = ['hello', 'goodbye'];
	   * var otherWords = ['hi', 'goodbye'];
	   *
	   * _.isEqual(words, otherWords, function(a, b) {
	   *   var reGreet = /^(?:hello|hi)$/i,
	   *       aGreet = _.isString(a) && reGreet.test(a),
	   *       bGreet = _.isString(b) && reGreet.test(b);
	   *
	   *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
	   * });
	   * // => true
	   */
	  function isEqual(a, b, callback, thisArg, stackA, stackB) {
	    // used to indicate that when comparing objects, `a` has at least the properties of `b`
	    var whereIndicator = callback === indicatorObject;
	    if (callback && !whereIndicator) {
	      callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 2);
	      var result = callback(a, b);
	      if (typeof result != 'undefined') {
	        return !!result;
	      }
	    }
	    // exit early for identical values
	    if (a === b) {
	      // treat `+0` vs. `-0` as not equal
	      return a !== 0 || (1 / a == 1 / b);
	    }
	    var type = typeof a,
	        otherType = typeof b;

	    // exit early for unlike primitive values
	    if (a === a &&
	        (!a || (type != 'function' && type != 'object')) &&
	        (!b || (otherType != 'function' && otherType != 'object'))) {
	      return false;
	    }
	    // exit early for `null` and `undefined`, avoiding ES3's Function#call behavior
	    // http://es5.github.com/#x15.3.4.4
	    if (a == null || b == null) {
	      return a === b;
	    }
	    // compare [[Class]] names
	    var className = toString.call(a),
	        otherClass = toString.call(b);

	    if (className == argsClass) {
	      className = objectClass;
	    }
	    if (otherClass == argsClass) {
	      otherClass = objectClass;
	    }
	    if (className != otherClass) {
	      return false;
	    }
	    switch (className) {
	      case boolClass:
	      case dateClass:
	        // coerce dates and booleans to numbers, dates to milliseconds and booleans
	        // to `1` or `0`, treating invalid dates coerced to `NaN` as not equal
	        return +a == +b;

	      case numberClass:
	        // treat `NaN` vs. `NaN` as equal
	        return a != +a
	          ? b != +b
	          // but treat `+0` vs. `-0` as not equal
	          : (a == 0 ? (1 / a == 1 / b) : a == +b);

	      case regexpClass:
	      case stringClass:
	        // coerce regexes to strings (http://es5.github.com/#x15.10.6.4)
	        // treat string primitives and their corresponding object instances as equal
	        return a == b + '';
	    }
	    var isArr = className == arrayClass;
	    if (!isArr) {
	      // unwrap any `lodash` wrapped values
	      if (a.__wrapped__ || b.__wrapped__) {
	        return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, thisArg, stackA, stackB);
	      }
	      // exit for functions and DOM nodes
	      if (className != objectClass || (noNodeClass && (isNode(a) || isNode(b)))) {
	        return false;
	      }
	      // in older versions of Opera, `arguments` objects have `Array` constructors
	      var ctorA = !argsAreObjects && isArguments(a) ? Object : a.constructor,
	          ctorB = !argsAreObjects && isArguments(b) ? Object : b.constructor;

	      // non `Object` object instances with different constructors are not equal
	      if (ctorA != ctorB && !(
	            isFunction(ctorA) && ctorA instanceof ctorA &&
	            isFunction(ctorB) && ctorB instanceof ctorB
	          )) {
	        return false;
	      }
	    }
	    // assume cyclic structures are equal
	    // the algorithm for detecting cyclic structures is adapted from ES 5.1
	    // section 15.12.3, abstract operation `JO` (http://es5.github.com/#x15.12.3)
	    stackA || (stackA = []);
	    stackB || (stackB = []);

	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == a) {
	        return stackB[length] == b;
	      }
	    }
	    var size = 0;
	    result = true;

	    // add `a` and `b` to the stack of traversed objects
	    stackA.push(a);
	    stackB.push(b);

	    // recursively compare objects and arrays (susceptible to call stack limits)
	    if (isArr) {
	      length = a.length;
	      size = b.length;

	      // compare lengths to determine if a deep comparison is necessary
	      result = size == a.length;
	      if (!result && !whereIndicator) {
	        return result;
	      }
	      // deep compare the contents, ignoring non-numeric properties
	      while (size--) {
	        var index = length,
	            value = b[size];

	        if (whereIndicator) {
	          while (index--) {
	            if ((result = isEqual(a[index], value, callback, thisArg, stackA, stackB))) {
	              break;
	            }
	          }
	        } else if (!(result = isEqual(a[size], value, callback, thisArg, stackA, stackB))) {
	          break;
	        }
	      }
	      return result;
	    }
	    // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
	    // which, in this case, is more costly
	    forIn(b, function(value, key, b) {
	      if (hasOwnProperty.call(b, key)) {
	        // count the number of properties.
	        size++;
	        // deep compare each property value.
	        return (result = hasOwnProperty.call(a, key) && isEqual(a[key], value, callback, thisArg, stackA, stackB));
	      }
	    });

	    if (result && !whereIndicator) {
	      // ensure both objects have the same number of properties
	      forIn(a, function(value, key, a) {
	        if (hasOwnProperty.call(a, key)) {
	          // `size` will be `-1` if `a` has more properties than `b`
	          return (result = --size > -1);
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Checks if `value` is, or can be coerced to, a finite number.
	   *
	   * Note: This is not the same as native `isFinite`, which will return true for
	   * booleans and empty strings. See http://es5.github.com/#x15.1.2.5.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is finite, else `false`.
	   * @example
	   *
	   * _.isFinite(-101);
	   * // => true
	   *
	   * _.isFinite('10');
	   * // => true
	   *
	   * _.isFinite(true);
	   * // => false
	   *
	   * _.isFinite('');
	   * // => false
	   *
	   * _.isFinite(Infinity);
	   * // => false
	   */
	  function isFinite(value) {
	    return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
	  }

	  /**
	   * Checks if `value` is a function.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is a function, else `false`.
	   * @example
	   *
	   * _.isFunction(_);
	   * // => true
	   */
	  function isFunction(value) {
	    return typeof value == 'function';
	  }
	  // fallback for older versions of Chrome and Safari
	  if (isFunction(/x/)) {
	    isFunction = function(value) {
	      return value instanceof Function || toString.call(value) == funcClass;
	    };
	  }

	  /**
	   * Checks if `value` is the language type of Object.
	   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is an object, else `false`.
	   * @example
	   *
	   * _.isObject({});
	   * // => true
	   *
	   * _.isObject([1, 2, 3]);
	   * // => true
	   *
	   * _.isObject(1);
	   * // => false
	   */
	  function isObject(value) {
	    // check if the value is the ECMAScript language type of Object
	    // http://es5.github.com/#x8
	    // and avoid a V8 bug
	    // http://code.google.com/p/v8/issues/detail?id=2291
	    return value ? objectTypes[typeof value] : false;
	  }

	  /**
	   * Checks if `value` is `NaN`.
	   *
	   * Note: This is not the same as native `isNaN`, which will return `true` for
	   * `undefined` and other values. See http://es5.github.com/#x15.1.2.4.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is `NaN`, else `false`.
	   * @example
	   *
	   * _.isNaN(NaN);
	   * // => true
	   *
	   * _.isNaN(new Number(NaN));
	   * // => true
	   *
	   * isNaN(undefined);
	   * // => true
	   *
	   * _.isNaN(undefined);
	   * // => false
	   */
	  function isNaN(value) {
	    // `NaN` as a primitive is the only value that is not equal to itself
	    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
	    return isNumber(value) && value != +value
	  }

	  /**
	   * Checks if `value` is `null`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is `null`, else `false`.
	   * @example
	   *
	   * _.isNull(null);
	   * // => true
	   *
	   * _.isNull(undefined);
	   * // => false
	   */
	  function isNull(value) {
	    return value === null;
	  }

	  /**
	   * Checks if `value` is a number.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is a number, else `false`.
	   * @example
	   *
	   * _.isNumber(8.4 * 5);
	   * // => true
	   */
	  function isNumber(value) {
	    return typeof value == 'number' || toString.call(value) == numberClass;
	  }

	  /**
	   * Checks if a given `value` is an object created by the `Object` constructor.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if `value` is a plain object, else `false`.
	   * @example
	   *
	   * function Stooge(name, age) {
	   *   this.name = name;
	   *   this.age = age;
	   * }
	   *
	   * _.isPlainObject(new Stooge('moe', 40));
	   * // => false
	   *
	   * _.isPlainObject([1, 2, 3]);
	   * // => false
	   *
	   * _.isPlainObject({ 'name': 'moe', 'age': 40 });
	   * // => true
	   */
	  var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
	    if (!(value && typeof value == 'object')) {
	      return false;
	    }
	    var valueOf = value.valueOf,
	        objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

	    return objProto
	      ? value == objProto || (getPrototypeOf(value) == objProto && !isArguments(value))
	      : shimIsPlainObject(value);
	  };

	  /**
	   * Checks if `value` is a regular expression.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is a regular expression, else `false`.
	   * @example
	   *
	   * _.isRegExp(/moe/);
	   * // => true
	   */
	  function isRegExp(value) {
	    return value instanceof RegExp || toString.call(value) == regexpClass;
	  }

	  /**
	   * Checks if `value` is a string.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is a string, else `false`.
	   * @example
	   *
	   * _.isString('moe');
	   * // => true
	   */
	  function isString(value) {
	    return typeof value == 'string' || toString.call(value) == stringClass;
	  }

	  /**
	   * Checks if `value` is `undefined`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Mixed} value The value to check.
	   * @returns {Boolean} Returns `true`, if the `value` is `undefined`, else `false`.
	   * @example
	   *
	   * _.isUndefined(void 0);
	   * // => true
	   */
	  function isUndefined(value) {
	    return typeof value == 'undefined';
	  }

	  /**
	   * Recursively merges own enumerable properties of the source object(s), that
	   * don't resolve to `undefined`, into the destination object. Subsequent sources
	   * will overwrite propery assignments of previous sources. If a `callback` function
	   * is passed, it will be executed to produce the merged values of the destination
	   * and source properties. If `callback` returns `undefined`, merging will be
	   * handled by the method instead. The `callback` is bound to `thisArg` and
	   * invoked with two arguments; (objectValue, sourceValue).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The destination object.
	   * @param {Object} [source1, source2, ...] The source objects.
	   * @param {Function} [callback] The function to customize merging properties.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @param- {Object} [deepIndicator] Internally used to indicate that `stackA`
	   *  and `stackB` are arrays of traversed objects instead of source objects.
	   * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
	   * @param- {Array} [stackB=[]] Internally used to associate values with their
	   *  source counterparts.
	   * @returns {Object} Returns the destination object.
	   * @example
	   *
	   * var names = {
	   *   'stooges': [
	   *     { 'name': 'moe' },
	   *     { 'name': 'larry' }
	   *   ]
	   * };
	   *
	   * var ages = {
	   *   'stooges': [
	   *     { 'age': 40 },
	   *     { 'age': 50 }
	   *   ]
	   * };
	   *
	   * _.merge(names, ages);
	   * // => { 'stooges': [{ 'name': 'moe', 'age': 40 }, { 'name': 'larry', 'age': 50 }] }
	   *
	   * var food = {
	   *   'fruits': ['apple'],
	   *   'vegetables': ['beet']
	   * };
	   *
	   * var otherFood = {
	   *   'fruits': ['banana'],
	   *   'vegetables': ['carrot']
	   * };
	   *
	   * _.merge(food, otherFood, function(a, b) {
	   *   return _.isArray(a) ? a.concat(b) : undefined;
	   * });
	   * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
	   */
	  function merge(object, source, deepIndicator) {
	    var args = arguments,
	        index = 0,
	        length = 2;

	    if (!isObject(object)) {
	      return object;
	    }
	    if (deepIndicator === indicatorObject) {
	      var callback = args[3],
	          stackA = args[4],
	          stackB = args[5];
	    } else {
	      stackA = [];
	      stackB = [];

	      // allows working with `_.reduce` and `_.reduceRight` without
	      // using their `callback` arguments, `index|key` and `collection`
	      if (typeof deepIndicator != 'number') {
	        length = args.length;
	      }
	      if (length > 3 && typeof args[length - 2] == 'function') {
	        callback = createCallback(args[--length - 1], args[length--], 2);
	      } else if (length > 2 && typeof args[length - 1] == 'function') {
	        callback = args[--length];
	      }
	    }
	    while (++index < length) {
	      (isArray(args[index]) ? forEach : forOwn)(args[index], function(source, key) {
	        var found,
	            isArr,
	            result = source,
	            value = object[key];

	        if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
	          // avoid merging previously merged cyclic sources
	          var stackLength = stackA.length;
	          while (stackLength--) {
	            if ((found = stackA[stackLength] == source)) {
	              value = stackB[stackLength];
	              break;
	            }
	          }
	          if (!found) {
	            value = isArr
	              ? (isArray(value) ? value : [])
	              : (isPlainObject(value) ? value : {});

	            if (callback) {
	              result = callback(value, source);
	              if (typeof result != 'undefined') {
	                value = result;
	              }
	            }
	            // add `source` and associated `value` to the stack of traversed objects
	            stackA.push(source);
	            stackB.push(value);

	            // recursively merge objects and arrays (susceptible to call stack limits)
	            if (!callback) {
	              value = merge(value, source, indicatorObject, callback, stackA, stackB);
	            }
	          }
	        }
	        else {
	          if (callback) {
	            result = callback(value, source);
	            if (typeof result == 'undefined') {
	              result = source;
	            }
	          }
	          if (typeof result != 'undefined') {
	            value = result;
	          }
	        }
	        object[key] = value;
	      });
	    }
	    return object;
	  }

	  /**
	   * Creates a shallow clone of `object` excluding the specified properties.
	   * Property names may be specified as individual arguments or as arrays of
	   * property names. If a `callback` function is passed, it will be executed
	   * for each property in the `object`, omitting the properties `callback`
	   * returns truthy for. The `callback` is bound to `thisArg` and invoked
	   * with three arguments; (value, key, object).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The source object.
	   * @param {Function|String} callback|[prop1, prop2, ...] The properties to omit
	   *  or the function called per iteration.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns an object without the omitted properties.
	   * @example
	   *
	   * _.omit({ 'name': 'moe', 'age': 40 }, 'age');
	   * // => { 'name': 'moe' }
	   *
	   * _.omit({ 'name': 'moe', 'age': 40 }, function(value) {
	   *   return typeof value == 'number';
	   * });
	   * // => { 'name': 'moe' }
	   */
	  function omit(object, callback, thisArg) {
	    var isFunc = typeof callback == 'function',
	        result = {};

	    if (isFunc) {
	      callback = createCallback(callback, thisArg);
	    } else {
	      var props = concat.apply(arrayRef, arguments);
	    }
	    forIn(object, function(value, key, object) {
	      if (isFunc
	            ? !callback(value, key, object)
	            : indexOf(props, key, 1) < 0
	          ) {
	        result[key] = value;
	      }
	    });
	    return result;
	  }

	  /**
	   * Creates a two dimensional array of the given object's key-value pairs,
	   * i.e. `[[key1, value1], [key2, value2]]`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns new array of key-value pairs.
	   * @example
	   *
	   * _.pairs({ 'moe': 30, 'larry': 40 });
	   * // => [['moe', 30], ['larry', 40]] (order is not guaranteed)
	   */
	  function pairs(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = Array(length);

	    while (++index < length) {
	      var key = props[index];
	      result[index] = [key, object[key]];
	    }
	    return result;
	  }

	  /**
	   * Creates a shallow clone of `object` composed of the specified properties.
	   * Property names may be specified as individual arguments or as arrays of property
	   * names. If `callback` is passed, it will be executed for each property in the
	   * `object`, picking the properties `callback` returns truthy for. The `callback`
	   * is bound to `thisArg` and invoked with three arguments; (value, key, object).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The source object.
	   * @param {Array|Function|String} callback|[prop1, prop2, ...] The function called
	   *  per iteration or properties to pick, either as individual arguments or arrays.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns an object composed of the picked properties.
	   * @example
	   *
	   * _.pick({ 'name': 'moe', '_userid': 'moe1' }, 'name');
	   * // => { 'name': 'moe' }
	   *
	   * _.pick({ 'name': 'moe', '_userid': 'moe1' }, function(value, key) {
	   *   return key.charAt(0) != '_';
	   * });
	   * // => { 'name': 'moe' }
	   */
	  function pick(object, callback, thisArg) {
	    var result = {};
	    if (typeof callback != 'function') {
	      var index = 0,
	          props = concat.apply(arrayRef, arguments),
	          length = isObject(object) ? props.length : 0;

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	    } else {
	      callback = createCallback(callback, thisArg);
	      forIn(object, function(value, key, object) {
	        if (callback(value, key, object)) {
	          result[key] = value;
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Creates an array composed of the own enumerable property values of `object`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns a new array of property values.
	   * @example
	   *
	   * _.values({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => [1, 2, 3]
	   */
	  function values(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = Array(length);

	    while (++index < length) {
	      result[index] = object[props[index]];
	    }
	    return result;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates an array of elements from the specified indexes, or keys, of the
	   * `collection`. Indexes may be specified as individual arguments or as arrays
	   * of indexes.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Array|Number|String} [index1, index2, ...] The indexes of
	   *  `collection` to retrieve, either as individual arguments or arrays.
	   * @returns {Array} Returns a new array of elements corresponding to the
	   *  provided indexes.
	   * @example
	   *
	   * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
	   * // => ['a', 'c', 'e']
	   *
	   * _.at(['moe', 'larry', 'curly'], 0, 2);
	   * // => ['moe', 'curly']
	   */
	  function at(collection) {
	    var index = -1,
	        props = concat.apply(arrayRef, slice(arguments, 1)),
	        length = props.length,
	        result = Array(length);

	    if (noCharByIndex && isString(collection)) {
	      collection = collection.split('');
	    }
	    while(++index < length) {
	      result[index] = collection[props[index]];
	    }
	    return result;
	  }

	  /**
	   * Checks if a given `target` element is present in a `collection` using strict
	   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
	   * as the offset from the end of the collection.
	   *
	   * @static
	   * @memberOf _
	   * @alias include
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Mixed} target The value to check for.
	   * @param {Number} [fromIndex=0] The index to search from.
	   * @returns {Boolean} Returns `true` if the `target` element is found, else `false`.
	   * @example
	   *
	   * _.contains([1, 2, 3], 1);
	   * // => true
	   *
	   * _.contains([1, 2, 3], 1, 2);
	   * // => false
	   *
	   * _.contains({ 'name': 'moe', 'age': 40 }, 'moe');
	   * // => true
	   *
	   * _.contains('curly', 'ur');
	   * // => true
	   */
	  function contains(collection, target, fromIndex) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = false;

	    fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
	    if (typeof length == 'number') {
	      result = (isString(collection)
	        ? collection.indexOf(target, fromIndex)
	        : indexOf(collection, target, fromIndex)
	      ) > -1;
	    } else {
	      each(collection, function(value) {
	        if (++index >= fromIndex) {
	          return !(result = value === target);
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Creates an object composed of keys returned from running each element of the
	   * `collection` through the given `callback`. The corresponding value of each key
	   * is the number of times the key was returned by the `callback`. The `callback`
	   * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
	   * // => { '4': 1, '6': 2 }
	   *
	   * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
	   * // => { '4': 1, '6': 2 }
	   *
	   * _.countBy(['one', 'two', 'three'], 'length');
	   * // => { '3': 2, '5': 1 }
	   */
	  function countBy(collection, callback, thisArg) {
	    var result = {};
	    callback = createCallback(callback, thisArg);

	    forEach(collection, function(value, key, collection) {
	      key = callback(value, key, collection) + '';
	      (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
	    });
	    return result;
	  }

	  /**
	   * Checks if the `callback` returns a truthy value for **all** elements of a
	   * `collection`. The `callback` is bound to `thisArg` and invoked with three
	   * arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias all
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Boolean} Returns `true` if all elements pass the callback check,
	   *  else `false`.
	   * @example
	   *
	   * _.every([true, 1, null, 'yes'], Boolean);
	   * // => false
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.every(stooges, 'age');
	   * // => true
	   *
	   * // using "_.where" callback shorthand
	   * _.every(stooges, { 'age': 50 });
	   * // => false
	   */
	  function every(collection, callback, thisArg) {
	    var result = true;
	    callback = createCallback(callback, thisArg);

	    if (isArray(collection)) {
	      var index = -1,
	          length = collection.length;

	      while (++index < length) {
	        if (!(result = !!callback(collection[index], index, collection))) {
	          break;
	        }
	      }
	    } else {
	      each(collection, function(value, index, collection) {
	        return (result = !!callback(value, index, collection));
	      });
	    }
	    return result;
	  }

	  /**
	   * Examines each element in a `collection`, returning an array of all elements
	   * the `callback` returns truthy for. The `callback` is bound to `thisArg` and
	   * invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias select
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of elements that passed the callback check.
	   * @example
	   *
	   * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	   * // => [2, 4, 6]
	   *
	   * var food = [
	   *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
	   *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.filter(food, 'organic');
	   * // => [{ 'name': 'carrot', 'organic': true, 'type': 'vegetable' }]
	   *
	   * // using "_.where" callback shorthand
	   * _.filter(food, { 'type': 'fruit' });
	   * // => [{ 'name': 'apple', 'organic': false, 'type': 'fruit' }]
	   */
	  function filter(collection, callback, thisArg) {
	    var result = [];
	    callback = createCallback(callback, thisArg);

	    if (isArray(collection)) {
	      var index = -1,
	          length = collection.length;

	      while (++index < length) {
	        var value = collection[index];
	        if (callback(value, index, collection)) {
	          result.push(value);
	        }
	      }
	    } else {
	      each(collection, function(value, index, collection) {
	        if (callback(value, index, collection)) {
	          result.push(value);
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Examines each element in a `collection`, returning the first that the `callback`
	   * returns truthy for. The `callback` is bound to `thisArg` and invoked with three
	   * arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias detect
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the element that passed the callback check,
	   *  else `undefined`.
	   * @example
	   *
	   * var even = _.find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	   * // => 2
	   *
	   * var food = [
	   *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
	   *   { 'name': 'banana', 'organic': true,  'type': 'fruit' },
	   *   { 'name': 'beet',   'organic': false, 'type': 'vegetable' },
	   *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.where" callback shorthand
	   * var veggie = _.find(food, { 'type': 'vegetable' });
	   * // => { 'name': 'beet', 'organic': false, 'type': 'vegetable' }
	   *
	   * // using "_.pluck" callback shorthand
	   * var healthy = _.find(food, 'organic');
	   * // => { 'name': 'banana', 'organic': true, 'type': 'fruit' }
	   */
	  function find(collection, callback, thisArg) {
	    var result;
	    callback = createCallback(callback, thisArg);

	    forEach(collection, function(value, index, collection) {
	      if (callback(value, index, collection)) {
	        result = value;
	        return false;
	      }
	    });
	    return result;
	  }

	  /**
	   * Iterates over a `collection`, executing the `callback` for each element in
	   * the `collection`. The `callback` is bound to `thisArg` and invoked with three
	   * arguments; (value, index|key, collection). Callbacks may exit iteration early
	   * by explicitly returning `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias each
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array|Object|String} Returns `collection`.
	   * @example
	   *
	   * _([1, 2, 3]).forEach(alert).join(',');
	   * // => alerts each number and returns '1,2,3'
	   *
	   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, alert);
	   * // => alerts each number value (order is not guaranteed)
	   */
	  function forEach(collection, callback, thisArg) {
	    if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
	      var index = -1,
	          length = collection.length;

	      while (++index < length) {
	        if (callback(collection[index], index, collection) === false) {
	          break;
	        }
	      }
	    } else {
	      each(collection, callback, thisArg);
	    }
	    return collection;
	  }

	  /**
	   * Creates an object composed of keys returned from running each element of the
	   * `collection` through the `callback`. The corresponding value of each key is
	   * an array of elements passed to `callback` that returned the key. The `callback`
	   * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
	   * // => { '4': [4.2], '6': [6.1, 6.4] }
	   *
	   * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
	   * // => { '4': [4.2], '6': [6.1, 6.4] }
	   *
	   * // using "_.pluck" callback shorthand
	   * _.groupBy(['one', 'two', 'three'], 'length');
	   * // => { '3': ['one', 'two'], '5': ['three'] }
	   */
	  function groupBy(collection, callback, thisArg) {
	    var result = {};
	    callback = createCallback(callback, thisArg);

	    forEach(collection, function(value, key, collection) {
	      key = callback(value, key, collection) + '';
	      (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
	    });
	    return result;
	  }

	  /**
	   * Invokes the method named by `methodName` on each element in the `collection`,
	   * returning an array of the results of each invoked method. Additional arguments
	   * will be passed to each invoked method. If `methodName` is a function, it will
	   * be invoked for, and `this` bound to, each element in the `collection`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|String} methodName The name of the method to invoke or
	   *  the function invoked per iteration.
	   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the method with.
	   * @returns {Array} Returns a new array of the results of each invoked method.
	   * @example
	   *
	   * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	   * // => [[1, 5, 7], [1, 2, 3]]
	   *
	   * _.invoke([123, 456], String.prototype.split, '');
	   * // => [['1', '2', '3'], ['4', '5', '6']]
	   */
	  function invoke(collection, methodName) {
	    var args = slice(arguments, 2),
	        index = -1,
	        isFunc = typeof methodName == 'function',
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);

	    forEach(collection, function(value) {
	      result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
	    });
	    return result;
	  }

	  /**
	   * Creates an array of values by running each element in the `collection`
	   * through the `callback`. The `callback` is bound to `thisArg` and invoked with
	   * three arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias collect
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of the results of each `callback` execution.
	   * @example
	   *
	   * _.map([1, 2, 3], function(num) { return num * 3; });
	   * // => [3, 6, 9]
	   *
	   * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
	   * // => [3, 6, 9] (order is not guaranteed)
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.map(stooges, 'name');
	   * // => ['moe', 'larry']
	   */
	  function map(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);

	    callback = createCallback(callback, thisArg);
	    if (isArray(collection)) {
	      while (++index < length) {
	        result[index] = callback(collection[index], index, collection);
	      }
	    } else {
	      each(collection, function(value, key, collection) {
	        result[++index] = callback(value, key, collection);
	      });
	    }
	    return result;
	  }

	  /**
	   * Retrieves the maximum value of an `array`. If `callback` is passed,
	   * it will be executed for each value in the `array` to generate the
	   * criterion by which the value is ranked. The `callback` is bound to
	   * `thisArg` and invoked with three arguments; (value, index, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the maximum value.
	   * @example
	   *
	   * _.max([4, 2, 8, 6]);
	   * // => 8
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * _.max(stooges, function(stooge) { return stooge.age; });
	   * // => { 'name': 'larry', 'age': 50 };
	   *
	   * // using "_.pluck" callback shorthand
	   * _.max(stooges, 'age');
	   * // => { 'name': 'larry', 'age': 50 };
	   */
	  function max(collection, callback, thisArg) {
	    var computed = -Infinity,
	        result = computed;

	    if (!callback && isArray(collection)) {
	      var index = -1,
	          length = collection.length;

	      while (++index < length) {
	        var value = collection[index];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      callback = !callback && isString(collection)
	        ? charAtCallback
	        : createCallback(callback, thisArg);

	      each(collection, function(value, index, collection) {
	        var current = callback(value, index, collection);
	        if (current > computed) {
	          computed = current;
	          result = value;
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Retrieves the minimum value of an `array`. If `callback` is passed,
	   * it will be executed for each value in the `array` to generate the
	   * criterion by which the value is ranked. The `callback` is bound to `thisArg`
	   * and invoked with three arguments; (value, index, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the minimum value.
	   * @example
	   *
	   * _.min([4, 2, 8, 6]);
	   * // => 2
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * _.min(stooges, function(stooge) { return stooge.age; });
	   * // => { 'name': 'moe', 'age': 40 };
	   *
	   * // using "_.pluck" callback shorthand
	   * _.min(stooges, 'age');
	   * // => { 'name': 'moe', 'age': 40 };
	   */
	  function min(collection, callback, thisArg) {
	    var computed = Infinity,
	        result = computed;

	    if (!callback && isArray(collection)) {
	      var index = -1,
	          length = collection.length;

	      while (++index < length) {
	        var value = collection[index];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      callback = !callback && isString(collection)
	        ? charAtCallback
	        : createCallback(callback, thisArg);

	      each(collection, function(value, index, collection) {
	        var current = callback(value, index, collection);
	        if (current < computed) {
	          computed = current;
	          result = value;
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Retrieves the value of a specified property from all elements in the `collection`.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {String} property The property to pluck.
	   * @returns {Array} Returns a new array of property values.
	   * @example
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * _.pluck(stooges, 'name');
	   * // => ['moe', 'larry']
	   */
	  var pluck = map;

	  /**
	   * Reduces a `collection` to a value that is the accumulated result of running
	   * each element in the `collection` through the `callback`, where each successive
	   * `callback` execution consumes the return value of the previous execution.
	   * If `accumulator` is not passed, the first element of the `collection` will be
	   * used as the initial `accumulator` value. The `callback` is bound to `thisArg`
	   * and invoked with four arguments; (accumulator, value, index|key, collection).
	   *
	   * @static
	   * @memberOf _
	   * @alias foldl, inject
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {Mixed} [accumulator] Initial value of the accumulator.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the accumulated value.
	   * @example
	   *
	   * var sum = _.reduce([1, 2, 3], function(sum, num) {
	   *   return sum + num;
	   * });
	   * // => 6
	   *
	   * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
	   *   result[key] = num * 3;
	   *   return result;
	   * }, {});
	   * // => { 'a': 3, 'b': 6, 'c': 9 }
	   */
	  function reduce(collection, callback, accumulator, thisArg) {
	    var noaccum = arguments.length < 3;
	    callback = createCallback(callback, thisArg, 4);

	    if (isArray(collection)) {
	      var index = -1,
	          length = collection.length;

	      if (noaccum) {
	        accumulator = collection[++index];
	      }
	      while (++index < length) {
	        accumulator = callback(accumulator, collection[index], index, collection);
	      }
	    } else {
	      each(collection, function(value, index, collection) {
	        accumulator = noaccum
	          ? (noaccum = false, value)
	          : callback(accumulator, value, index, collection)
	      });
	    }
	    return accumulator;
	  }

	  /**
	   * This method is similar to `_.reduce`, except that it iterates over a
	   * `collection` from right to left.
	   *
	   * @static
	   * @memberOf _
	   * @alias foldr
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {Mixed} [accumulator] Initial value of the accumulator.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the accumulated value.
	   * @example
	   *
	   * var list = [[0, 1], [2, 3], [4, 5]];
	   * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
	   * // => [4, 5, 2, 3, 0, 1]
	   */
	  function reduceRight(collection, callback, accumulator, thisArg) {
	    var iterable = collection,
	        length = collection ? collection.length : 0,
	        noaccum = arguments.length < 3;

	    if (typeof length != 'number') {
	      var props = keys(collection);
	      length = props.length;
	    } else if (noCharByIndex && isString(collection)) {
	      iterable = collection.split('');
	    }
	    callback = createCallback(callback, thisArg, 4);
	    forEach(collection, function(value, index, collection) {
	      index = props ? props[--length] : --length;
	      accumulator = noaccum
	        ? (noaccum = false, iterable[index])
	        : callback(accumulator, iterable[index], index, collection);
	    });
	    return accumulator;
	  }

	  /**
	   * The opposite of `_.filter`, this method returns the elements of a
	   * `collection` that `callback` does **not** return truthy for.
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of elements that did **not** pass the
	   *  callback check.
	   * @example
	   *
	   * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	   * // => [1, 3, 5]
	   *
	   * var food = [
	   *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
	   *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.reject(food, 'organic');
	   * // => [{ 'name': 'apple', 'organic': false, 'type': 'fruit' }]
	   *
	   * // using "_.where" callback shorthand
	   * _.reject(food, { 'type': 'fruit' });
	   * // => [{ 'name': 'carrot', 'organic': true, 'type': 'vegetable' }]
	   */
	  function reject(collection, callback, thisArg) {
	    callback = createCallback(callback, thisArg);
	    return filter(collection, function(value, index, collection) {
	      return !callback(value, index, collection);
	    });
	  }

	  /**
	   * Creates an array of shuffled `array` values, using a version of the
	   * Fisher-Yates shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to shuffle.
	   * @returns {Array} Returns a new shuffled collection.
	   * @example
	   *
	   * _.shuffle([1, 2, 3, 4, 5, 6]);
	   * // => [4, 1, 6, 3, 5, 2]
	   */
	  function shuffle(collection) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);

	    forEach(collection, function(value) {
	      var rand = floor(nativeRandom() * (++index + 1));
	      result[index] = result[rand];
	      result[rand] = value;
	    });
	    return result;
	  }

	  /**
	   * Gets the size of the `collection` by returning `collection.length` for arrays
	   * and array-like objects or the number of own enumerable properties for objects.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to inspect.
	   * @returns {Number} Returns `collection.length` or number of own enumerable properties.
	   * @example
	   *
	   * _.size([1, 2]);
	   * // => 2
	   *
	   * _.size({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => 3
	   *
	   * _.size('curly');
	   * // => 5
	   */
	  function size(collection) {
	    var length = collection ? collection.length : 0;
	    return typeof length == 'number' ? length : keys(collection).length;
	  }

	  /**
	   * Checks if the `callback` returns a truthy value for **any** element of a
	   * `collection`. The function returns as soon as it finds passing value, and
	   * does not iterate over the entire `collection`. The `callback` is bound to
	   * `thisArg` and invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias any
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Boolean} Returns `true` if any element passes the callback check,
	   *  else `false`.
	   * @example
	   *
	   * _.some([null, 0, 'yes', false], Boolean);
	   * // => true
	   *
	   * var food = [
	   *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
	   *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.some(food, 'organic');
	   * // => true
	   *
	   * // using "_.where" callback shorthand
	   * _.some(food, { 'type': 'meat' });
	   * // => false
	   */
	  function some(collection, callback, thisArg) {
	    var result;
	    callback = createCallback(callback, thisArg);

	    if (isArray(collection)) {
	      var index = -1,
	          length = collection.length;

	      while (++index < length) {
	        if ((result = callback(collection[index], index, collection))) {
	          break;
	        }
	      }
	    } else {
	      each(collection, function(value, index, collection) {
	        return !(result = callback(value, index, collection));
	      });
	    }
	    return !!result;
	  }

	  /**
	   * Creates an array of elements, sorted in ascending order by the results of
	   * running each element in the `collection` through the `callback`. This method
	   * performs a stable sort, that is, it will preserve the original sort order of
	   * equal elements. The `callback` is bound to `thisArg` and invoked with three
	   * arguments; (value, index|key, collection).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of sorted elements.
	   * @example
	   *
	   * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
	   * // => [3, 1, 2]
	   *
	   * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
	   * // => [3, 1, 2]
	   *
	   * // using "_.pluck" callback shorthand
	   * _.sortBy(['banana', 'strawberry', 'apple'], 'length');
	   * // => ['apple', 'banana', 'strawberry']
	   */
	  function sortBy(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);

	    callback = createCallback(callback, thisArg);
	    forEach(collection, function(value, key, collection) {
	      result[++index] = {
	        'criteria': callback(value, key, collection),
	        'index': index,
	        'value': value
	      };
	    });

	    length = result.length;
	    result.sort(compareAscending);
	    while (length--) {
	      result[length] = result[length].value;
	    }
	    return result;
	  }

	  /**
	   * Converts the `collection` to an array.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to convert.
	   * @returns {Array} Returns the new converted array.
	   * @example
	   *
	   * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
	   * // => [2, 3, 4]
	   */
	  function toArray(collection) {
	    if (collection && typeof collection.length == 'number') {
	      return noCharByIndex && isString(collection)
	        ? collection.split('')
	        : slice(collection);
	    }
	    return values(collection);
	  }

	  /**
	   * Examines each element in a `collection`, returning an array of all elements
	   * that have the given `properties`. When checking `properties`, this method
	   * performs a deep comparison between values to determine if they are equivalent
	   * to each other.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Collections
	   * @param {Array|Object|String} collection The collection to iterate over.
	   * @param {Object} properties The object of property values to filter by.
	   * @returns {Array} Returns a new array of elements that have the given `properties`.
	   * @example
	   *
	   * var stooges = [
	   *   { 'name': 'moe', 'age': 40 },
	   *   { 'name': 'larry', 'age': 50 }
	   * ];
	   *
	   * _.where(stooges, { 'age': 40 });
	   * // => [{ 'name': 'moe', 'age': 40 }]
	   */
	  var where = filter;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates an array with all falsey values of `array` removed. The values
	   * `false`, `null`, `0`, `""`, `undefined` and `NaN` are all falsey.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to compact.
	   * @returns {Array} Returns a new filtered array.
	   * @example
	   *
	   * _.compact([0, 1, false, 2, '', 3]);
	   * // => [1, 2, 3]
	   */
	  function compact(array) {
	    var index = -1,
	        length = array ? array.length : 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (value) {
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Creates an array of `array` elements not present in the other arrays
	   * using strict equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to process.
	   * @param {Array} [array1, array2, ...] Arrays to check.
	   * @returns {Array} Returns a new array of `array` elements not present in the
	   *  other arrays.
	   * @example
	   *
	   * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
	   * // => [1, 3, 4]
	   */
	  function difference(array) {
	    var index = -1,
	        length = array ? array.length : 0,
	        flattened = concat.apply(arrayRef, arguments),
	        contains = cachedContains(flattened, length),
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (!contains(value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Gets the first element of the `array`. If a number `n` is passed, the first
	   * `n` elements of the `array` are returned. If a `callback` function is passed,
	   * the first elements the `callback` returns truthy for are returned. The `callback`
	   * is bound to `thisArg` and invoked with three arguments; (value, index, array).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias head, take
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|Number|String} [callback|n] The function called
	   *  per element or the number of elements to return. If a property name or
	   *  object is passed, it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the first element(s) of `array`.
	   * @example
	   *
	   * _.first([1, 2, 3]);
	   * // => 1
	   *
	   * _.first([1, 2, 3], 2);
	   * // => [1, 2]
	   *
	   * _.first([1, 2, 3], function(num) {
	   *   return num < 3;
	   * });
	   * // => [1, 2]
	   *
	   * var food = [
	   *   { 'name': 'banana', 'organic': true },
	   *   { 'name': 'beet',   'organic': false },
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.first(food, 'organic');
	   * // => [{ 'name': 'banana', 'organic': true }]
	   *
	   * var food = [
	   *   { 'name': 'apple',  'type': 'fruit' },
	   *   { 'name': 'banana', 'type': 'fruit' },
	   *   { 'name': 'beet',   'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.where" callback shorthand
	   * _.first(food, { 'type': 'fruit' });
	   * // => [{ 'name': 'apple', 'type': 'fruit' }, { 'name': 'banana', 'type': 'fruit' }]
	   */
	  function first(array, callback, thisArg) {
	    if (array) {
	      var n = 0,
	          length = array.length;

	      if (typeof callback != 'number' && callback != null) {
	        var index = -1;
	        callback = createCallback(callback, thisArg);
	        while (++index < length && callback(array[index], index, array)) {
	          n++;
	        }
	      } else {
	        n = callback;
	        if (n == null || thisArg) {
	          return array[0];
	        }
	      }
	      return slice(array, 0, nativeMin(nativeMax(0, n), length));
	    }
	  }

	  /**
	   * Flattens a nested array (the nesting can be to any depth). If `shallow` is
	   * truthy, `array` will only be flattened a single level.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to compact.
	   * @param {Boolean} shallow A flag to indicate only flattening a single level.
	   * @returns {Array} Returns a new flattened array.
	   * @example
	   *
	   * _.flatten([1, [2], [3, [[4]]]]);
	   * // => [1, 2, 3, 4];
	   *
	   * _.flatten([1, [2], [3, [[4]]]], true);
	   * // => [1, 2, 3, [[4]]];
	   */
	  function flatten(array, shallow) {
	    var index = -1,
	        length = array ? array.length : 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];

	      // recursively flatten arrays (susceptible to call stack limits)
	      if (isArray(value)) {
	        push.apply(result, shallow ? value : flatten(value));
	      } else {
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Gets the index at which the first occurrence of `value` is found using
	   * strict equality for comparisons, i.e. `===`. If the `array` is already
	   * sorted, passing `true` for `fromIndex` will run a faster binary search.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to search.
	   * @param {Mixed} value The value to search for.
	   * @param {Boolean|Number} [fromIndex=0] The index to search from or `true` to
	   *  perform a binary search on a sorted `array`.
	   * @returns {Number} Returns the index of the matched value or `-1`.
	   * @example
	   *
	   * _.indexOf([1, 2, 3, 1, 2, 3], 2);
	   * // => 1
	   *
	   * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
	   * // => 4
	   *
	   * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
	   * // => 2
	   */
	  function indexOf(array, value, fromIndex) {
	    var index = -1,
	        length = array ? array.length : 0;

	    if (typeof fromIndex == 'number') {
	      index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1;
	    } else if (fromIndex) {
	      index = sortedIndex(array, value);
	      return array[index] === value ? index : -1;
	    }
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Gets all but the last element of `array`. If a number `n` is passed, the
	   * last `n` elements are excluded from the result. If a `callback` function
	   * is passed, the last elements the `callback` returns truthy for are excluded
	   * from the result. The `callback` is bound to `thisArg` and invoked with three
	   * arguments; (value, index, array).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|Number|String} [callback|n=1] The function called
	   *  per element or the number of elements to exclude. If a property name or
	   *  object is passed, it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a slice of `array`.
	   * @example
	   *
	   * _.initial([1, 2, 3]);
	   * // => [1, 2]
	   *
	   * _.initial([1, 2, 3], 2);
	   * // => [1]
	   *
	   * _.initial([1, 2, 3], function(num) {
	   *   return num > 1;
	   * });
	   * // => [1]
	   *
	   * var food = [
	   *   { 'name': 'beet',   'organic': false },
	   *   { 'name': 'carrot', 'organic': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.initial(food, 'organic');
	   * // => [{ 'name': 'beet',   'organic': false }]
	   *
	   * var food = [
	   *   { 'name': 'banana', 'type': 'fruit' },
	   *   { 'name': 'beet',   'type': 'vegetable' },
	   *   { 'name': 'carrot', 'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.where" callback shorthand
	   * _.initial(food, { 'type': 'vegetable' });
	   * // => [{ 'name': 'banana', 'type': 'fruit' }]
	   */
	  function initial(array, callback, thisArg) {
	    if (!array) {
	      return [];
	    }
	    var n = 0,
	        length = array.length;

	    if (typeof callback != 'number' && callback != null) {
	      var index = length;
	      callback = createCallback(callback, thisArg);
	      while (index-- && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = (callback == null || thisArg) ? 1 : callback || n;
	    }
	    return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
	  }

	  /**
	   * Computes the intersection of all the passed-in arrays using strict equality
	   * for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} [array1, array2, ...] Arrays to process.
	   * @returns {Array} Returns a new array of unique elements that are present
	   *  in **all** of the arrays.
	   * @example
	   *
	   * _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
	   * // => [1, 2]
	   */
	  function intersection(array) {
	    var args = arguments,
	        argsLength = args.length,
	        cache = { '0': {} },
	        index = -1,
	        length = array ? array.length : 0,
	        isLarge = length >= 100,
	        result = [],
	        seen = result;

	    outer:
	    while (++index < length) {
	      var value = array[index];
	      if (isLarge) {
	        var key = value + '';
	        var inited = hasOwnProperty.call(cache[0], key)
	          ? !(seen = cache[0][key])
	          : (seen = cache[0][key] = []);
	      }
	      if (inited || indexOf(seen, value) < 0) {
	        if (isLarge) {
	          seen.push(value);
	        }
	        var argsIndex = argsLength;
	        while (--argsIndex) {
	          if (!(cache[argsIndex] || (cache[argsIndex] = cachedContains(args[argsIndex], 0, 100)))(value)) {
	            continue outer;
	          }
	        }
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Gets the last element of the `array`. If a number `n` is passed, the last
	   * `n` elements of the `array` are returned. If a `callback` function is passed,
	   * the last elements the `callback` returns truthy for are returned. The `callback`
	   * is bound to `thisArg` and invoked with three arguments; (value, index, array).
	   *
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|Number|String} [callback|n] The function called
	   *  per element or the number of elements to return. If a property name or
	   *  object is passed, it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Mixed} Returns the last element(s) of `array`.
	   * @example
	   *
	   * _.last([1, 2, 3]);
	   * // => 3
	   *
	   * _.last([1, 2, 3], 2);
	   * // => [2, 3]
	   *
	   * _.last([1, 2, 3], function(num) {
	   *   return num > 1;
	   * });
	   * // => [2, 3]
	   *
	   * var food = [
	   *   { 'name': 'beet',   'organic': false },
	   *   { 'name': 'carrot', 'organic': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.last(food, 'organic');
	   * // => [{ 'name': 'carrot', 'organic': true }]
	   *
	   * var food = [
	   *   { 'name': 'banana', 'type': 'fruit' },
	   *   { 'name': 'beet',   'type': 'vegetable' },
	   *   { 'name': 'carrot', 'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.where" callback shorthand
	   * _.last(food, { 'type': 'vegetable' });
	   * // => [{ 'name': 'beet', 'type': 'vegetable' }, { 'name': 'carrot', 'type': 'vegetable' }]
	   */
	  function last(array, callback, thisArg) {
	    if (array) {
	      var n = 0,
	          length = array.length;

	      if (typeof callback != 'number' && callback != null) {
	        var index = length;
	        callback = createCallback(callback, thisArg);
	        while (index-- && callback(array[index], index, array)) {
	          n++;
	        }
	      } else {
	        n = callback;
	        if (n == null || thisArg) {
	          return array[length - 1];
	        }
	      }
	      return slice(array, nativeMax(0, length - n));
	    }
	  }

	  /**
	   * Gets the index at which the last occurrence of `value` is found using strict
	   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
	   * as the offset from the end of the collection.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to search.
	   * @param {Mixed} value The value to search for.
	   * @param {Number} [fromIndex=array.length-1] The index to search from.
	   * @returns {Number} Returns the index of the matched value or `-1`.
	   * @example
	   *
	   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
	   * // => 4
	   *
	   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
	   * // => 1
	   */
	  function lastIndexOf(array, value, fromIndex) {
	    var index = array ? array.length : 0;
	    if (typeof fromIndex == 'number') {
	      index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
	    }
	    while (index--) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Creates an object composed from arrays of `keys` and `values`. Pass either
	   * a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`, or
	   * two arrays, one of `keys` and one of corresponding `values`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} keys The array of keys.
	   * @param {Array} [values=[]] The array of values.
	   * @returns {Object} Returns an object composed of the given keys and
	   *  corresponding values.
	   * @example
	   *
	   * _.object(['moe', 'larry'], [30, 40]);
	   * // => { 'moe': 30, 'larry': 40 }
	   */
	  function object(keys, values) {
	    var index = -1,
	        length = keys ? keys.length : 0,
	        result = {};

	    while (++index < length) {
	      var key = keys[index];
	      if (values) {
	        result[key] = values[index];
	      } else {
	        result[key[0]] = key[1];
	      }
	    }
	    return result;
	  }

	  /**
	   * Creates an array of numbers (positive and/or negative) progressing from
	   * `start` up to but not including `end`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Number} [start=0] The start of the range.
	   * @param {Number} end The end of the range.
	   * @param {Number} [step=1] The value to increment or descrement by.
	   * @returns {Array} Returns a new range array.
	   * @example
	   *
	   * _.range(10);
	   * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	   *
	   * _.range(1, 11);
	   * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	   *
	   * _.range(0, 30, 5);
	   * // => [0, 5, 10, 15, 20, 25]
	   *
	   * _.range(0, -10, -1);
	   * // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
	   *
	   * _.range(0);
	   * // => []
	   */
	  function range(start, end, step) {
	    start = +start || 0;
	    step = +step || 1;

	    if (end == null) {
	      end = start;
	      start = 0;
	    }
	    // use `Array(length)` so V8 will avoid the slower "dictionary" mode
	    // http://youtu.be/XAqIpGU8ZZk#t=17m25s
	    var index = -1,
	        length = nativeMax(0, ceil((end - start) / step)),
	        result = Array(length);

	    while (++index < length) {
	      result[index] = start;
	      start += step;
	    }
	    return result;
	  }

	  /**
	   * The opposite of `_.initial`, this method gets all but the first value of `array`.
	   * If a number `n` is passed, the first `n` values are excluded from the result.
	   * If a `callback` function is passed, the first elements the `callback` returns
	   * truthy for are excluded from the result. The `callback` is bound to `thisArg`
	   * and invoked with three arguments; (value, index, array).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias drop, tail
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|Number|String} [callback|n=1] The function called
	   *  per element or the number of elements to exclude. If a property name or
	   *  object is passed, it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a slice of `array`.
	   * @example
	   *
	   * _.rest([1, 2, 3]);
	   * // => [2, 3]
	   *
	   * _.rest([1, 2, 3], 2);
	   * // => [3]
	   *
	   * _.rest([1, 2, 3], function(num) {
	   *   return num < 3;
	   * });
	   * // => [3]
	   *
	   * var food = [
	   *   { 'name': 'banana', 'organic': true },
	   *   { 'name': 'beet',   'organic': false },
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.rest(food, 'organic');
	   * // => [{ 'name': 'beet', 'organic': false }]
	   *
	   * var food = [
	   *   { 'name': 'apple',  'type': 'fruit' },
	   *   { 'name': 'banana', 'type': 'fruit' },
	   *   { 'name': 'beet',   'type': 'vegetable' }
	   * ];
	   *
	   * // using "_.where" callback shorthand
	   * _.rest(food, { 'type': 'fruit' });
	   * // => [{ 'name': 'beet', 'type': 'vegetable' }]
	   */
	  function rest(array, callback, thisArg) {
	    if (typeof callback != 'number' && callback != null) {
	      var n = 0,
	          index = -1,
	          length = array ? array.length : 0;

	      callback = createCallback(callback, thisArg);
	      while (++index < length && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
	    }
	    return slice(array, n);
	  }

	  /**
	   * Uses a binary search to determine the smallest index at which the `value`
	   * should be inserted into `array` in order to maintain the sort order of the
	   * sorted `array`. If `callback` is passed, it will be executed for `value` and
	   * each element in `array` to compute their sort ranking. The `callback` is
	   * bound to `thisArg` and invoked with one argument; (value).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to iterate over.
	   * @param {Mixed} value The value to evaluate.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Number} Returns the index at which the value should be inserted
	   *  into `array`.
	   * @example
	   *
	   * _.sortedIndex([20, 30, 50], 40);
	   * // => 2
	   *
	   * // using "_.pluck" callback shorthand
	   * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	   * // => 2
	   *
	   * var dict = {
	   *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
	   * };
	   *
	   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
	   *   return dict.wordToNumber[word];
	   * });
	   * // => 2
	   *
	   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
	   *   return this.wordToNumber[word];
	   * }, dict);
	   * // => 2
	   */
	  function sortedIndex(array, value, callback, thisArg) {
	    var low = 0,
	        high = array ? array.length : low;

	    // explicitly reference `identity` for better inlining in Firefox
	    callback = callback ? createCallback(callback, thisArg, 1) : identity;
	    value = callback(value);

	    while (low < high) {
	      var mid = (low + high) >>> 1;
	      callback(array[mid]) < value
	        ? low = mid + 1
	        : high = mid;
	    }
	    return low;
	  }

	  /**
	   * Computes the union of the passed-in arrays using strict equality for
	   * comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} [array1, array2, ...] Arrays to process.
	   * @returns {Array} Returns a new array of unique values, in order, that are
	   *  present in one or more of the arrays.
	   * @example
	   *
	   * _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
	   * // => [1, 2, 3, 101, 10]
	   */
	  function union() {
	    return uniq(concat.apply(arrayRef, arguments));
	  }

	  /**
	   * Creates a duplicate-value-free version of the `array` using strict equality
	   * for comparisons, i.e. `===`. If the `array` is already sorted, passing `true`
	   * for `isSorted` will run a faster algorithm. If `callback` is passed, each
	   * element of `array` is passed through a callback` before uniqueness is computed.
	   * The `callback` is bound to `thisArg` and invoked with three arguments; (value, index, array).
	   *
	   * If a property name is passed for `callback`, the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is passed for `callback`, the created "_.where" style callback
	   * will return `true` for elements that have the propeties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias unique
	   * @category Arrays
	   * @param {Array} array The array to process.
	   * @param {Boolean} [isSorted=false] A flag to indicate that the `array` is already sorted.
	   * @param {Function|Object|String} [callback=identity] The function called per
	   *  iteration. If a property name or object is passed, it will be used to create
	   *  a "_.pluck" or "_.where" style callback, respectively.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a duplicate-value-free array.
	   * @example
	   *
	   * _.uniq([1, 2, 1, 3, 1]);
	   * // => [1, 2, 3]
	   *
	   * _.uniq([1, 1, 2, 2, 3], true);
	   * // => [1, 2, 3]
	   *
	   * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return Math.floor(num); });
	   * // => [1, 2, 3]
	   *
	   * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return this.floor(num); }, Math);
	   * // => [1, 2, 3]
	   *
	   * // using "_.pluck" callback shorthand
	   * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	   * // => [{ 'x': 1 }, { 'x': 2 }]
	   */
	  function uniq(array, isSorted, callback, thisArg) {
	    var index = -1,
	        length = array ? array.length : 0,
	        result = [],
	        seen = result;

	    // juggle arguments
	    if (typeof isSorted == 'function') {
	      thisArg = callback;
	      callback = isSorted;
	      isSorted = false;
	    }
	    // init value cache for large arrays
	    var isLarge = !isSorted && length >= 75;
	    if (isLarge) {
	      var cache = {};
	    }
	    if (callback) {
	      seen = [];
	      callback = createCallback(callback, thisArg);
	    }
	    while (++index < length) {
	      var value = array[index],
	          computed = callback ? callback(value, index, array) : value;

	      if (isLarge) {
	        var key = computed + '';
	        var inited = hasOwnProperty.call(cache, key)
	          ? !(seen = cache[key])
	          : (seen = cache[key] = []);
	      }
	      if (isSorted
	            ? !index || seen[seen.length - 1] !== computed
	            : inited || indexOf(seen, computed) < 0
	          ) {
	        if (callback || isLarge) {
	          seen.push(computed);
	        }
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Creates an array with all occurrences of the passed values removed using
	   * strict equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to filter.
	   * @param {Mixed} [value1, value2, ...] Values to remove.
	   * @returns {Array} Returns a new filtered array.
	   * @example
	   *
	   * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
	   * // => [2, 3, 4]
	   */
	  function without(array) {
	    var index = -1,
	        length = array ? array.length : 0,
	        contains = cachedContains(arguments, 1),
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (!contains(value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Groups the elements of each array at their corresponding indexes. Useful for
	   * separate data sources that are coordinated through matching array indexes.
	   * For a matrix of nested arrays, `_.zip.apply(...)` can transpose the matrix
	   * in a similar fashion.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} [array1, array2, ...] Arrays to process.
	   * @returns {Array} Returns a new array of grouped elements.
	   * @example
	   *
	   * _.zip(['moe', 'larry'], [30, 40], [true, false]);
	   * // => [['moe', 30, true], ['larry', 40, false]]
	   */
	  function zip(array) {
	    var index = -1,
	        length = array ? max(pluck(arguments, 'length')) : 0,
	        result = Array(length);

	    while (++index < length) {
	      result[index] = pluck(arguments, index);
	    }
	    return result;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates a function that is restricted to executing `func` only after it is
	   * called `n` times. The `func` is executed with the `this` binding of the
	   * created function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Number} n The number of times the function must be called before
	   * it is executed.
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * var renderNotes = _.after(notes.length, render);
	   * _.forEach(notes, function(note) {
	   *   note.asyncSave({ 'success': renderNotes });
	   * });
	   * // `renderNotes` is run once, after all notes have saved
	   */
	  function after(n, func) {
	    if (n < 1) {
	      return func();
	    }
	    return function() {
	      if (--n < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  }

	  /**
	   * Creates a function that, when called, invokes `func` with the `this`
	   * binding of `thisArg` and prepends any additional `bind` arguments to those
	   * passed to the bound function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to bind.
	   * @param {Mixed} [thisArg] The `this` binding of `func`.
	   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
	   * @returns {Function} Returns the new bound function.
	   * @example
	   *
	   * var func = function(greeting) {
	   *   return greeting + ' ' + this.name;
	   * };
	   *
	   * func = _.bind(func, { 'name': 'moe' }, 'hi');
	   * func();
	   * // => 'hi moe'
	   */
	  function bind(func, thisArg) {
	    // use `Function#bind` if it exists and is fast
	    // (in V8 `Function#bind` is slower except when partially applied)
	    return isBindFast || (nativeBind && arguments.length > 2)
	      ? nativeBind.call.apply(nativeBind, arguments)
	      : createBound(func, thisArg, slice(arguments, 2));
	  }

	  /**
	   * Binds methods on `object` to `object`, overwriting the existing method.
	   * Method names may be specified as individual arguments or as arrays of method
	   * names. If no method names are provided, all the function properties of `object`
	   * will be bound.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Object} object The object to bind and assign the bound methods to.
	   * @param {String} [methodName1, methodName2, ...] Method names on the object to bind.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * var view = {
	   *  'label': 'docs',
	   *  'onClick': function() { alert('clicked ' + this.label); }
	   * };
	   *
	   * _.bindAll(view);
	   * jQuery('#docs').on('click', view.onClick);
	   * // => alerts 'clicked docs', when the button is clicked
	   */
	  function bindAll(object) {
	    var funcs = concat.apply(arrayRef, arguments),
	        index = funcs.length > 1 ? 0 : (funcs = functions(object), -1),
	        length = funcs.length;

	    while (++index < length) {
	      var key = funcs[index];
	      object[key] = bind(object[key], object);
	    }
	    return object;
	  }

	  /**
	   * Creates a function that, when called, invokes the method at `object[key]`
	   * and prepends any additional `bindKey` arguments to those passed to the bound
	   * function. This method differs from `_.bind` by allowing bound functions to
	   * reference methods that will be redefined or don't yet exist.
	   * See http://michaux.ca/articles/lazy-function-definition-pattern.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Object} object The object the method belongs to.
	   * @param {String} key The key of the method.
	   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
	   * @returns {Function} Returns the new bound function.
	   * @example
	   *
	   * var object = {
	   *   'name': 'moe',
	   *   'greet': function(greeting) {
	   *     return greeting + ' ' + this.name;
	   *   }
	   * };
	   *
	   * var func = _.bindKey(object, 'greet', 'hi');
	   * func();
	   * // => 'hi moe'
	   *
	   * object.greet = function(greeting) {
	   *   return greeting + ', ' + this.name + '!';
	   * };
	   *
	   * func();
	   * // => 'hi, moe!'
	   */
	  function bindKey(object, key) {
	    return createBound(object, key, slice(arguments, 2));
	  }

	  /**
	   * Creates a function that is the composition of the passed functions,
	   * where each function consumes the return value of the function that follows.
	   * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
	   * Each function is executed with the `this` binding of the composed function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} [func1, func2, ...] Functions to compose.
	   * @returns {Function} Returns the new composed function.
	   * @example
	   *
	   * var greet = function(name) { return 'hi ' + name; };
	   * var exclaim = function(statement) { return statement + '!'; };
	   * var welcome = _.compose(exclaim, greet);
	   * welcome('moe');
	   * // => 'hi moe!'
	   */
	  function compose() {
	    var funcs = arguments;
	    return function() {
	      var args = arguments,
	          length = funcs.length;

	      while (length--) {
	        args = [funcs[length].apply(this, args)];
	      }
	      return args[0];
	    };
	  }

	  /**
	   * Creates a function that will delay the execution of `func` until after
	   * `wait` milliseconds have elapsed since the last time it was invoked. Pass
	   * `true` for `immediate` to cause debounce to invoke `func` on the leading,
	   * instead of the trailing, edge of the `wait` timeout. Subsequent calls to
	   * the debounced function will return the result of the last `func` call.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to debounce.
	   * @param {Number} wait The number of milliseconds to delay.
	   * @param {Boolean} immediate A flag to indicate execution is on the leading
	   *  edge of the timeout.
	   * @returns {Function} Returns the new debounced function.
	   * @example
	   *
	   * var lazyLayout = _.debounce(calculateLayout, 300);
	   * jQuery(window).on('resize', lazyLayout);
	   */
	  function debounce(func, wait, immediate) {
	    var args,
	        result,
	        thisArg,
	        timeoutId;

	    function delayed() {
	      timeoutId = null;
	      if (!immediate) {
	        result = func.apply(thisArg, args);
	      }
	    }
	    return function() {
	      var isImmediate = immediate && !timeoutId;
	      args = arguments;
	      thisArg = this;

	      clearTimeout(timeoutId);
	      timeoutId = setTimeout(delayed, wait);

	      if (isImmediate) {
	        result = func.apply(thisArg, args);
	      }
	      return result;
	    };
	  }

	  /**
	   * Executes the `func` function after `wait` milliseconds. Additional arguments
	   * will be passed to `func` when it is invoked.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to delay.
	   * @param {Number} wait The number of milliseconds to delay execution.
	   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
	   * @returns {Number} Returns the `setTimeout` timeout id.
	   * @example
	   *
	   * var log = _.bind(console.log, console);
	   * _.delay(log, 1000, 'logged later');
	   * // => 'logged later' (Appears after one second.)
	   */
	  function delay(func, wait) {
	    var args = slice(arguments, 2);
	    return setTimeout(function() { func.apply(undefined, args); }, wait);
	  }

	  /**
	   * Defers executing the `func` function until the current call stack has cleared.
	   * Additional arguments will be passed to `func` when it is invoked.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to defer.
	   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
	   * @returns {Number} Returns the `setTimeout` timeout id.
	   * @example
	   *
	   * _.defer(function() { alert('deferred'); });
	   * // returns from the function before `alert` is called
	   */
	  function defer(func) {
	    var args = slice(arguments, 1);
	    return setTimeout(function() { func.apply(undefined, args); }, 1);
	  }
	  // use `setImmediate` if it's available in Node.js
	  if (isV8 && freeModule && typeof setImmediate == 'function') {
	    defer = bind(setImmediate, window);
	  }

	  /**
	   * Creates a function that memoizes the result of `func`. If `resolver` is
	   * passed, it will be used to determine the cache key for storing the result
	   * based on the arguments passed to the memoized function. By default, the first
	   * argument passed to the memoized function is used as the cache key. The `func`
	   * is executed with the `this` binding of the memoized function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to have its output memoized.
	   * @param {Function} [resolver] A function used to resolve the cache key.
	   * @returns {Function} Returns the new memoizing function.
	   * @example
	   *
	   * var fibonacci = _.memoize(function(n) {
	   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
	   * });
	   */
	  function memoize(func, resolver) {
	    var cache = {};
	    return function() {
	      var key = (resolver ? resolver.apply(this, arguments) : arguments[0]) + '';
	      return hasOwnProperty.call(cache, key)
	        ? cache[key]
	        : (cache[key] = func.apply(this, arguments));
	    };
	  }

	  /**
	   * Creates a function that is restricted to execute `func` once. Repeat calls to
	   * the function will return the value of the first call. The `func` is executed
	   * with the `this` binding of the created function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * var initialize = _.once(createApplication);
	   * initialize();
	   * initialize();
	   * // `initialize` executes `createApplication` once
	   */
	  function once(func) {
	    var ran,
	        result;

	    return function() {
	      if (ran) {
	        return result;
	      }
	      ran = true;
	      result = func.apply(this, arguments);

	      // clear the `func` variable so the function may be garbage collected
	      func = null;
	      return result;
	    };
	  }

	  /**
	   * Creates a function that, when called, invokes `func` with any additional
	   * `partial` arguments prepended to those passed to the new function. This
	   * method is similar to `_.bind`, except it does **not** alter the `this` binding.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to partially apply arguments to.
	   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
	   * @returns {Function} Returns the new partially applied function.
	   * @example
	   *
	   * var greet = function(greeting, name) { return greeting + ' ' + name; };
	   * var hi = _.partial(greet, 'hi');
	   * hi('moe');
	   * // => 'hi moe'
	   */
	  function partial(func) {
	    return createBound(func, slice(arguments, 1));
	  }

	  /**
	   * This method is similar to `_.partial`, except that `partial` arguments are
	   * appended to those passed to the new function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to partially apply arguments to.
	   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
	   * @returns {Function} Returns the new partially applied function.
	   * @example
	   *
	   * var defaultsDeep = _.partialRight(_.merge, _.defaults);
	   *
	   * var options = {
	   *   'variable': 'data',
	   *   'imports': { 'jq': $ }
	   * };
	   *
	   * defaultsDeep(options, _.templateSettings);
	   *
	   * options.variable
	   * // => 'data'
	   *
	   * options.imports
	   * // => { '_': _, 'jq': $ }
	   */
	  function partialRight(func) {
	    return createBound(func, slice(arguments, 1), null, indicatorObject);
	  }

	  /**
	   * Creates a function that, when executed, will only call the `func`
	   * function at most once per every `wait` milliseconds. If the throttled
	   * function is invoked more than once during the `wait` timeout, `func` will
	   * also be called on the trailing edge of the timeout. Subsequent calls to the
	   * throttled function will return the result of the last `func` call.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to throttle.
	   * @param {Number} wait The number of milliseconds to throttle executions to.
	   * @returns {Function} Returns the new throttled function.
	   * @example
	   *
	   * var throttled = _.throttle(updatePosition, 100);
	   * jQuery(window).on('scroll', throttled);
	   */
	  function throttle(func, wait) {
	    var args,
	        result,
	        thisArg,
	        timeoutId,
	        lastCalled = 0;

	    function trailingCall() {
	      lastCalled = new Date;
	      timeoutId = null;
	      result = func.apply(thisArg, args);
	    }
	    return function() {
	      var now = new Date,
	          remaining = wait - (now - lastCalled);

	      args = arguments;
	      thisArg = this;

	      if (remaining <= 0) {
	        clearTimeout(timeoutId);
	        timeoutId = null;
	        lastCalled = now;
	        result = func.apply(thisArg, args);
	      }
	      else if (!timeoutId) {
	        timeoutId = setTimeout(trailingCall, remaining);
	      }
	      return result;
	    };
	  }

	  /**
	   * Creates a function that passes `value` to the `wrapper` function as its
	   * first argument. Additional arguments passed to the function are appended
	   * to those passed to the `wrapper` function. The `wrapper` is executed with
	   * the `this` binding of the created function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Mixed} value The value to wrap.
	   * @param {Function} wrapper The wrapper function.
	   * @returns {Function} Returns the new function.
	   * @example
	   *
	   * var hello = function(name) { return 'hello ' + name; };
	   * hello = _.wrap(hello, function(func) {
	   *   return 'before, ' + func('moe') + ', after';
	   * });
	   * hello();
	   * // => 'before, hello moe, after'
	   */
	  function wrap(value, wrapper) {
	    return function() {
	      var args = [value];
	      push.apply(args, arguments);
	      return wrapper.apply(this, args);
	    };
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
	   * corresponding HTML entities.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {String} string The string to escape.
	   * @returns {String} Returns the escaped string.
	   * @example
	   *
	   * _.escape('Moe, Larry & Curly');
	   * // => 'Moe, Larry &amp; Curly'
	   */
	  function escape(string) {
	    return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar);
	  }

	  /**
	   * This function returns the first argument passed to it.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Mixed} value Any value.
	   * @returns {Mixed} Returns `value`.
	   * @example
	   *
	   * var moe = { 'name': 'moe' };
	   * moe === _.identity(moe);
	   * // => true
	   */
	  function identity(value) {
	    return value;
	  }

	  /**
	   * Adds functions properties of `object` to the `lodash` function and chainable
	   * wrapper.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Object} object The object of function properties to add to `lodash`.
	   * @example
	   *
	   * _.mixin({
	   *   'capitalize': function(string) {
	   *     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	   *   }
	   * });
	   *
	   * _.capitalize('moe');
	   * // => 'Moe'
	   *
	   * _('moe').capitalize();
	   * // => 'Moe'
	   */
	  function mixin(object) {
	    forEach(functions(object), function(methodName) {
	      var func = lodash[methodName] = object[methodName];

	      lodash.prototype[methodName] = function() {
	        var args = [this.__wrapped__];
	        push.apply(args, arguments);
	        return new lodash(func.apply(lodash, args));
	      };
	    });
	  }

	  /**
	   * Reverts the '_' variable to its previous value and returns a reference to
	   * the `lodash` function.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @returns {Function} Returns the `lodash` function.
	   * @example
	   *
	   * var lodash = _.noConflict();
	   */
	  function noConflict() {
	    window._ = oldDash;
	    return this;
	  }

	  /**
	   * Produces a random number between `min` and `max` (inclusive). If only one
	   * argument is passed, a number between `0` and the given number will be returned.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Number} [min=0] The minimum possible value.
	   * @param {Number} [max=1] The maximum possible value.
	   * @returns {Number} Returns a random number.
	   * @example
	   *
	   * _.random(0, 5);
	   * // => a number between 0 and 5
	   *
	   * _.random(5);
	   * // => also a number between 0 and 5
	   */
	  function random(min, max) {
	    if (min == null && max == null) {
	      max = 1;
	    }
	    min = +min || 0;
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + floor(nativeRandom() * ((+max || 0) - min + 1));
	  }

	  /**
	   * Resolves the value of `property` on `object`. If `property` is a function,
	   * it will be invoked and its result returned, else the property value is
	   * returned. If `object` is falsey, then `null` is returned.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Object} object The object to inspect.
	   * @param {String} property The property to get the value of.
	   * @returns {Mixed} Returns the resolved value.
	   * @example
	   *
	   * var object = {
	   *   'cheese': 'crumpets',
	   *   'stuff': function() {
	   *     return 'nonsense';
	   *   }
	   * };
	   *
	   * _.result(object, 'cheese');
	   * // => 'crumpets'
	   *
	   * _.result(object, 'stuff');
	   * // => 'nonsense'
	   */
	  function result(object, property) {
	    var value = object ? object[property] : undefined;
	    return isFunction(value) ? object[property]() : value;
	  }

	  /**
	   * A micro-templating method that handles arbitrary delimiters, preserves
	   * whitespace, and correctly escapes quotes within interpolated code.
	   *
	   * Note: In the development build, `_.template` utilizes sourceURLs for easier
	   * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
	   *
	   * Note: Lo-Dash may be used in Chrome extensions by either creating a `lodash csp`
	   * build and using precompiled templates, or loading Lo-Dash in a sandbox.
	   *
	   * For more information on precompiling templates see:
	   * http://lodash.com/#custom-builds
	   *
	   * For more information on Chrome extension sandboxes see:
	   * http://developer.chrome.com/stable/extensions/sandboxingEval.html
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {String} text The template text.
	   * @param {Obect} data The data object used to populate the text.
	   * @param {Object} options The options object.
	   *  escape - The "escape" delimiter regexp.
	   *  evaluate - The "evaluate" delimiter regexp.
	   *  interpolate - The "interpolate" delimiter regexp.
	   *  sourceURL - The sourceURL of the template's compiled source.
	   *  variable - The data object variable name.
	   *
	   * @returns {Function|String} Returns a compiled function when no `data` object
	   *  is given, else it returns the interpolated text.
	   * @example
	   *
	   * // using a compiled template
	   * var compiled = _.template('hello <%= name %>');
	   * compiled({ 'name': 'moe' });
	   * // => 'hello moe'
	   *
	   * var list = '<% _.forEach(people, function(name) { %><li><%= name %></li><% }); %>';
	   * _.template(list, { 'people': ['moe', 'larry'] });
	   * // => '<li>moe</li><li>larry</li>'
	   *
	   * // using the "escape" delimiter to escape HTML in data property values
	   * _.template('<b><%- value %></b>', { 'value': '<script>' });
	   * // => '<b>&lt;script&gt;</b>'
	   *
	   * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
	   * _.template('hello ${ name }', { 'name': 'curly' });
	   * // => 'hello curly'
	   *
	   * // using the internal `print` function in "evaluate" delimiters
	   * _.template('<% print("hello " + epithet); %>!', { 'epithet': 'stooge' });
	   * // => 'hello stooge!'
	   *
	   * // using custom template delimiters
	   * _.templateSettings = {
	   *   'interpolate': /{{([\s\S]+?)}}/g
	   * };
	   *
	   * _.template('hello {{ name }}!', { 'name': 'mustache' });
	   * // => 'hello mustache!'
	   *
	   * // using the `sourceURL` option to specify a custom sourceURL for the template
	   * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
	   * compiled(data);
	   * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	   *
	   * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	   * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
	   * compiled.source;
	   * // => function(data) {
	   *   var __t, __p = '', __e = _.escape;
	   *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
	   *   return __p;
	   * }
	   *
	   * // using the `source` property to inline compiled templates for meaningful
	   * // line numbers in error messages and a stack trace
	   * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	   *   var JST = {\
	   *     "main": ' + _.template(mainText).source + '\
	   *   };\
	   * ');
	   */
	  function template(text, data, options) {
	    // based on John Resig's `tmpl` implementation
	    // http://ejohn.org/blog/javascript-micro-templating/
	    // and Laura Doktorova's doT.js
	    // https://github.com/olado/doT
	    var settings = lodash.templateSettings;
	    text || (text = '');

	    // avoid missing dependencies when `iteratorTemplate` is not defined
	    options = defaults({}, options, settings);

	    var imports = defaults({}, options.imports, settings.imports),
	        importsKeys = keys(imports),
	        importsValues = values(imports);

	    var isEvaluating,
	        index = 0,
	        interpolate = options.interpolate || reNoMatch,
	        source = "__p += '";

	    // compile regexp to match each delimiter
	    var reDelimiters = RegExp(
	      (options.escape || reNoMatch).source + '|' +
	      interpolate.source + '|' +
	      (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	      (options.evaluate || reNoMatch).source + '|$'
	    , 'g');

	    text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	      interpolateValue || (interpolateValue = esTemplateValue);

	      // escape characters that cannot be included in string literals
	      source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	      // replace delimiters with snippets
	      if (escapeValue) {
	        source += "' +\n__e(" + escapeValue + ") +\n'";
	      }
	      if (evaluateValue) {
	        isEvaluating = true;
	        source += "';\n" + evaluateValue + ";\n__p += '";
	      }
	      if (interpolateValue) {
	        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	      }
	      index = offset + match.length;

	      // the JS engine embedded in Adobe products requires returning the `match`
	      // string in order to produce the correct `offset` value
	      return match;
	    });

	    source += "';\n";

	    // if `variable` is not specified and the template contains "evaluate"
	    // delimiters, wrap a with-statement around the generated code to add the
	    // data object to the top of the scope chain
	    var variable = options.variable,
	        hasVariable = variable;

	    if (!hasVariable) {
	      variable = 'obj';
	      source = 'with (' + variable + ') {\n' + source + '\n}\n';
	    }
	    // cleanup code by stripping empty strings
	    source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	      .replace(reEmptyStringMiddle, '$1')
	      .replace(reEmptyStringTrailing, '$1;');

	    // frame code as the function body
	    source = 'function(' + variable + ') {\n' +
	      (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
	      "var __t, __p = '', __e = _.escape" +
	      (isEvaluating
	        ? ', __j = Array.prototype.join;\n' +
	          "function print() { __p += __j.call(arguments, '') }\n"
	        : ';\n'
	      ) +
	      source +
	      'return __p\n}';

	    // Use a sourceURL for easier debugging and wrap in a multi-line comment to
	    // avoid issues with Narwhal, IE conditional compilation, and the JS engine
	    // embedded in Adobe products.
	    // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
	    var sourceURL = '\n/*\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';

	    try {
	      var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
	    } catch(e) {
	      e.source = source;
	      throw e;
	    }
	    if (data) {
	      return result(data);
	    }
	    // provide the compiled function's source via its `toString` method, in
	    // supported environments, or the `source` property as a convenience for
	    // inlining compiled templates during the build process
	    result.source = source;
	    return result;
	  }

	  /**
	   * Executes the `callback` function `n` times, returning an array of the results
	   * of each `callback` execution. The `callback` is bound to `thisArg` and invoked
	   * with one argument; (index).
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Number} n The number of times to execute the callback.
	   * @param {Function} callback The function called per iteration.
	   * @param {Mixed} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of the results of each `callback` execution.
	   * @example
	   *
	   * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
	   * // => [3, 6, 4]
	   *
	   * _.times(3, function(n) { mage.castSpell(n); });
	   * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
	   *
	   * _.times(3, function(n) { this.cast(n); }, mage);
	   * // => also calls `mage.castSpell(n)` three times
	   */
	  function times(n, callback, thisArg) {
	    n = +n || 0;
	    var index = -1,
	        result = Array(n);

	    while (++index < n) {
	      result[index] = callback.call(thisArg, index);
	    }
	    return result;
	  }

	  /**
	   * The opposite of `_.escape`, this method converts the HTML entities
	   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
	   * corresponding characters.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {String} string The string to unescape.
	   * @returns {String} Returns the unescaped string.
	   * @example
	   *
	   * _.unescape('Moe, Larry &amp; Curly');
	   * // => 'Moe, Larry & Curly'
	   */
	  function unescape(string) {
	    return string == null ? '' : (string + '').replace(reEscapedHtml, unescapeHtmlChar);
	  }

	  /**
	   * Generates a unique ID. If `prefix` is passed, the ID will be appended to it.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {String} [prefix] The value to prefix the ID with.
	   * @returns {String} Returns the unique ID.
	   * @example
	   *
	   * _.uniqueId('contact_');
	   * // => 'contact_104'
	   *
	   * _.uniqueId();
	   * // => '105'
	   */
	  function uniqueId(prefix) {
	    var id = ++idCounter;
	    return (prefix == null ? '' : prefix + '') + id;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Invokes `interceptor` with the `value` as the first argument, and then
	   * returns `value`. The purpose of this method is to "tap into" a method chain,
	   * in order to perform operations on intermediate results within the chain.
	   *
	   * @static
	   * @memberOf _
	   * @category Chaining
	   * @param {Mixed} value The value to pass to `interceptor`.
	   * @param {Function} interceptor The function to invoke.
	   * @returns {Mixed} Returns `value`.
	   * @example
	   *
	   * _([1, 2, 3, 4])
	   *  .filter(function(num) { return num % 2 == 0; })
	   *  .tap(alert)
	   *  .map(function(num) { return num * num; })
	   *  .value();
	   * // => // [2, 4] (alerted)
	   * // => [4, 16]
	   */
	  function tap(value, interceptor) {
	    interceptor(value);
	    return value;
	  }

	  /**
	   * Produces the `toString` result of the wrapped value.
	   *
	   * @name toString
	   * @memberOf _
	   * @category Chaining
	   * @returns {String} Returns the string result.
	   * @example
	   *
	   * _([1, 2, 3]).toString();
	   * // => '1,2,3'
	   */
	  function wrapperToString() {
	    return this.__wrapped__ + '';
	  }

	  /**
	   * Extracts the wrapped value.
	   *
	   * @name valueOf
	   * @memberOf _
	   * @alias value
	   * @category Chaining
	   * @returns {Mixed} Returns the wrapped value.
	   * @example
	   *
	   * _([1, 2, 3]).valueOf();
	   * // => [1, 2, 3]
	   */
	  function wrapperValueOf() {
	    return this.__wrapped__;
	  }

	  /*--------------------------------------------------------------------------*/

	  // add functions that return wrapped values when chaining
	  lodash.after = after;
	  lodash.assign = assign;
	  lodash.at = at;
	  lodash.bind = bind;
	  lodash.bindAll = bindAll;
	  lodash.bindKey = bindKey;
	  lodash.compact = compact;
	  lodash.compose = compose;
	  lodash.countBy = countBy;
	  lodash.debounce = debounce;
	  lodash.defaults = defaults;
	  lodash.defer = defer;
	  lodash.delay = delay;
	  lodash.difference = difference;
	  lodash.filter = filter;
	  lodash.flatten = flatten;
	  lodash.forEach = forEach;
	  lodash.forIn = forIn;
	  lodash.forOwn = forOwn;
	  lodash.functions = functions;
	  lodash.groupBy = groupBy;
	  lodash.initial = initial;
	  lodash.intersection = intersection;
	  lodash.invert = invert;
	  lodash.invoke = invoke;
	  lodash.keys = keys;
	  lodash.map = map;
	  lodash.max = max;
	  lodash.memoize = memoize;
	  lodash.merge = merge;
	  lodash.min = min;
	  lodash.object = object;
	  lodash.omit = omit;
	  lodash.once = once;
	  lodash.pairs = pairs;
	  lodash.partial = partial;
	  lodash.partialRight = partialRight;
	  lodash.pick = pick;
	  lodash.pluck = pluck;
	  lodash.range = range;
	  lodash.reject = reject;
	  lodash.rest = rest;
	  lodash.shuffle = shuffle;
	  lodash.sortBy = sortBy;
	  lodash.tap = tap;
	  lodash.throttle = throttle;
	  lodash.times = times;
	  lodash.toArray = toArray;
	  lodash.union = union;
	  lodash.uniq = uniq;
	  lodash.values = values;
	  lodash.where = where;
	  lodash.without = without;
	  lodash.wrap = wrap;
	  lodash.zip = zip;

	  // add aliases
	  lodash.collect = map;
	  lodash.drop = rest;
	  lodash.each = forEach;
	  lodash.extend = assign;
	  lodash.methods = functions;
	  lodash.select = filter;
	  lodash.tail = rest;
	  lodash.unique = uniq;

	  // add functions to `lodash.prototype`
	  mixin(lodash);

	  /*--------------------------------------------------------------------------*/

	  // add functions that return unwrapped values when chaining
	  lodash.clone = clone;
	  lodash.cloneDeep = cloneDeep;
	  lodash.contains = contains;
	  lodash.escape = escape;
	  lodash.every = every;
	  lodash.find = find;
	  lodash.has = has;
	  lodash.identity = identity;
	  lodash.indexOf = indexOf;
	  lodash.isArguments = isArguments;
	  lodash.isArray = isArray;
	  lodash.isBoolean = isBoolean;
	  lodash.isDate = isDate;
	  lodash.isElement = isElement;
	  lodash.isEmpty = isEmpty;
	  lodash.isEqual = isEqual;
	  lodash.isFinite = isFinite;
	  lodash.isFunction = isFunction;
	  lodash.isNaN = isNaN;
	  lodash.isNull = isNull;
	  lodash.isNumber = isNumber;
	  lodash.isObject = isObject;
	  lodash.isPlainObject = isPlainObject;
	  lodash.isRegExp = isRegExp;
	  lodash.isString = isString;
	  lodash.isUndefined = isUndefined;
	  lodash.lastIndexOf = lastIndexOf;
	  lodash.mixin = mixin;
	  lodash.noConflict = noConflict;
	  lodash.random = random;
	  lodash.reduce = reduce;
	  lodash.reduceRight = reduceRight;
	  lodash.result = result;
	  lodash.size = size;
	  lodash.some = some;
	  lodash.sortedIndex = sortedIndex;
	  lodash.template = template;
	  lodash.unescape = unescape;
	  lodash.uniqueId = uniqueId;

	  // add aliases
	  lodash.all = every;
	  lodash.any = some;
	  lodash.detect = find;
	  lodash.foldl = reduce;
	  lodash.foldr = reduceRight;
	  lodash.include = contains;
	  lodash.inject = reduce;

	  forOwn(lodash, function(func, methodName) {
	    if (!lodash.prototype[methodName]) {
	      lodash.prototype[methodName] = function() {
	        var args = [this.__wrapped__];
	        push.apply(args, arguments);
	        return func.apply(lodash, args);
	      };
	    }
	  });

	  /*--------------------------------------------------------------------------*/

	  // add functions capable of returning wrapped and unwrapped values when chaining
	  lodash.first = first;
	  lodash.last = last;

	  // add aliases
	  lodash.take = first;
	  lodash.head = first;

	  forOwn(lodash, function(func, methodName) {
	    if (!lodash.prototype[methodName]) {
	      lodash.prototype[methodName]= function(callback, thisArg) {
	        var result = func(this.__wrapped__, callback, thisArg);
	        return callback == null || (thisArg && typeof callback != 'function')
	          ? result
	          : new lodash(result);
	      };
	    }
	  });

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The semantic version number.
	   *
	   * @static
	   * @memberOf _
	   * @type String
	   */
	  lodash.VERSION = '1.0.2';

	  // add "Chaining" functions to the wrapper
	  lodash.prototype.toString = wrapperToString;
	  lodash.prototype.value = wrapperValueOf;
	  lodash.prototype.valueOf = wrapperValueOf;

	  // add `Array` functions that return unwrapped values
	  each(['join', 'pop', 'shift'], function(methodName) {
	    var func = arrayRef[methodName];
	    lodash.prototype[methodName] = function() {
	      return func.apply(this.__wrapped__, arguments);
	    };
	  });

	  // add `Array` functions that return the wrapped value
	  each(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
	    var func = arrayRef[methodName];
	    lodash.prototype[methodName] = function() {
	      func.apply(this.__wrapped__, arguments);
	      return this;
	    };
	  });

	  // add `Array` functions that return new wrapped values
	  each(['concat', 'slice', 'splice'], function(methodName) {
	    var func = arrayRef[methodName];
	    lodash.prototype[methodName] = function() {
	      return new lodash(func.apply(this.__wrapped__, arguments));
	    };
	  });

	  // avoid array-like object bugs with `Array#shift` and `Array#splice`
	  // in Firefox < 10 and IE < 9
	  if (hasObjectSpliceBug) {
	    each(['pop', 'shift', 'splice'], function(methodName) {
	      var func = arrayRef[methodName],
	          isSplice = methodName == 'splice';

	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__,
	            result = func.apply(value, arguments);

	        if (value.length === 0) {
	          delete value[0];
	        }
	        return isSplice ? new lodash(result) : result;
	      };
	    });
	  }

	  /*--------------------------------------------------------------------------*/

	  // expose Lo-Dash
	  // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
	  if (true) {
	    // Expose Lo-Dash to the global object even when an AMD loader is present in
	    // case Lo-Dash was injected by a third-party script and not intended to be
	    // loaded as a module. The global assignment can be reverted in the Lo-Dash
	    // module via its `noConflict()` method.
	    window._ = lodash;

	    // define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return lodash;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // check for `exports` after `define` in case a build optimizer adds an `exports` object
	  else if (freeExports) {
	    // in Node.js or RingoJS v0.8.0+
	    if (freeModule) {
	      (freeModule.exports = lodash)._ = lodash;
	    }
	    // in Narwhal or RingoJS v0.7.0-
	    else {
	      freeExports._ = lodash;
	    }
	  }
	  else {
	    // in a browser or Rhino
	    window._ = lodash;
	  }
	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(142)(module), (function() { return this; }()), __webpack_require__(143).setImmediate))

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(144);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(145)))

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ })
/******/ ]);