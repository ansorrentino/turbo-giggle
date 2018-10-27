(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-examples-examples-module"],{

/***/ "./node_modules/@ngrx/entity/fesm5/entity.js":
/*!***************************************************!*\
  !*** ./node_modules/@ngrx/entity/fesm5/entity.js ***!
  \***************************************************/
/*! exports provided: createEntityAdapter, Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license NgRx 6.1.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */



function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}

function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, function (ids, entities) {
            return ids.map(function (id) { return entities[id]; });
        });
        var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
            };
        }
        return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
        };
    }
    return { getSelectors: getSelectors };
}

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var DidMutate;
(function (DidMutate) {
    DidMutate[DidMutate["EntitiesOnly"] = 0] = "EntitiesOnly";
    DidMutate[DidMutate["Both"] = 1] = "Both";
    DidMutate[DidMutate["None"] = 2] = "None";
})(DidMutate || (DidMutate = {}));
function createStateOperator(mutator) {
    return function operation(arg, state) {
        var clonedEntityState = {
            ids: __spread(state.ids),
            entities: __assign({}, state.entities),
        };
        var didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return __assign({}, state, { entities: clonedEntityState.entities });
        }
        return state;
    };
}

function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
    }
    return key;
}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    function addManyMutably(entities, state) {
        var didMutate = false;
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
        var e_1, _a;
    }
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = keys
            .filter(function (key) { return key in state.entities; })
            .map(function (key) { return delete state.entities[key]; }).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    function takeNewKey(keys, update, state) {
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        updates = updates.filter(function (update) { return update.id in state.entities; });
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var added = [];
        var updated = [];
        try {
            for (var entities_2 = __values(entities), entities_2_1 = entities_2.next(); !entities_2_1.done; entities_2_1 = entities_2.next()) {
                var entity = entities_2_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (entities_2_1 && !entities_2_1.done && (_a = entities_2.return)) _a.call(entities_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
        var e_2, _a;
    }
    return {
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(addAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
    };
}

var __values$1 = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createSortedStateAdapter(selectId, sort) {
    var _a = createUnsortedStateAdapter(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newModels, state) {
        var models = newModels.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        var didMutateIds = updates.filter(function (update) { return takeUpdatedModel(models, update, state); }).length >
            0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            var originalIds_1 = state.ids;
            var updatedIndexes_1 = [];
            state.ids = state.ids.filter(function (id, index) {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes_1.push(index);
                    return false;
                }
            });
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes_1.every(function (i) { return state.ids[i] === originalIds_1[i]; })) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var added = [];
        var updated = [];
        try {
            for (var entities_1 = __values$1(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
        var e_1, _a;
    }
    function merge(models, state) {
        models.sort(sort);
        var ids = [];
        var i = 0;
        var j = 0;
        while (i < models.length && j < state.ids.length) {
            var model = models[i];
            var modelId = selectIdValue(model, selectId);
            var entityId = state.ids[j];
            var entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach(function (model, i) {
            state.entities[selectId(model)] = model;
        });
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(addAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
    };
}

var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign$1({ sortComparer: false, selectId: function (instance) { return instance.id; } }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return __assign$1({ selectId: selectId,
        sortComparer: sortComparer }, stateFactory, selectorsFactory, stateAdapter);
}

var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    return Dictionary;
}());

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=entity.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/theming/parent/parent.component.scss-theme.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/theming/parent/parent.component.scss-theme.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import '~@angular/material/theming';\r\n\r\n@mixin anms-parent-component-theme($theme) {\r\n  $accent: map-get($theme, accent);\r\n\r\n  anms-parent {\r\n    > .container {\r\n      > .row {\r\n        > .col-md-6 {\r\n          > .example {\r\n            border-color: mat-color($accent);\r\n\r\n            > h1 {\r\n              color: mat-color($accent);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/app/examples/authenticated/authenticated.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/examples/authenticated/authenticated.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h1 class=\"main-heading\">{{ 'anms.examples.auth.title' | translate }}</h1>\r\n      <p>\r\n        {{ 'anms.examples.auth.description1' | translate }}\r\n      </p>\r\n      <p>\r\n        {{ 'anms.examples.auth.description2' | translate }}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/authenticated/authenticated.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/examples/authenticated/authenticated.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/authenticated/authenticated.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/examples/authenticated/authenticated.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticatedComponent = /** @class */ (function () {
    function AuthenticatedComponent() {
    }
    AuthenticatedComponent.prototype.ngOnInit = function () { };
    AuthenticatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-authenticated',
            template: __webpack_require__(/*! ./authenticated.component.html */ "./src/app/examples/authenticated/authenticated.component.html"),
            styles: [__webpack_require__(/*! ./authenticated.component.scss */ "./src/app/examples/authenticated/authenticated.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticatedComponent);
    return AuthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/examples/crud/books.actions.ts":
/*!************************************************!*\
  !*** ./src/app/examples/crud/books.actions.ts ***!
  \************************************************/
/*! exports provided: BookActionTypes, ActionBooksUpsertOne, ActionBooksDeleteOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookActionTypes", function() { return BookActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBooksUpsertOne", function() { return ActionBooksUpsertOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBooksDeleteOne", function() { return ActionBooksDeleteOne; });
var BookActionTypes;
(function (BookActionTypes) {
    BookActionTypes["UPSERT_ONE"] = "[Books] Upsert One";
    BookActionTypes["DELETE_ONE"] = "[Books] Delete One";
})(BookActionTypes || (BookActionTypes = {}));
var ActionBooksUpsertOne = /** @class */ (function () {
    function ActionBooksUpsertOne(payload) {
        this.payload = payload;
        this.type = BookActionTypes.UPSERT_ONE;
    }
    return ActionBooksUpsertOne;
}());

var ActionBooksDeleteOne = /** @class */ (function () {
    function ActionBooksDeleteOne(payload) {
        this.payload = payload;
        this.type = BookActionTypes.DELETE_ONE;
    }
    return ActionBooksDeleteOne;
}());



/***/ }),

/***/ "./src/app/examples/crud/books.effects.ts":
/*!************************************************!*\
  !*** ./src/app/examples/crud/books.effects.ts ***!
  \************************************************/
/*! exports provided: BOOKS_KEY, BooksEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKS_KEY", function() { return BOOKS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksEffects", function() { return BooksEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _books_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books.actions */ "./src/app/examples/crud/books.actions.ts");
/* harmony import */ var _books_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books.selectors */ "./src/app/examples/crud/books.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BOOKS_KEY = 'EXAMPLES.BOOKS';
var BooksEffects = /** @class */ (function () {
    function BooksEffects(actions$, store, localStorageService) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.localStorageService = localStorageService;
        this.persistBooks = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_books_actions__WEBPACK_IMPORTED_MODULE_5__["BookActionTypes"].UPSERT_ONE, _books_actions__WEBPACK_IMPORTED_MODULE_5__["BookActionTypes"].DELETE_ONE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_books_selectors__WEBPACK_IMPORTED_MODULE_6__["selectBooks"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_a) {
            var actions = _a[0], booksState = _a[1];
            return _this.localStorageService.setItem(BOOKS_KEY, booksState);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], BooksEffects.prototype, "persistBooks", void 0);
    BooksEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], BooksEffects);
    return BooksEffects;
}());



/***/ }),

/***/ "./src/app/examples/crud/books.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/examples/crud/books.reducer.ts ***!
  \************************************************/
/*! exports provided: sortByTitle, bookAdapter, initialState, bookReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByTitle", function() { return sortByTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookAdapter", function() { return bookAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookReducer", function() { return bookReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _books_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.actions */ "./src/app/examples/crud/books.actions.ts");


function sortByTitle(a, b) {
    return a.title.localeCompare(b.title);
}
var bookAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: sortByTitle
});
var initialState = bookAdapter.getInitialState({
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            title: 'Reactive Programming with Angular and ngrx',
            author: 'Oren Farhi',
            description: 'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'
        }
    }
});
function bookReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _books_actions__WEBPACK_IMPORTED_MODULE_1__["BookActionTypes"].UPSERT_ONE:
            return bookAdapter.upsertOne(action.payload.book, state);
        case _books_actions__WEBPACK_IMPORTED_MODULE_1__["BookActionTypes"].DELETE_ONE:
            return bookAdapter.removeOne(action.payload.id, state);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/examples/crud/books.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/examples/crud/books.selectors.ts ***!
  \**************************************************/
/*! exports provided: selectBooks, selectAllBooks, selectBooksEntities, selectSelectedBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBooks", function() { return selectBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllBooks", function() { return selectAllBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBooksEntities", function() { return selectBooksEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedBook", function() { return selectSelectedBook; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _examples_examples_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../examples/examples.state */ "./src/app/examples/examples.state.ts");
/* harmony import */ var _books_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books.reducer */ "./src/app/examples/crud/books.reducer.ts");




var _a = _books_reducer__WEBPACK_IMPORTED_MODULE_3__["bookAdapter"].getSelectors(), selectEntities = _a.selectEntities, selectAll = _a.selectAll;
var selectBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_examples_examples_state__WEBPACK_IMPORTED_MODULE_2__["selectExamples"], function (state) { return state.books; });
var selectAllBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBooks, selectAll);
var selectBooksEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBooks, selectEntities);
var selectSelectedBook = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBooksEntities, _app_core__WEBPACK_IMPORTED_MODULE_1__["selectRouterState"], function (entities, params) { return params && entities[params.state.params.id]; });


/***/ }),

/***/ "./src/app/examples/crud/components/crud.component.html":
/*!**************************************************************!*\
  !*** ./src/app/examples/crud/components/crud.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{ 'anms.examples.crud.title' | translate }}</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h2>{{ 'anms.examples.crud.subtitle1' | translate }}</h2>\r\n      <mat-card *ngFor=\"let book of books$ | async\" [ngClass]=\"routeAnimationsElements\"\r\n        [routerLink]=\"['/examples/crud', book.id]\" (click)=select() data-testid=\"crud-item\">\r\n        <h3 data-testid=\"item-title\">{{book.title}}</h3>\r\n        <small>{{book.author}}</small>\r\n      </mat-card>\r\n      <p *ngIf=\"(books$ | async)?.length === 0\">{{'anms.examples.crud.empty' | translate}}</p>\r\n      <button type=\"button\" mat-fab color=\"primary\" class=\"add\" [ngClass]=\"routeAnimationsElements\"\r\n        *ngIf=\"!isEditing\" (click)=\"addNew(bookForm)\" data-testid=\"add-crud\">\r\n        <fa-icon icon=\"plus\"></fa-icon>\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <span class=\"d-flex justify-content-between\">\r\n        <h2>{{ 'anms.examples.crud.subtitle2' | translate }}</h2>\r\n        <span class=\"d-flex justify-content-end\">\r\n          <span *ngIf=\"selectedBook\">\r\n            <button mat-icon-button color=\"accent\" *ngIf=\"!isEditing\" data-testid=\"edit-crud\">\r\n              <fa-icon icon=\"edit\" (click)=\"edit()\" [matTooltip]=\"'anms.examples.crud.tooltip.edit' | translate\"\r\n                matTooltipPosition=\"above\">\r\n              </fa-icon>\r\n            </button>\r\n            <button mat-icon-button color=\"warn\" (click)=\"delete()\" data-testid=\"delete-crud\">\r\n              <fa-icon icon=\"trash\" [matTooltip]=\"'anms.examples.crud.tooltip.delete' | translate\"\r\n                matTooltipPosition=\"above\">\r\n              </fa-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"deselect()\">\r\n              <fa-icon icon=\"times\" [matTooltip]=\"'anms.examples.crud.tooltip.deselect' | translate\"\r\n                matTooltipPosition=\"above\">\r\n              </fa-icon>\r\n            </button>\r\n          </span>\r\n        </span>\r\n      </span>\r\n\r\n      <form #bookForm=\"ngForm\" [formGroup]=\"bookFormGroup\" [style.display]=\"isEditing ? 'block' : 'none'\"\r\n        [ngClass]=\"routeAnimationsElements\">\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col\">\r\n            <input matInput placeholder=\"{{ 'anms.examples.crud.placeholder1' | translate }}\"\r\n              formControlName=\"title\" required autofocus>\r\n            <mat-error *ngIf=\"bookFormGroup.get('title').invalid\" data-testid=\"error-title-crud\">\r\n              {{ 'anms.examples.crud.placeholder1' | translate }}\r\n              {{ 'anms.examples.crud.error' | translate }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col\">\r\n            <input matInput placeholder=\"{{ 'anms.examples.crud.placeholder2' | translate }}\"\r\n              formControlName=\"author\" required>\r\n            <mat-error *ngIf=\"bookFormGroup.get('author').hasError('required')\" data-testid=\"error-author-crud\">\r\n              {{ 'anms.examples.crud.placeholder2' | translate }}\r\n              {{ 'anms.examples.crud.error' | translate }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col\">\r\n            <textarea matInput placeholder=\"{{ 'anms.examples.crud.placeholder3' | translate }}\"\r\n              formControlName=\"description\" rows=\"5\"></textarea>\r\n            <mat-error *ngIf=\"bookFormGroup.get('description').invalid\">\r\n              {{ 'anms.examples.crud.placeholder1' | translate }}\r\n              {{ 'anms.examples.crud.error' | translate }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 d-flex justify-content-between\">\r\n            <button (click)=\"save()\" mat-raised-button color=\"primary\">\r\n              {{'anms.examples.crud.save' | translate }}\r\n            </button>\r\n            <button (click)=\"cancelEditing()\" mat-raised-button>\r\n              {{'anms.examples.crud.cancel' | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <div [ngClass]=\"routeAnimationsElements\" *ngIf=\"!isEditing && selectedBook\">\r\n        <h3>{{ selectedBook.title }}</h3>\r\n        <mat-divider></mat-divider>\r\n        <p>{{ selectedBook.description }}</p>\r\n        <i>{{ selectedBook.author }}</i>\r\n      </div>\r\n\r\n      <p *ngIf=\"!isEditing && !selectedBook\" [ngClass]=\"routeAnimationsElements\">\r\n        {{'anms.examples.crud.text' | translate }} <code>@ngrx/entity</code>.\r\n      </p>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/crud/components/crud.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/examples/crud/components/crud.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0 0 20px 0;\n  text-transform: uppercase; }\n\nmat-card {\n  margin: 0 0 10px 0;\n  cursor: pointer; }\n\n.mat-fab .fa-icon {\n  position: relative;\n  top: 4px; }\n\n.add {\n  margin: 20px auto 0;\n  display: block; }\n\n.col-md-6 {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/examples/crud/components/crud.component.ts":
/*!************************************************************!*\
  !*** ./src/app/examples/crud/components/crud.component.ts ***!
  \************************************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _books_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../books.actions */ "./src/app/examples/crud/books.actions.ts");
/* harmony import */ var _books_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../books.selectors */ "./src/app/examples/crud/books.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CrudComponent = /** @class */ (function () {
    function CrudComponent(store, fb, router) {
        this.store = store;
        this.fb = fb;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_7__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.bookFormGroup = this.fb.group(CrudComponent_1.createBook());
    }
    CrudComponent_1 = CrudComponent;
    CrudComponent.createBook = function () {
        return {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
            title: '',
            author: '',
            description: ''
        };
    };
    CrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_books_selectors__WEBPACK_IMPORTED_MODULE_9__["selectAllBooks"]));
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_books_selectors__WEBPACK_IMPORTED_MODULE_9__["selectSelectedBook"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (book) { return (_this.selectedBook = book); });
    };
    CrudComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    CrudComponent.prototype.select = function (bookId) {
        this.isEditing = false;
        this.router.navigate(['examples/crud', bookId]);
    };
    CrudComponent.prototype.deselect = function () {
        this.isEditing = false;
        this.router.navigate(['examples/crud']);
    };
    CrudComponent.prototype.edit = function () {
        this.isEditing = true;
        this.bookFormGroup.setValue(this.selectedBook);
    };
    CrudComponent.prototype.addNew = function (bookForm) {
        bookForm.resetForm();
        this.bookFormGroup.reset();
        this.bookFormGroup.setValue(CrudComponent_1.createBook());
        this.isEditing = true;
    };
    CrudComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
    };
    CrudComponent.prototype.delete = function () {
        this.store.dispatch(new _books_actions__WEBPACK_IMPORTED_MODULE_8__["ActionBooksDeleteOne"]({ id: this.selectedBook.id }));
        this.isEditing = false;
        this.router.navigate(['examples/crud']);
    };
    CrudComponent.prototype.save = function () {
        if (this.bookFormGroup.valid) {
            var book = this.bookFormGroup.value;
            this.store.dispatch(new _books_actions__WEBPACK_IMPORTED_MODULE_8__["ActionBooksUpsertOne"]({ book: book }));
            this.isEditing = false;
            this.router.navigate(['examples/crud', book.id]);
        }
    };
    var CrudComponent_1;
    CrudComponent = CrudComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'anms-crud',
            template: __webpack_require__(/*! ./crud.component.html */ "./src/app/examples/crud/components/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.scss */ "./src/app/examples/crud/components/crud.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/examples/examples-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesRoutingModule", function() { return ExamplesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples/examples.component.ts");
/* harmony import */ var _theming_parent_parent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theming/parent/parent.component */ "./src/app/examples/theming/parent/parent.component.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/examples/authenticated/authenticated.component.ts");
/* harmony import */ var _todos_components_todos_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos/components/todos-container.component */ "./src/app/examples/todos/components/todos-container.component.ts");
/* harmony import */ var _stock_market_components_stock_market_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-market/components/stock-market-container.component */ "./src/app/examples/stock-market/components/stock-market-container.component.ts");
/* harmony import */ var _crud_components_crud_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud/components/crud.component */ "./src/app/examples/crud/components/crud.component.ts");
/* harmony import */ var _form_components_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/components/form.component */ "./src/app/examples/form/components/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__["ExamplesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'todos',
                pathMatch: 'full'
            },
            {
                path: 'todos',
                component: _todos_components_todos_container_component__WEBPACK_IMPORTED_MODULE_6__["TodosContainerComponent"],
                data: { title: 'anms.examples.menu.todos' }
            },
            {
                path: 'stock-market',
                component: _stock_market_components_stock_market_container_component__WEBPACK_IMPORTED_MODULE_7__["StockMarketContainerComponent"],
                data: { title: 'anms.examples.menu.stocks' }
            },
            {
                path: 'theming',
                component: _theming_parent_parent_component__WEBPACK_IMPORTED_MODULE_4__["ParentComponent"],
                data: { title: 'anms.examples.menu.theming' }
            },
            {
                path: 'crud',
                component: _crud_components_crud_component__WEBPACK_IMPORTED_MODULE_8__["CrudComponent"],
                data: { title: 'anms.examples.menu.crud' }
            },
            {
                path: 'crud/:id',
                component: _crud_components_crud_component__WEBPACK_IMPORTED_MODULE_8__["CrudComponent"],
                data: { title: 'anms.examples.menu.crud' }
            },
            {
                path: 'form',
                component: _form_components_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                data: { title: 'anms.examples.menu.form' }
            },
            {
                path: 'authenticated',
                component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_5__["AuthenticatedComponent"],
                canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
                data: { title: 'anms.examples.menu.auth' }
            }
        ]
    }
];
var ExamplesRoutingModule = /** @class */ (function () {
    function ExamplesRoutingModule() {
    }
    ExamplesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExamplesRoutingModule);
    return ExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _examples_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples.state */ "./src/app/examples/examples.state.ts");
/* harmony import */ var _examples_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples-routing.module */ "./src/app/examples/examples-routing.module.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples/examples.component.ts");
/* harmony import */ var _todos_components_todos_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todos/components/todos-container.component */ "./src/app/examples/todos/components/todos-container.component.ts");
/* harmony import */ var _todos_todos_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todos/todos.effects */ "./src/app/examples/todos/todos.effects.ts");
/* harmony import */ var _stock_market_components_stock_market_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock-market/components/stock-market-container.component */ "./src/app/examples/stock-market/components/stock-market-container.component.ts");
/* harmony import */ var _stock_market_stock_market_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stock-market/stock-market.effects */ "./src/app/examples/stock-market/stock-market.effects.ts");
/* harmony import */ var _stock_market_stock_market_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stock-market/stock-market.service */ "./src/app/examples/stock-market/stock-market.service.ts");
/* harmony import */ var _theming_parent_parent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theming/parent/parent.component */ "./src/app/examples/theming/parent/parent.component.ts");
/* harmony import */ var _theming_child_child_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theming/child/child.component */ "./src/app/examples/theming/child/child.component.ts");
/* harmony import */ var _crud_components_crud_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./crud/components/crud.component */ "./src/app/examples/crud/components/crud.component.ts");
/* harmony import */ var _crud_books_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./crud/books.effects */ "./src/app/examples/crud/books.effects.ts");
/* harmony import */ var _form_components_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/components/form.component */ "./src/app/examples/form/components/form.component.ts");
/* harmony import */ var _form_form_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/form.effects */ "./src/app/examples/form/form.effects.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/examples/authenticated/authenticated.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _examples_routing_module__WEBPACK_IMPORTED_MODULE_9__["ExamplesRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_examples_state__WEBPACK_IMPORTED_MODULE_8__["FEATURE_NAME"], _examples_state__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                    },
                    isolate: true
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([
                    _todos_todos_effects__WEBPACK_IMPORTED_MODULE_12__["TodosEffects"],
                    _stock_market_stock_market_effects__WEBPACK_IMPORTED_MODULE_14__["StockMarketEffects"],
                    _crud_books_effects__WEBPACK_IMPORTED_MODULE_19__["BooksEffects"],
                    _form_form_effects__WEBPACK_IMPORTED_MODULE_21__["FormEffects"]
                ])
            ],
            declarations: [
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_10__["ExamplesComponent"],
                _todos_components_todos_container_component__WEBPACK_IMPORTED_MODULE_11__["TodosContainerComponent"],
                _stock_market_components_stock_market_container_component__WEBPACK_IMPORTED_MODULE_13__["StockMarketContainerComponent"],
                _theming_parent_parent_component__WEBPACK_IMPORTED_MODULE_16__["ParentComponent"],
                _theming_child_child_component__WEBPACK_IMPORTED_MODULE_17__["ChildComponent"],
                _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_22__["AuthenticatedComponent"],
                _crud_components_crud_component__WEBPACK_IMPORTED_MODULE_18__["CrudComponent"],
                _form_components_form_component__WEBPACK_IMPORTED_MODULE_20__["FormComponent"]
            ],
            providers: [_stock_market_stock_market_service__WEBPACK_IMPORTED_MODULE_15__["StockMarketService"]]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesModule);
    return ExamplesModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].i18nPrefix + "/assets/i18n/examples/", '.json');
}


/***/ }),

/***/ "./src/app/examples/examples.state.ts":
/*!********************************************!*\
  !*** ./src/app/examples/examples.state.ts ***!
  \********************************************/
/*! exports provided: FEATURE_NAME, selectExamples, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_NAME", function() { return FEATURE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectExamples", function() { return selectExamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todos_todos_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/todos.reducer */ "./src/app/examples/todos/todos.reducer.ts");
/* harmony import */ var _stock_market_stock_market_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-market/stock-market.reducer */ "./src/app/examples/stock-market/stock-market.reducer.ts");
/* harmony import */ var _crud_books_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud/books.reducer */ "./src/app/examples/crud/books.reducer.ts");
/* harmony import */ var _form_form_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.reducer */ "./src/app/examples/form/form.reducer.ts");





var FEATURE_NAME = 'examples';
var selectExamples = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(FEATURE_NAME);
var reducers = {
    todos: _todos_todos_reducer__WEBPACK_IMPORTED_MODULE_1__["todosReducer"],
    stocks: _stock_market_stock_market_reducer__WEBPACK_IMPORTED_MODULE_2__["stockMarketReducer"],
    books: _crud_books_reducer__WEBPACK_IMPORTED_MODULE_3__["bookReducer"],
    form: _form_form_reducer__WEBPACK_IMPORTED_MODULE_4__["formReducer"]
};


/***/ }),

/***/ "./src/app/examples/examples/examples.component.html":
/*!***********************************************************!*\
  !*** ./src/app/examples/examples/examples.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar class=\"d-none d-sm-flex\">\r\n  <a mat-tab-link\r\n     *ngFor=\"let e of examples\"\r\n     [routerLink]=\"e.link\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]=\"rla.isActive\"\r\n     [disabled]=\"e.auth && !(isAuthenticated$ | async)\">\r\n    {{e.label | translate}}\r\n  </a>\r\n</nav>\r\n\r\n<nav class=\"nav-responsive d-sm-none d-flex justify-content-center\">\r\n    <mat-select [placeholder]=\"'anms.examples' | translate\" [value]=\"'todos'\">\r\n      <mat-option *ngFor=\"let e of examples\"\r\n        [value]=\"e\"\r\n        [routerLink]=\"e.link\"\r\n        [disabled]=\"e.auth && !(isAuthenticated$ | async)\">\r\n          {{e.label | translate}}\r\n      </mat-option>\r\n    </mat-select>\r\n</nav>\r\n\r\n\r\n\r\n<div [@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/examples/examples.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/examples/examples/examples.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  margin-bottom: 20px; }\n  nav .mat-tab-link {\n    min-width: 120px;\n    padding: 0 15px; }\n  @media (max-width: 768px) {\n    nav .mat-tab-link {\n      min-width: 0; } }\n"

/***/ }),

/***/ "./src/app/examples/examples/examples.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/examples/examples/examples.component.ts ***!
  \*********************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/settings */ "./src/app/settings/index.ts");
/* harmony import */ var _app_core_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/auth/auth.selectors */ "./src/app/core/auth/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent(store, router, titleService, translate) {
        this.store = store;
        this.router = router;
        this.titleService = titleService;
        this.translate = translate;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.examples = [
            { link: 'todos', label: 'anms.menu.clienti' },
            { link: 'stock-market', label: 'anms.menu.fornitori' },
            { link: 'theming', label: 'anms.menu.agenti' },
            { link: 'crud', label: 'anms.menu.articoli' },
            { link: 'form', label: 'anms.menu.piano.conti' },
            { link: 'form', label: 'anms.menu.causali.contab' },
            { link: 'form', label: 'anms.menu.pagamenti' },
            { link: 'form', label: 'anms.menu.piano.conti' },
            { link: 'form', label: 'anms.menu.voci.iva' },
            { link: 'authenticated', label: 'anms.examples.menu.auth', auth: true }
        ];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        this.translate.setDefaultLang('en');
        this.subscribeToSettings();
        this.subscribeToRouterEvents();
        this.isAuthenticated$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_app_core_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_8__["selectAuth"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) { return auth.isAuthenticated; }));
    };
    ExamplesComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    ExamplesComponent.prototype.subscribeToSettings = function () {
        var _this = this;
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_app_settings__WEBPACK_IMPORTED_MODULE_7__["selectSettings"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (settings) {
            return _this.translate.use(settings.language);
        });
    };
    ExamplesComponent.prototype.subscribeToRouterEvents = function () {
        var _this = this;
        this.titleService.setTitle(this.router.routerState.snapshot.root, this.translate);
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event.snapshot; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (snapshot) {
            return _this.titleService.setTitle(snapshot, _this.translate);
        });
    };
    ExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'anms-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/examples/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/examples/examples/examples.component.scss")],
            animations: [_app_core__WEBPACK_IMPORTED_MODULE_6__["routeAnimations"]]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_6__["TitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/examples/form/components/form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/examples/form/components/form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1 class=\"main-heading\">{{ 'anms.examples.form.title' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <mat-card [ngClass]=\"routeAnimationsElements\">\r\n          <span class=\"d-flex justify-content-between align-items-baseline\">\r\n            <h2>{{ 'anms.examples.form.subtitle1' | translate }}</h2>\r\n            <mat-slide-toggle formControlName=\"autosave\">\r\n              {{ 'anms.examples.form.autosave' | translate }}\r\n            </mat-slide-toggle>\r\n          </span>\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\r\n              <input matInput placeholder=\"{{ 'anms.examples.form.placeholder1' | translate }}\"\r\n                formControlName=\"username\">\r\n              <mat-error *ngIf=\"form.get('username').invalid\">\r\n                {{ 'anms.examples.form.placeholder1' | translate }}\r\n                {{ 'anms.examples.form.error1' | translate }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\r\n              <input matInput type=\"password\" placeholder=\"{{ 'anms.examples.form.placeholder2' | translate }}\"\r\n                formControlName=\"password\">\r\n              <mat-error *ngIf=\"form.get('password').invalid\">\r\n                {{ 'anms.examples.form.placeholder2' | translate }}\r\n                {{ 'anms.examples.form.error1' | translate }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\r\n              <input matInput placeholder=\"{{ 'anms.examples.form.placeholder3' | translate }}\"\r\n                formControlName=\"email\" type=\"email\">\r\n              <mat-error *ngIf=\"form.get('email').hasError('required')\">\r\n                {{ 'anms.examples.form.placeholder3' | translate }}\r\n                {{ 'anms.examples.form.error1' | translate }}\r\n              </mat-error>\r\n              <mat-error *ngIf=\"form.get('email').hasError('email')\">\r\n                {{ 'anms.examples.form.placeholder3' | translate }}\r\n                {{ 'anms.examples.form.error2' | translate }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\r\n              <input matInput formControlName=\"birthday\" [matDatepicker]=\"picker\" placeholder=\"{{ 'anms.examples.form.placeholder5' | translate }}\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n              <mat-error *ngIf=\"form.get('birthday').hasError('required')\">\r\n                {{ 'anms.examples.form.placeholder5' | translate }}\r\n                {{ 'anms.examples.form.error1' | translate }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\r\n              <textarea matInput placeholder=\"{{ 'anms.examples.form.placeholder4' | translate }}\"\r\n                formControlName=\"description\" minlength=\"10\" maxlength=\"1000\" cdkTextareaAutosize\r\n                #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"3\" cdkAutosizeMaxRows=\"10\"></textarea>\r\n              <mat-hint align=\"end\">{{form.get('description').value?.length}} /\r\n                1000</mat-hint>\r\n              <mat-error *ngIf=\"form.get('description').hasError('required')\">\r\n                {{ 'anms.examples.form.placeholder4' | translate }}\r\n                {{ 'anms.examples.form.error1' | translate }}\r\n              </mat-error>\r\n              <mat-error *ngIf=\"form.get('description').hasError('minlength')\">\r\n                {{ 'anms.examples.form.placeholder4' | translate }}\r\n                {{ 'anms.examples.form.error3' | translate }} 10\r\n              </mat-error>\r\n              <mat-error *ngIf=\"form.get('description').hasError('maxlength')\">\r\n                {{ 'anms.examples.form.placeholder4' | translate }}\r\n                {{ 'anms.examples.form.error4' | translate }} 1000\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"row\" [ngClass]=\"routeAnimationsElements\">\r\n            <div class=\"col\">\r\n              <label>{{ 'anms.examples.form.text2' | translate }}</label>\r\n              <br>\r\n              <mat-slider thumbLabel tickInterval=\"1\" min=\"1\" max=\"10\" formControlName=\"rating\"></mat-slider>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <mat-checkbox class=\"col\" formControlName=\"requestGift\" [ngClass]=\"routeAnimationsElements\">\r\n              {{ 'anms.examples.form.text1' | translate }}\r\n            </mat-checkbox>\r\n          </div>\r\n          <div class=\"row buttons d-flex justify-content-between pad\">\r\n            <button mat-raised-button color=\"primary\" [ngClass]=\"routeAnimationsElements\">\r\n              {{ 'anms.examples.form.send' | translate }}\r\n            </button>\r\n            <button type=\"button\" mat-raised-button color=\"accent\" [disabled]=\"form.get('autosave').value\"\r\n              [ngClass]=\"routeAnimationsElements\" (click)=\"save()\">\r\n              {{ 'anms.examples.form.save' | translate }}\r\n            </button>\r\n            <button type=\"reset\" mat-raised-button (click)=\"reset()\" [ngClass]=\"routeAnimationsElements\">\r\n              {{ 'anms.examples.form.reset' | translate }}\r\n            </button>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/form/components/form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/examples/form/components/form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0;\n  text-align: center; }\n\nmat-card {\n  margin-bottom: 20px; }\n\nmat-checkbox {\n  margin: 10px 0 20px 0; }\n\nmat-slider {\n  width: 100%; }\n\n.buttons {\n  margin: 20px 0px; }\n"

/***/ }),

/***/ "./src/app/examples/form/components/form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/examples/form/components/form.component.ts ***!
  \************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _form_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form.actions */ "./src/app/examples/form/form.actions.ts");
/* harmony import */ var _form_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form.selectors */ "./src/app/examples/form/form.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FormComponent = /** @class */ (function () {
    function FormComponent(fb, store, translate, snackBar) {
        this.fb = fb;
        this.store = store;
        this.translate = translate;
        this.snackBar = snackBar;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_6__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.form = this.fb.group({
            autosave: false,
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            description: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1000)
                ]
            ],
            requestGift: [''],
            birthday: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rating: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_form_selectors__WEBPACK_IMPORTED_MODULE_9__["selectForm"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (form) { return _this.form.patchValue(form.form); });
        this.form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (form) { return form.autosave; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (form) {
            return _this.store.dispatch(new _form_actions__WEBPACK_IMPORTED_MODULE_8__["ActionFormUpdate"]({ form: form }));
        });
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.form = null;
    };
    FormComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.save();
            this.snackBar.open(this.form.value.requestGift
                ? this.translate.instant('anms.examples.form.text4')
                : this.translate.instant('anms.examples.form.text5'), this.translate.instant('anms.examples.form.text6'), {
                duration: 1000
            });
        }
    };
    FormComponent.prototype.save = function () {
        this.store.dispatch(new _form_actions__WEBPACK_IMPORTED_MODULE_8__["ActionFormUpdate"]({ form: this.form.value }));
    };
    FormComponent.prototype.reset = function () {
        this.form.reset();
        this.form.clearValidators();
        this.form.clearAsyncValidators();
        this.store.dispatch(new _form_actions__WEBPACK_IMPORTED_MODULE_8__["ActionFormReset"]());
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/examples/form/components/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/examples/form/components/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/examples/form/form.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/examples/form/form.actions.ts ***!
  \***********************************************/
/*! exports provided: FormActionTypes, ActionFormUpdate, ActionFormReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionTypes", function() { return FormActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFormUpdate", function() { return ActionFormUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFormReset", function() { return ActionFormReset; });
var FormActionTypes;
(function (FormActionTypes) {
    FormActionTypes["UPDATE"] = "[Form] Update";
    FormActionTypes["RESET"] = "[Form] Reset";
})(FormActionTypes || (FormActionTypes = {}));
var ActionFormUpdate = /** @class */ (function () {
    function ActionFormUpdate(payload) {
        this.payload = payload;
        this.type = FormActionTypes.UPDATE;
    }
    return ActionFormUpdate;
}());

var ActionFormReset = /** @class */ (function () {
    function ActionFormReset() {
        this.type = FormActionTypes.RESET;
    }
    return ActionFormReset;
}());



/***/ }),

/***/ "./src/app/examples/form/form.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/examples/form/form.effects.ts ***!
  \***********************************************/
/*! exports provided: FORM_KEY, FormEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_KEY", function() { return FORM_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEffects", function() { return FormEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _form_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.actions */ "./src/app/examples/form/form.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FORM_KEY = 'EXAMPLES.FORM';
var FormEffects = /** @class */ (function () {
    function FormEffects(actions$, localStorageService) {
        var _this = this;
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.persistForm = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_form_actions__WEBPACK_IMPORTED_MODULE_4__["FormActionTypes"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) {
            return _this.localStorageService.setItem(FORM_KEY, { form: action.payload.form });
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], FormEffects.prototype, "persistForm", void 0);
    FormEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], FormEffects);
    return FormEffects;
}());



/***/ }),

/***/ "./src/app/examples/form/form.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/examples/form/form.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, formReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formReducer", function() { return formReducer; });
/* harmony import */ var _form_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.actions */ "./src/app/examples/form/form.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    form: {}
};
function formReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _form_actions__WEBPACK_IMPORTED_MODULE_0__["FormActionTypes"].UPDATE:
            return __assign({}, state, { form: action.payload.form });
        case _form_actions__WEBPACK_IMPORTED_MODULE_0__["FormActionTypes"].RESET:
            return initialState;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/examples/form/form.selectors.ts":
/*!*************************************************!*\
  !*** ./src/app/examples/form/form.selectors.ts ***!
  \*************************************************/
/*! exports provided: selectForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectForm", function() { return selectForm; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_examples_examples_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/examples/examples.state */ "./src/app/examples/examples.state.ts");


var selectForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_app_examples_examples_state__WEBPACK_IMPORTED_MODULE_1__["selectExamples"], function (state) { return state.form; });


/***/ }),

/***/ "./src/app/examples/stock-market/components/stock-market-container.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/examples/stock-market/components/stock-market-container.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h1 class=\"main-heading\">{{ 'anms.examples.stocks.title' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <form autocomplete=\"false\">\r\n        <mat-form-field>\r\n          <input matInput [placeholder]=\"'anms.examples.stocks.symbol' | translate\"\r\n                 [value]=\"stocks.symbol\"\r\n                 (keyup)=\"onSymbolChange($event.target.value)\">\r\n        </mat-form-field>\r\n      </form>\r\n      <p>\r\n        {{ 'anms.examples.stocks.description' | translate }} GOOGL, FB, AAPL, NVDA, AMZN,\r\n        TWTR, SNAP, TSLA...\r\n      </p>\r\n      <br>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-4 offset-lg-1\">\r\n      <mat-spinner *ngIf=\"stocks.loading\"></mat-spinner>\r\n      <mat-card *ngIf=\"stocks.stock\">\r\n        <mat-card-title>{{stocks.stock.symbol}} <span>{{stocks.stock.last}} {{stocks.stock.ccy}}</span></mat-card-title>\r\n        <mat-card-subtitle>\r\n          <p [ngClass]=\"{ negative: stocks.stock.changeNegative }\">\r\n            <fa-icon icon=\"caret-up\"\r\n                      *ngIf=\"stocks.stock.changePositive\"></fa-icon>\r\n            <fa-icon icon=\"caret-down\"\r\n                      *ngIf=\"stocks.stock.changeNegative\"></fa-icon>\r\n            {{stocks.stock.change}} ({{stocks.stock.changePercent}})\r\n          </p>\r\n        </mat-card-subtitle>\r\n        <mat-card-content>{{stocks.stock.exchange}}</mat-card-content>\r\n      </mat-card>\r\n      <p *ngIf=\"stocks.error\" class=\"error\">\r\n        <fa-icon icon=\"exclamation-triangle\"></fa-icon>\r\n        <br><br>\r\n        <span>\r\n          {{ 'anms.examples.stocks.error1' | translate }}\r\n          <span class=\"symbol\">{{stocks.symbol}}</span>\r\n          {{ 'anms.examples.stocks.error2' | translate }}\r\n        </span>\r\n      </p>\r\n      <br>\r\n      <br>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <p>\r\n        {{ 'anms.examples.stocks.text1' | translate }} <code>HTTP</code>\r\n        {{ 'anms.examples.stocks.text2' | translate }} <code>@ngrx/effects</code>\r\n        {{ 'anms.examples.stocks.text3' | translate }}\r\n      </p>\r\n      <p>{{ 'anms.examples.stocks.text4' | translate }}</p>\r\n      <p>\r\n        {{ 'anms.examples.stocks.text5' | translate }} <code>.switchMap</code>.\r\n      </p>\r\n      <p>{{ 'anms.examples.stocks.text6' | translate }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/stock-market/components/stock-market-container.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/examples/stock-market/components/stock-market-container.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0; }\n\nmat-form-field {\n  width: 100%; }\n\nmat-card span {\n  float: right; }\n\nmat-card mat-card-title {\n  margin-bottom: 5px; }\n\nmat-card mat-card-subtitle {\n  text-align: right; }\n\nmat-card mat-card-subtitle fa-icon {\n    width: 8px; }\n\nmat-card mat-card-content {\n  text-align: center; }\n\nmat-spinner {\n  margin: auto; }\n\n.error {\n  text-align: center;\n  padding: 20px; }\n\n.error mat-icon {\n    width: 54px;\n    font-size: 48px; }\n\n.error > span {\n    opacity: 0.4; }\n\n.error .symbol {\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/examples/stock-market/components/stock-market-container.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/examples/stock-market/components/stock-market-container.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StockMarketContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMarketContainerComponent", function() { return StockMarketContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _stock_market_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock-market.selectors */ "./src/app/examples/stock-market/stock-market.selectors.ts");
/* harmony import */ var _stock_market_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stock-market.actions */ "./src/app/examples/stock-market/stock-market.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StockMarketContainerComponent = /** @class */ (function () {
    function StockMarketContainerComponent(store) {
        this.store = store;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    StockMarketContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initialized = false;
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_stock_market_selectors__WEBPACK_IMPORTED_MODULE_4__["selectStockMarket"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (stocks) {
            _this.stocks = stocks;
            if (!_this.initialized) {
                _this.initialized = true;
                _this.store.dispatch(new _stock_market_actions__WEBPACK_IMPORTED_MODULE_5__["ActionStockMarketRetrieve"]({ symbol: stocks.symbol }));
            }
        });
    };
    StockMarketContainerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    StockMarketContainerComponent.prototype.onSymbolChange = function (symbol) {
        this.store.dispatch(new _stock_market_actions__WEBPACK_IMPORTED_MODULE_5__["ActionStockMarketRetrieve"]({ symbol: symbol }));
    };
    StockMarketContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-stock-market',
            template: __webpack_require__(/*! ./stock-market-container.component.html */ "./src/app/examples/stock-market/components/stock-market-container.component.html"),
            styles: [__webpack_require__(/*! ./stock-market-container.component.scss */ "./src/app/examples/stock-market/components/stock-market-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], StockMarketContainerComponent);
    return StockMarketContainerComponent;
}());



/***/ }),

/***/ "./src/app/examples/stock-market/stock-market.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/examples/stock-market/stock-market.actions.ts ***!
  \***************************************************************/
/*! exports provided: StockMarketActionTypes, ActionStockMarketRetrieve, ActionStockMarketRetrieveSuccess, ActionStockMarketRetrieveError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMarketActionTypes", function() { return StockMarketActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStockMarketRetrieve", function() { return ActionStockMarketRetrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStockMarketRetrieveSuccess", function() { return ActionStockMarketRetrieveSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStockMarketRetrieveError", function() { return ActionStockMarketRetrieveError; });
var StockMarketActionTypes;
(function (StockMarketActionTypes) {
    StockMarketActionTypes["RETRIEVE"] = "[Stock] Retrieve";
    StockMarketActionTypes["RETRIEVE_SUCCESS"] = "[Stock] Retrieve Success";
    StockMarketActionTypes["RETRIEVE_ERROR"] = "[Stock] Retrieve Error";
})(StockMarketActionTypes || (StockMarketActionTypes = {}));
var ActionStockMarketRetrieve = /** @class */ (function () {
    function ActionStockMarketRetrieve(payload) {
        this.payload = payload;
        this.type = StockMarketActionTypes.RETRIEVE;
    }
    return ActionStockMarketRetrieve;
}());

var ActionStockMarketRetrieveSuccess = /** @class */ (function () {
    function ActionStockMarketRetrieveSuccess(payload) {
        this.payload = payload;
        this.type = StockMarketActionTypes.RETRIEVE_SUCCESS;
    }
    return ActionStockMarketRetrieveSuccess;
}());

var ActionStockMarketRetrieveError = /** @class */ (function () {
    function ActionStockMarketRetrieveError(payload) {
        this.payload = payload;
        this.type = StockMarketActionTypes.RETRIEVE_ERROR;
    }
    return ActionStockMarketRetrieveError;
}());



/***/ }),

/***/ "./src/app/examples/stock-market/stock-market.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/examples/stock-market/stock-market.effects.ts ***!
  \***************************************************************/
/*! exports provided: STOCK_MARKET_KEY, StockMarketEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_MARKET_KEY", function() { return STOCK_MARKET_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMarketEffects", function() { return StockMarketEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _stock_market_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-market.service */ "./src/app/examples/stock-market/stock-market.service.ts");
/* harmony import */ var _stock_market_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-market.actions */ "./src/app/examples/stock-market/stock-market.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';
var StockMarketEffects = /** @class */ (function () {
    function StockMarketEffects(actions$, localStorageService, service) {
        var _this = this;
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.service = service;
        this.retrieveStock = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_stock_market_actions__WEBPACK_IMPORTED_MODULE_6__["StockMarketActionTypes"].RETRIEVE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            return _this.localStorageService.setItem(STOCK_MARKET_KEY, {
                symbol: action.payload.symbol
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.service
                .retrieveStock(action.payload.symbol)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (stock) { return new _stock_market_actions__WEBPACK_IMPORTED_MODULE_6__["ActionStockMarketRetrieveSuccess"]({ stock: stock }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _stock_market_actions__WEBPACK_IMPORTED_MODULE_6__["ActionStockMarketRetrieveError"]({ error: error })); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], StockMarketEffects.prototype, "retrieveStock", void 0);
    StockMarketEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _stock_market_service__WEBPACK_IMPORTED_MODULE_5__["StockMarketService"]])
    ], StockMarketEffects);
    return StockMarketEffects;
}());



/***/ }),

/***/ "./src/app/examples/stock-market/stock-market.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/examples/stock-market/stock-market.reducer.ts ***!
  \***************************************************************/
/*! exports provided: initialState, stockMarketReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockMarketReducer", function() { return stockMarketReducer; });
/* harmony import */ var _stock_market_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-market.actions */ "./src/app/examples/stock-market/stock-market.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    symbol: 'GOOGL',
    loading: false
};
function stockMarketReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _stock_market_actions__WEBPACK_IMPORTED_MODULE_0__["StockMarketActionTypes"].RETRIEVE:
            return __assign({}, state, { loading: true, stock: null, error: null, symbol: action.payload.symbol });
        case _stock_market_actions__WEBPACK_IMPORTED_MODULE_0__["StockMarketActionTypes"].RETRIEVE_SUCCESS:
            return __assign({}, state, { loading: false, stock: action.payload.stock, error: null });
        case _stock_market_actions__WEBPACK_IMPORTED_MODULE_0__["StockMarketActionTypes"].RETRIEVE_ERROR:
            return __assign({}, state, { loading: false, stock: null, error: action.payload.error });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/examples/stock-market/stock-market.selectors.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examples/stock-market/stock-market.selectors.ts ***!
  \*****************************************************************/
/*! exports provided: selectStockMarket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStockMarket", function() { return selectStockMarket; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _examples_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../examples.state */ "./src/app/examples/examples.state.ts");


var selectStockMarket = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_examples_state__WEBPACK_IMPORTED_MODULE_1__["selectExamples"], function (state) { return state.stocks; });


/***/ }),

/***/ "./src/app/examples/stock-market/stock-market.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/examples/stock-market/stock-market.service.ts ***!
  \***************************************************************/
/*! exports provided: StockMarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMarketService", function() { return StockMarketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
var StockMarketService = /** @class */ (function () {
    function StockMarketService(httpClient) {
        this.httpClient = httpClient;
    }
    StockMarketService.prototype.retrieveStock = function (symbol) {
        return this.httpClient
            .get(PROXY_URL + ("https://api.iextrading.com/1.0/stock/" + symbol + "/quote"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (stock) { return ({
            symbol: stock.symbol,
            exchange: stock.primaryExchange,
            last: stock.latestPrice,
            ccy: 'USD',
            change: stock.close,
            changePositive: stock.change.toString().indexOf('+') === 0,
            changeNegative: stock.change.toString().indexOf('-') === 0,
            changePercent: stock.changePercent.toFixed(2)
        }); }));
    };
    StockMarketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StockMarketService);
    return StockMarketService;
}());



/***/ }),

/***/ "./src/app/examples/theming/child/child.component.html":
/*!*************************************************************!*\
  !*** ./src/app/examples/theming/child/child.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>\r\n    {{ 'anms.examples.theming.child.title' | translate }}\r\n    <br>{{ 'anms.examples.theming.child.subtitle' | translate }}\r\n  </h1>\r\n  <h2>{{ 'anms.examples.theming.child.description' | translate }}</h2>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/theming/child/child.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/examples/theming/child/child.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  border: 1px solid;\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/app/examples/theming/child/child.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/examples/theming/child/child.component.ts ***!
  \***********************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
    }
    ChildComponent.prototype.ngOnInit = function () { };
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/examples/theming/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.scss */ "./src/app/examples/theming/child/child.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/examples/theming/parent/parent.component.html":
/*!***************************************************************!*\
  !*** ./src/app/examples/theming/parent/parent.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h1 class=\"main-heading\">{{ 'anms.examples.theming.parent.title' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <p>\r\n        {{ 'anms.examples.theming.parent.text1' | translate }} <code>stylesUrls</code>\r\n        {{ 'anms.examples.theming.parent.text2' | translate }} <code>@Component</code>\r\n        {{ 'anms.examples.theming.parent.text3' | translate }} <code>styles.scss</code>\r\n        {{ 'anms.examples.theming.parent.text4' | translate }}\r\n        <strong>{{ 'anms.examples.theming.parent.text5' | translate }}</strong>\r\n        {{ 'anms.examples.theming.parent.text6' | translate }}\r\n      </p>\r\n      <p>\r\n        {{ 'anms.examples.theming.parent.text7' | translate }}\r\n        <strong>{{ 'anms.examples.theming.parent.text8' | translate }}</strong>\r\n        {{ 'anms.examples.theming.parent.text9' | translate }}\r\n        <code>> (child selectors)</code>\r\n        {{ 'anms.examples.theming.parent.text10' | translate }}\r\n      </p>\r\n      <pre>\r\n{{themeSrc}}\r\n      </pre>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"example\">\r\n        <h1>{{ 'anms.examples.theming.parent.description' | translate }}</h1>\r\n        <anms-child></anms-child>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/theming/parent/parent.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/examples/theming/parent/parent.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0; }\n\npre {\n  margin: 0; }\n\n.example {\n  border: 1px solid;\n  padding: 20px;\n  margin: 0 0 20px 0; }\n"

/***/ }),

/***/ "./src/app/examples/theming/parent/parent.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/examples/theming/parent/parent.component.ts ***!
  \*************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.themeSrc = __webpack_require__(/*! raw-loader!./parent.component.scss-theme.scss */ "./node_modules/raw-loader/index.js!./src/app/examples/theming/parent/parent.component.scss-theme.scss");
    }
    ParentComponent.prototype.ngOnInit = function () { };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/examples/theming/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.scss */ "./src/app/examples/theming/parent/parent.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/examples/todos/components/todos-container.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/examples/todos/components/todos-container.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-md-2 col-md-8 entry\">\r\n      <anms-big-input [placeholder]=\"'anms.examples.todos.input' | translate\"\r\n                      [value]=\"newTodo\"\r\n                      (keyup)=\"onNewTodoChange($event.target.value)\"\r\n                      (keyup.enter)=\"!isAddTodoDisabled && onAddTodo()\"\r\n                      (keyup.escape)=\"onNewTodoClear()\">\r\n        <anms-big-input-action fontSet=\"fas\" fontIcon=\"fa-plus\" faIcon=\"plus\" color=\"accent\"\r\n                               (action)=\"onAddTodo()\"\r\n                               [disabled]=\"isAddTodoDisabled\"\r\n                               [matTooltip]=\"'anms.examples.todos.tooltip.add' | translate\"\r\n                               matTooltipPosition=\"before\">\r\n        </anms-big-input-action>\r\n        <anms-big-input-action fontSet=\"fas\" fontIcon=\"fa-trash\" faIcon=\"trash\" color=\"warn\"\r\n                               (action)=\"onRemoveDoneTodos()\"\r\n                               [disabled]=\"isRemoveDoneTodosDisabled\"\r\n                               matTooltip=\"Remove done todos\"\r\n                               [matTooltip]=\"'anms.examples.todos.tooltip.remove' | translate\"\r\n                               matTooltipPosition=\"after\">\r\n        </anms-big-input-action>\r\n      </anms-big-input>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        {{ 'anms.examples.todos.list' | translate }}\r\n        <button class=\"todos-filter\" mat-icon-button [matMenuTriggerFor]=\"todosFilter\">\r\n          <fa-icon icon=\"filter\"></fa-icon>\r\n        </button>\r\n        <mat-menu class=\"todos-filter-menu-overlay\" #todosFilter=\"matMenu\" xPosition=\"before\">\r\n          <button mat-menu-item (click)=\"onFilterTodos('ALL')\" [ngClass]=\"{ active: todos.filter === 'ALL' }\">\r\n            <mat-icon><fa-icon icon=\"tasks\"></fa-icon></mat-icon>\r\n            <span>{{ 'anms.examples.todos.filter.all' | translate }}</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"onFilterTodos('DONE')\" [ngClass]=\"{ active: todos.filter === 'DONE' }\">\r\n            <mat-icon><fa-icon icon=\"check\"></fa-icon></mat-icon>\r\n            <span>{{ 'anms.examples.todos.filter.done' | translate }}</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"onFilterTodos('ACTIVE')\" [ngClass]=\"{ active: todos.filter === 'ACTIVE' }\">\r\n            <mat-icon><fa-icon icon=\"square\"></fa-icon></mat-icon>\r\n            <span>{{ 'anms.examples.todos.filter.active' | translate }}</span>\r\n          </button>\r\n        </mat-menu>\r\n        <mat-chip-list class=\"todos-filter-info d-none d-sm-block d-md-none d-lg-block\">\r\n          <mat-chip [disabled]=true [ngPlural]=\"filteredTodos.length\">\r\n            {{ 'anms.examples.todos.filter.description' | translate }}\r\n            <ng-template ngPluralCase=\"other\">{{ filteredTodos.length }} {{ 'anms.examples.todos.filter.items' | translate }}</ng-template>\r\n            <ng-template ngPluralCase=\"=1\">{{ 'anms.examples.todos.filter.one' | translate }} {{ 'anms.examples.todos.filter.item' | translate }}</ng-template>\r\n            <ng-template ngPluralCase=\"=0\">{{ 'anms.examples.todos.filter.none' | translate }} {{ 'anms.examples.todos.filter.items' | translate }}</ng-template>\r\n          </mat-chip>\r\n        </mat-chip-list>\r\n      </h2>\r\n      <mat-card *ngFor=\"let todo of filteredTodos\" class=\"todo\"\r\n                [ngClass]=\"routeAnimationsElements\">\r\n        <mat-checkbox class=\"todo-done\" [checked]=\"todo.done\" (change)=\"onToggleTodo(todo)\"></mat-checkbox>\r\n        <span class=\"todo-label\"\r\n              [ngClass]=\"{ 'todo-label-done': todo.done }\"\r\n              (click)=\"onToggleTodo(todo)\">\r\n          &nbsp;{{todo.name}}&nbsp;\r\n        </span>\r\n      </mat-card>\r\n      <br>\r\n      <br>\r\n    </div>\r\n    <div class=\"offset-md-1  col-md-5\">\r\n      <h2>{{ 'anms.examples.todos.example' | translate }}</h2>\r\n      <p>\r\n        {{ 'anms.examples.todos.text1' | translate }}\r\n        <code>{{ 'anms.examples.todos.text2' | translate }}</code>\r\n        {{ 'anms.examples.todos.text3' | translate }}\r\n      </p>\r\n      <p>\r\n        {{ 'anms.examples.todos.text4' | translate }} <code>ngrx</code>\r\n        {{ 'anms.examples.todos.text5' | translate }}\r\n      </p>\r\n      <p>{{ 'anms.examples.todos.text6' | translate }}</p>\r\n      <br>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/todos/components/todos-container.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/examples/todos/components/todos-container.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entry {\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\n.todos-filter-info {\n  float: right;\n  font-weight: normal; }\n\n.todos-filter {\n  float: right;\n  position: relative;\n  left: 10px;\n  top: -5px;\n  margin-left: -10px; }\n\n.todo {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px; }\n\n.todo .todo-done {\n    margin: 0 20px 0 0; }\n\n.todo .todo-label {\n    position: relative;\n    top: 2px;\n    cursor: pointer; }\n\n.todo .todo-label.todo-label-done {\n      text-decoration: line-through;\n      opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/examples/todos/components/todos-container.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/examples/todos/components/todos-container.component.ts ***!
  \************************************************************************/
/*! exports provided: TodosContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosContainerComponent", function() { return TodosContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _todos_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todos.actions */ "./src/app/examples/todos/todos.actions.ts");
/* harmony import */ var _todos_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todos.selectors */ "./src/app/examples/todos/todos.selectors.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TodosContainerComponent = /** @class */ (function () {
    function TodosContainerComponent(store, snackBar, translateService) {
        this.store = store;
        this.snackBar = snackBar;
        this.translateService = translateService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_5__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.newTodo = '';
    }
    TodosContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_todos_selectors__WEBPACK_IMPORTED_MODULE_7__["selectTodos"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (todos) {
            _this.todos = todos;
            _this.store.dispatch(new _todos_actions__WEBPACK_IMPORTED_MODULE_6__["ActionTodosPersist"]({ todos: todos }));
        });
    };
    TodosContainerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    Object.defineProperty(TodosContainerComponent.prototype, "filteredTodos", {
        get: function () {
            var filter = this.todos.filter;
            if (filter === 'ALL') {
                return this.todos.items;
            }
            else {
                var predicate = filter === 'DONE' ? function (t) { return t.done; } : function (t) { return !t.done; };
                return this.todos.items.filter(predicate);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodosContainerComponent.prototype, "isAddTodoDisabled", {
        get: function () {
            return this.newTodo.length < 4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodosContainerComponent.prototype, "isRemoveDoneTodosDisabled", {
        get: function () {
            return this.todos.items.filter(function (item) { return item.done; }).length === 0;
        },
        enumerable: true,
        configurable: true
    });
    TodosContainerComponent.prototype.onNewTodoChange = function (newTodo) {
        this.newTodo = newTodo;
    };
    TodosContainerComponent.prototype.onNewTodoClear = function () {
        this.newTodo = '';
    };
    TodosContainerComponent.prototype.onAddTodo = function () {
        this.store.dispatch(new _todos_actions__WEBPACK_IMPORTED_MODULE_6__["ActionTodosAdd"]({ name: this.newTodo }));
        var addedMessage = this.translateService.instant('anms.examples.todos.added.notification', { name: this.newTodo });
        this.showNotification(addedMessage);
        this.newTodo = '';
    };
    TodosContainerComponent.prototype.onToggleTodo = function (todo) {
        var _this = this;
        this.store.dispatch(new _todos_actions__WEBPACK_IMPORTED_MODULE_6__["ActionTodosToggle"]({ id: todo.id }));
        var newStatus = this.translateService.instant("anms.examples.todos.filter." + (todo.done ? 'active' : 'done'));
        var undo = this.translateService.instant('anms.examples.todos.undo');
        var toggledMessage = this.translateService.instant('anms.examples.todos.toggle.notification', { name: todo.name });
        this.showNotification(toggledMessage + " " + newStatus, undo)
            .onAction()
            .subscribe(function () { return _this.onToggleTodo(__assign({}, todo, { done: !todo.done })); });
    };
    TodosContainerComponent.prototype.onRemoveDoneTodos = function () {
        this.store.dispatch(new _todos_actions__WEBPACK_IMPORTED_MODULE_6__["ActionTodosRemoveDone"]());
        var removedMessage = this.translateService.instant('anms.examples.todos.remove.notification');
        this.showNotification(removedMessage);
    };
    TodosContainerComponent.prototype.onFilterTodos = function (filter) {
        this.store.dispatch(new _todos_actions__WEBPACK_IMPORTED_MODULE_6__["ActionTodosFilter"]({ filter: filter }));
        var filterToMessage = this.translateService.instant('anms.examples.todos.filter.notification');
        var filterMessage = this.translateService.instant("anms.examples.todos.filter." + filter.toLowerCase());
        this.showNotification(filterToMessage + " " + filterMessage);
    };
    TodosContainerComponent.prototype.showNotification = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 2500,
            panelClass: 'todos-notification-overlay'
        });
    };
    TodosContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-todos',
            template: __webpack_require__(/*! ./todos-container.component.html */ "./src/app/examples/todos/components/todos-container.component.html"),
            styles: [__webpack_require__(/*! ./todos-container.component.scss */ "./src/app/examples/todos/components/todos-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], TodosContainerComponent);
    return TodosContainerComponent;
}());



/***/ }),

/***/ "./src/app/examples/todos/todos.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/examples/todos/todos.actions.ts ***!
  \*************************************************/
/*! exports provided: TodosActionTypes, ActionTodosAdd, ActionTodosToggle, ActionTodosRemoveDone, ActionTodosFilter, ActionTodosPersist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosActionTypes", function() { return TodosActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTodosAdd", function() { return ActionTodosAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTodosToggle", function() { return ActionTodosToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTodosRemoveDone", function() { return ActionTodosRemoveDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTodosFilter", function() { return ActionTodosFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTodosPersist", function() { return ActionTodosPersist; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var TodosActionTypes;
(function (TodosActionTypes) {
    TodosActionTypes["ADD"] = "[Todos] Add";
    TodosActionTypes["TOGGLE"] = "[Todos] Toggle";
    TodosActionTypes["REMOVE_DONE"] = "[Todos] Remove Done";
    TodosActionTypes["FILTER"] = "[Todos] Filter";
    TodosActionTypes["PERSIST"] = "[Todos] Persist";
})(TodosActionTypes || (TodosActionTypes = {}));
var ActionTodosAdd = /** @class */ (function () {
    function ActionTodosAdd(_a) {
        var _b = _a.id, id = _b === void 0 ? Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])() : _b, _c = _a.name, name = _c === void 0 ? '' : _c;
        this.type = TodosActionTypes.ADD;
        this.payload = { id: id, name: name };
    }
    return ActionTodosAdd;
}());

var ActionTodosToggle = /** @class */ (function () {
    function ActionTodosToggle(payload) {
        this.payload = payload;
        this.type = TodosActionTypes.TOGGLE;
    }
    return ActionTodosToggle;
}());

var ActionTodosRemoveDone = /** @class */ (function () {
    function ActionTodosRemoveDone() {
        this.type = TodosActionTypes.REMOVE_DONE;
    }
    return ActionTodosRemoveDone;
}());

var ActionTodosFilter = /** @class */ (function () {
    function ActionTodosFilter(payload) {
        this.payload = payload;
        this.type = TodosActionTypes.FILTER;
    }
    return ActionTodosFilter;
}());

var ActionTodosPersist = /** @class */ (function () {
    function ActionTodosPersist(payload) {
        this.payload = payload;
        this.type = TodosActionTypes.PERSIST;
    }
    return ActionTodosPersist;
}());



/***/ }),

/***/ "./src/app/examples/todos/todos.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/examples/todos/todos.effects.ts ***!
  \*************************************************/
/*! exports provided: TODOS_KEY, TodosEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS_KEY", function() { return TODOS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosEffects", function() { return TodosEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _todos_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos.actions */ "./src/app/examples/todos/todos.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TODOS_KEY = 'EXAMPLES.TODOS';
var TodosEffects = /** @class */ (function () {
    function TodosEffects(actions$, localStorageService) {
        var _this = this;
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.persistTodos = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_todos_actions__WEBPACK_IMPORTED_MODULE_4__["TodosActionTypes"].PERSIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) {
            return _this.localStorageService.setItem(TODOS_KEY, action.payload.todos);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], TodosEffects.prototype, "persistTodos", void 0);
    TodosEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], TodosEffects);
    return TodosEffects;
}());



/***/ }),

/***/ "./src/app/examples/todos/todos.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/examples/todos/todos.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, todosReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosReducer", function() { return todosReducer; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todos_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.actions */ "./src/app/examples/todos/todos.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    items: [
        { id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(), name: 'Open Todo list example', done: true },
        { id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(), name: 'Check the other examples', done: false },
        {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
            name: 'Use Angular ngRx Material Starter in your project',
            done: false
        }
    ],
    filter: 'ALL'
};
function todosReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _todos_actions__WEBPACK_IMPORTED_MODULE_1__["TodosActionTypes"].ADD:
            return __assign({}, state, { items: [
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        done: false
                    }
                ].concat(state.items) });
        case _todos_actions__WEBPACK_IMPORTED_MODULE_1__["TodosActionTypes"].TOGGLE:
            return __assign({}, state, { items: state.items.map(function (item) {
                    return item.id === action.payload.id ? __assign({}, item, { done: !item.done }) : item;
                }) });
        case _todos_actions__WEBPACK_IMPORTED_MODULE_1__["TodosActionTypes"].REMOVE_DONE:
            return __assign({}, state, { items: state.items.filter(function (item) { return !item.done; }) });
        case _todos_actions__WEBPACK_IMPORTED_MODULE_1__["TodosActionTypes"].FILTER:
            return __assign({}, state, { filter: action.payload.filter });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/examples/todos/todos.selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/todos/todos.selectors.ts ***!
  \***************************************************/
/*! exports provided: selectTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTodos", function() { return selectTodos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _examples_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../examples.state */ "./src/app/examples/examples.state.ts");


var selectTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_examples_state__WEBPACK_IMPORTED_MODULE_1__["selectExamples"], function (state) { return state.todos; });


/***/ })

}]);
//# sourceMappingURL=app-examples-examples-module.js.map