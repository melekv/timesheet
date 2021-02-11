// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"addItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AddItem = /*#__PURE__*/function () {
  function AddItem() {
    _classCallCheck(this, AddItem);

    // common fields
    this.type = document.getElementById('add-item-type');
    this.date = document.getElementById('add-item-date');
    this.superior = document.getElementById('add-item-superior');
    this.workFrom = document.getElementById('add-item-work-from');
    this.workTo = document.getElementById('add-item-work-to');
  }

  _createClass(AddItem, [{
    key: "requiredCheckErr",
    value: function requiredCheckErr() {
      var _this = this;

      this.errorRequired = false;
      this.dataRequired.forEach(function (item) {
        if (item.value == '') {
          item.classList.add('err-required');
          _this.errorRequired = true;
        } else {
          item.classList.remove('err-required');
        }
      });
      return this.errorRequired;
    }
  }]);

  return AddItem;
}();

exports.default = AddItem;
},{}],"addItemWork.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addItem = _interopRequireDefault(require("./addItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AddItemWork = /*#__PURE__*/function (_AddItem) {
  _inherits(AddItemWork, _AddItem);

  var _super = _createSuper(AddItemWork);

  function AddItemWork() {
    var _this;

    _classCallCheck(this, AddItemWork);

    _this = _super.call(this);
    _this.activity = 'W';
    _this.description = document.getElementById('add-item-description');
    _this.placeStart = document.getElementById('add-item-place-start');
    _this.cityStart = document.getElementById('add-item-city-start');
    _this.countryStart = document.getElementById('add-item-country-start');
    _this.isHoliday = document.getElementById('add-item-holiday');
    _this.projCode = document.getElementById('add-item-proj-code');
    _this.breakFrom = document.getElementById('add-item-break-from');
    _this.breakTo = document.getElementById('add-item-break-to');
    _this.dataRequired = [_this.date, _this.type, _this.superior, _this.workFrom, _this.workTo, _this.description, _this.placeStart, _this.cityStart, _this.countryStart, _this.projCode];
    return _this;
  }

  _createClass(AddItemWork, [{
    key: "getValues",
    value: function getValues(id) {
      return {
        id: id,
        date: this.date.value,
        type: 'W',
        superior: this.superior.value,
        workFrom: this.workFrom.value,
        workTo: this.workTo.value,
        description: this.description.value,
        placeStart: this.placeStart.value,
        cityStart: this.cityStart.value,
        countryStart: this.countryStart.value,
        isHoliday: this.isHoliday.checked,
        projCode: this.projCode.value,
        breakFrom: this.breakFrom.value,
        breakTo: this.breakTo.value
      };
    }
    /**
     * writing the values from DB to the option fields in the side panel
     * @param {object} fieldObj 
     * @param {object} record 
     */

  }, {
    key: "writeValuesFromRecord",
    value: function writeValuesFromRecord(fieldObj, record) {
      fieldObj.superior.value = record.superior;
      fieldObj.workFrom.value = record.work_from;
      fieldObj.workTo.value = record.work_to;
      fieldObj.description.value = record.description;
      fieldObj.placeStart.value = record.place_start;
      fieldObj.cityStart.value = record.city_start;
      fieldObj.countryStart.value = record.country_start;
      fieldObj.projCode.value = record.proj_code;
      fieldObj.breakFrom.value = record.break_from;
      fieldObj.breakTo.value = record.break_to;
    }
  }]);

  return AddItemWork;
}(_addItem.default);

exports.default = AddItemWork;
},{"./addItem.js":"addItem.js"}],"addItemTravel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addItem = _interopRequireDefault(require("./addItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AddItemTravel = /*#__PURE__*/function (_AddItem) {
  _inherits(AddItemTravel, _AddItem);

  var _super = _createSuper(AddItemTravel);

  function AddItemTravel() {
    var _this;

    _classCallCheck(this, AddItemTravel);

    _this = _super.call(this);
    _this.activity = 'T';
    _this.description = document.getElementById('add-item-description');
    _this.placeStart = document.getElementById('add-item-place-start');
    _this.cityStart = document.getElementById('add-item-city-start');
    _this.countryStart = document.getElementById('add-item-country-start');
    _this.isHoliday = document.getElementById('add-item-holiday');
    _this.projCode = document.getElementById('add-item-proj-code');
    _this.breakFrom = document.getElementById('add-item-break-from');
    _this.breakTo = document.getElementById('add-item-break-to');
    _this.placeStop = document.getElementById('add-item-place-stop');
    _this.cityStop = document.getElementById('add-item-city-stop');
    _this.countryStop = document.getElementById('add-item-country-stop');
    _this.transport = document.getElementById('add-item-transport');
    _this.regPlate = document.getElementById('add-item-reg-plate');
    _this.personNum = document.getElementById('add-item-person-num');
    _this.isDriver = document.getElementById('add-item-driver');
    _this.driverFrom = document.getElementById('add-item-driver-from');
    _this.driverTo = document.getElementById('add-item-driver-to');
    _this.dataRequired = [_this.date, _this.type, _this.superior, _this.workFrom, _this.workTo, _this.description, _this.placeStart, _this.cityStart, _this.countryStart, _this.projCode, _this.placeStop, _this.cityStop, _this.countryStop, _this.transport];
    return _this;
  }

  _createClass(AddItemTravel, [{
    key: "getValues",
    value: function getValues(id) {
      return {
        id: id,
        date: this.date.value,
        type: 'T',
        superior: this.superior.value,
        workFrom: this.workFrom.value,
        workTo: this.workTo.value,
        description: this.description.value,
        placeStart: this.placeStart.value,
        cityStart: this.cityStart.value,
        countryStart: this.countryStart.value,
        isHoliday: this.isHoliday.checked,
        projCode: this.projCode.value,
        placeStop: this.placeStop.value,
        cityStop: this.cityStop.value,
        countryStop: this.countryStop.value,
        transport: this.transport.value,
        regPlate: this.regPlate.value,
        personNum: this.personNum.value,
        isDriver: this.isDriver.checked,
        driverFrom: this.driverFrom.value,
        driverTo: this.driverTo.value
      };
    }
    /**
     * writing the values from DB to the option fields in the side panel
     * @param {object} fieldObj 
     * @param {object} record 
     */

  }, {
    key: "writeValuesFromRecord",
    value: function writeValuesFromRecord(fieldObj, record) {
      fieldObj.superior.value = record.superior;
      fieldObj.workFrom.value = record.work_from;
      fieldObj.workTo.value = record.work_to;
      fieldObj.description.value = record.description;
      fieldObj.placeStart.value = record.place_start;
      fieldObj.cityStart.value = record.city_start;
      fieldObj.countryStart.value = record.country_start;
      fieldObj.projCode.value = record.proj_code;
      fieldObj.breakFrom.value = record.break_from;
      fieldObj.breakTo.value = record.break_to;
      fieldObj.placeStop.value = record.place_stop;
      fieldObj.cityStop.value = record.city_stop;
      fieldObj.countryStop.value = record.country_stop;
      fieldObj.transport.value = record.transport;
      fieldObj.regPlate.value = record.reg_plate;
      fieldObj.personNum.value = record.person_num;
      fieldObj.isDriver.checked = record.is_driver;
      fieldObj.driverFrom.value = record.driver_from;
      fieldObj.driverTo.value = record.driver_to;
    }
  }]);

  return AddItemTravel;
}(_addItem.default);

exports.default = AddItemTravel;
},{"./addItem.js":"addItem.js"}],"addItemAbsence.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addItem = _interopRequireDefault(require("./addItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AddItemAbsence = /*#__PURE__*/function (_AddItem) {
  _inherits(AddItemAbsence, _AddItem);

  var _super = _createSuper(AddItemAbsence);

  function AddItemAbsence() {
    var _this;

    _classCallCheck(this, AddItemAbsence);

    _this = _super.call(this);
    _this.activity = 'A';
    _this.absence = document.getElementById('add-item-absence');
    _this.dataRequired = [_this.date, _this.type, _this.superior, _this.workFrom, _this.workTo, _this.absence];
    return _this;
  }

  _createClass(AddItemAbsence, [{
    key: "getValues",
    value: function getValues(id) {
      return {
        id: id,
        date: this.date.value,
        type: 'A',
        superior: this.superior.value,
        absence: this.absence.value,
        workFrom: this.workFrom.value,
        workTo: this.workTo.value
      };
    }
    /**
     * writing the values from DB to the option fields in the side panel
     * @param {object} fieldObj 
     * @param {object} record 
     */

  }, {
    key: "writeValuesFromRecord",
    value: function writeValuesFromRecord(fieldObj, record) {
      fieldObj.superior.value = record.superior;
      fieldObj.workFrom.value = record.work_from;
      fieldObj.workTo.value = record.work_to;
      fieldObj.absence.value = record.absence;
    }
  }]);

  return AddItemAbsence;
}(_addItem.default);

exports.default = AddItemAbsence;
},{"./addItem.js":"addItem.js"}],"ui.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addItemWork = _interopRequireDefault(require("./addItemWork.js"));

var _addItemTravel = _interopRequireDefault(require("./addItemTravel.js"));

var _addItemAbsence = _interopRequireDefault(require("./addItemAbsence.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, null, [{
    key: "adjustMonthGrid",

    /**
     * adjust month grid, add activities, if present
     * 
     * @param {*} year the year, like 2020
     * @param {*} month the month, [1-12]
     * @param {*} day day of month [1-31]
     * 
     * @return the container div / main
     */
    value: function adjustMonthGrid(year, month, day) {
      var date = new Date(year, month - 1, 1);
      var monthNow = new Date().getMonth();
      var container = document.createElement('main');
      var addStyle = '';
      container.classList.add('container-grid'); // grid header

      container.innerHTML = "\n            <div class=\"item weekday-header\">PONIEDZIA\u0141EK</div>\n            <div class=\"item weekday-header\">WTOREK</div>\n            <div class=\"item weekday-header\">\u015ARODA</div>\n            <div class=\"item weekday-header\">CZWARTEK</div>\n            <div class=\"item weekday-header\">PI\u0104TEK</div>\n            <div class=\"item weekday-header weekend-sat\">SOBOTA</div>\n            <div class=\"item weekday-header weekend-sun\">NIEDZIELA</div>\n        "; // weekday of selected / actual month
      // change output to range [1-7]

      var firstDayWeekDay = date.getDay();
      firstDayWeekDay = firstDayWeekDay === 0 ? firstDayWeekDay + 7 : firstDayWeekDay; // get number of days in a month

      var daysInMonth = new Date(year, month, 0).getDate();

      for (var i = -(firstDayWeekDay - 1); i < daysInMonth; i++) {
        var div = document.createElement('div');
        div.classList.add('item'); // mark saturday

        if (new Date(year, month - 1, i + 1).getDay() === 6) {
          div.classList.add('weekend-sat');
        } // mark sunday


        if (new Date(year, month - 1, i + 1).getDay() === 0) {
          div.classList.add('weekend-sun');
        }

        addStyle = i + 1 === day && month == monthNow + 1 ? ' style="background-color: rgb(0, 200, 255)"' : '';
        div.innerHTML = i >= 0 ? "\n                <div class=\"item-info\" data-day=".concat(i + 1, ">\n                    <p").concat(addStyle, ">").concat(i + 1, "</p>\n                    <p class=\"workTime\">00:00</p>\n                </div>\n            ") : '';
        container.appendChild(div);
      }

      return container;
    }
  }, {
    key: "adjustTime",
    value: function adjustTime(prevTime, timeFrom, timeTo) {
      // split string to array [hh, mm]
      prevTime = prevTime.split(':');
      timeFrom = timeFrom.split(':');
      timeTo = timeTo.split(':'); // ms values

      var dateFrom = new Date(0, 0, 1, timeFrom[0], timeFrom[1], 0);
      var dateTo = new Date(0, 0, 1, timeTo[0], timeTo[1], 0);
      var seconds = (dateTo - dateFrom) / 1000;
      var minutes = seconds / 60;
      var hours = Math.floor(minutes / 60); // get rest of minutes

      minutes = minutes % 60;
      var totalHrs = parseInt(prevTime[0]) + hours;
      var totalMin = parseInt(prevTime[1]) + minutes; // format time

      totalMin = totalMin < 10 ? "0".concat(totalMin) : totalMin;
      totalHrs = totalHrs < 10 ? "0".concat(totalHrs) : totalHrs;
      return "".concat(totalHrs, ":").concat(totalMin);
    }
  }, {
    key: "adjustSumWork",
    value: function adjustSumWork(sum, addValue) {
      // sum      120:00
      // addValue 8:00
      sum = sum.split(':');
      addValue = addValue.split(':');
      var hours = 0;
      var minutes = parseInt(sum[1]) + parseInt(addValue[1]);

      if (minutes >= 60) {
        minutes = minutes - 60;
        hours += 1;
      }

      hours = parseInt(sum[0]) + parseInt(addValue[0]) + hours;
      hours = hours < 10 ? "0".concat(hours) : hours;
      minutes = minutes < 10 ? "0".concat(minutes) : minutes;
      return "".concat(hours, ":").concat(minutes);
    }
  }, {
    key: "addActivity",
    value: function addActivity(record) {
      var _this = this;

      // get day of record
      var recordDay = parseInt(record.date.substr(-2, 2));
      var theDay = document.querySelectorAll("[data-day=\"".concat(recordDay, "\"]"));
      var sumWorkTime = document.getElementById('sum-work-time');
      theDay.forEach(function (day) {
        var newActivity = document.createElement('div');
        newActivity.classList.add('item-type');
        newActivity.classList.add('d-flex');
        newActivity.classList.add('justify-content-between');
        newActivity.dataset.id = "".concat(record.type, "-").concat(record.id);

        if (record.type === 'W') {
          newActivity.classList.add('type-work');
          newActivity.innerHTML = "\n                    <div style=\"font-weight: 700;\">Praca</div>\n                    <div class=\"control-btn\">\n                        <i class=\"fas fa-edit\"></i>\n                        <i class=\"fas fa-trash\"></i>\n                    </div>\n                    <div class=\"item-tooltip\">\n                        <p>".concat(record.superior, "</p>\n                        <p>").concat(record.proj_code, "</p>\n                        <p>").concat(record.work_from.substr(0, 5), " - ").concat(record.work_to.substr(0, 5), "</p>\n                    </div>\n                ");
        }

        if (record.type === 'T') {
          newActivity.classList.add('type-travel');
          newActivity.innerHTML = "\n                    <div style=\"font-weight: 700;\">Podr\xF3\u017C</div>\n                    <div class=\"control-btn\">\n                        <i class=\"fas fa-edit\"></i>\n                        <i class=\"fas fa-trash\"></i>\n                    </div>\n                    <div class=\"item-tooltip\">\n                        <p>".concat(record.superior, "</p>\n                        <p>").concat(record.proj_code, "</p>\n                        <p>").concat(record.work_from.substr(0, 5), " - ").concat(record.work_to.substr(0, 5), "</p>\n                        <p>").concat(record.transport, "</p>\n                    </div>\n                ");
        }

        if (record.type === 'A') {
          newActivity.classList.add('type-absence');
          newActivity.innerHTML = "\n                    <div style=\"font-weight: 700;\">Nieobecno\u015B\u0107</div>\n                    <div class=\"control-btn\">\n                        <i class=\"fas fa-edit\"></i>\n                        <i class=\"fas fa-trash\"></i>\n                    </div>\n                    <div class=\"item-tooltip\">\n                        <p>".concat(record.superior, "</p>\n                        <p>").concat(record.absence, "</p>\n                        <p>").concat(record.work_from.substr(0, 5), " - ").concat(record.work_to.substr(0, 5), "</p>\n                    </div>\n                ");
        } // adjust time in day segment


        day.children[1].innerText = _this.adjustTime(day.children[1].innerText, record.work_from, record.work_to);
        sumWorkTime.innerText = _this.adjustSumWork(sumWorkTime.innerText, day.children[1].innerText); // add created div to grid

        day.parentElement.appendChild(newActivity);
      });
    }
    /**
     * 
     * @param {string} activity 'W'...
     * @param {object} record 
     */

  }, {
    key: "showActivityFields",
    value: function showActivityFields(activity) {
      var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // select activity fields
      var workFields = document.querySelectorAll('.work');
      var travelFields = document.querySelectorAll('.travel');
      var absenceFields = document.querySelectorAll('.absence');
      var fieldObj = null; // hide all selection fields

      workFields.forEach(function (field) {
        field.classList.add('hide');
      });
      travelFields.forEach(function (field) {
        field.classList.add('hide');
      });
      absenceFields.forEach(function (field) {
        field.classList.add('hide');
      });

      if (activity === 'W') {
        workFields.forEach(function (field) {
          field.classList.remove('hide');
        });
        fieldObj = new _addItemWork.default();
      }

      if (activity === 'T') {
        travelFields.forEach(function (field) {
          field.classList.remove('hide');
        });
        fieldObj = new _addItemTravel.default();
      }

      if (activity === 'A') {
        absenceFields.forEach(function (field) {
          field.classList.remove('hide');
        });
        fieldObj = new _addItemAbsence.default();
      }

      if (record !== null) {
        fieldObj.writeValuesFromRecord(fieldObj, record);
      }
    }
  }, {
    key: "updateSelectionFields",
    value: function updateSelectionFields(field, fieldData) {
      fieldData.forEach(function (item) {
        var newOption = document.createElement('option');
        newOption.value = item.name;
        newOption.innerText = item.name;
        field.appendChild(newOption);
      });
    }
  }]);

  return UI;
}();

exports.default = UI;
},{"./addItemWork.js":"addItemWork.js","./addItemTravel.js":"addItemTravel.js","./addItemAbsence.js":"addItemAbsence.js"}],"data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Data = /*#__PURE__*/function () {
  function Data() {
    _classCallCheck(this, Data);
  }

  _createClass(Data, null, [{
    key: "getRecordsActualMonth",
    value: function () {
      var _getRecordsActualMonth = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(year, month, type) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("/data/".concat(type, "/").concat(year, "-").concat(month)).catch(Data.handleErr);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getRecordsActualMonth(_x, _x2, _x3) {
        return _getRecordsActualMonth.apply(this, arguments);
      }

      return getRecordsActualMonth;
    }()
  }, {
    key: "handleErr",
    value: function handleErr(err) {
      console.log(err);
      var resp = new Response(JSON.stringify({
        code: 400,
        msg: 'error'
      }));
      return resp;
    }
  }, {
    key: "getFieldValues",
    value: function () {
      var _getFieldValues = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fieldName) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("/fields/".concat(fieldName));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getFieldValues(_x4) {
        return _getFieldValues.apply(this, arguments);
      }

      return getFieldValues;
    }()
  }, {
    key: "storeDB",
    value: function () {
      var _storeDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(fields) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("/data/".concat(fields.type), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(fields)
                });

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                data = _context3.sent;
                return _context3.abrupt("return", data);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function storeDB(_x5) {
        return _storeDB.apply(this, arguments);
      }

      return storeDB;
    }()
  }, {
    key: "updateDB",
    value: function () {
      var _updateDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(fields) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch("/data/".concat(fields.type, "/").concat(fields.id), {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(fields)
                });

              case 2:
                response = _context4.sent;
                _context4.next = 5;
                return response.json();

              case 5:
                data = _context4.sent;
                return _context4.abrupt("return", data);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateDB(_x6) {
        return _updateDB.apply(this, arguments);
      }

      return updateDB;
    }()
  }, {
    key: "deleteRecord",
    value: function () {
      var _deleteRecord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(type, id) {
        var response, resp;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch("/data/delete/".concat(type, "/").concat(id), {
                  method: 'DELETE'
                });

              case 2:
                response = _context5.sent;
                _context5.next = 5;
                return response.json();

              case 5:
                resp = _context5.sent;
                return _context5.abrupt("return", resp);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteRecord(_x7, _x8) {
        return _deleteRecord.apply(this, arguments);
      }

      return deleteRecord;
    }()
  }]);

  return Data;
}();

exports.default = Data;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _ui = _interopRequireDefault(require("./ui.js"));

var _data = _interopRequireDefault(require("./data.js"));

var _addItemWork = _interopRequireDefault(require("./addItemWork.js"));

var _addItemTravel = _interopRequireDefault(require("./addItemTravel.js"));

var _addItemAbsence = _interopRequireDefault(require("./addItemAbsence.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// -----------------
// --- SELECTORS ---
// -----------------
var selectMonth = document.getElementById('select-month');
var selectYear = document.getElementById('select-year');
var aside = document.querySelector('.aside');
var addItemAbsence = document.getElementById('add-item-absence');
var addBtn = document.getElementById('add-btn');
var updateBtn = document.getElementById('update-btn');
var cancelBtn = document.getElementById('cancel-btn');
var selectDate = document.getElementById('select-date');
var notiQuestion = document.querySelector('.noti-question');
var addItemType = document.getElementById('add-item-type');
var spinner = document.getElementById('spinner');
var records_work = [];
var records_absence = [];
var records_travel = [];
var absence = [];
var elemID = ''; // ---------------
// EVENT LISTENERS
// ---------------

window.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var date, actualMonth, actualYear, actualDay, superior, country, projCode, transport, regPlate, addItemSuperior, addItemCountryStart, addItemCountryStop, addItemProjCode, addItemAbsence, addItemTransport, addItemRegPlate, i;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // get actual day, month, year
          date = new Date(); // month [1-12]

          actualMonth = date.getMonth() + 1;
          actualYear = date.getFullYear();
          actualDay = date.getDate();
          spinner.className = 'show';
          _context.next = 7;
          return _data.default.getRecordsActualMonth(actualYear, actualMonth, 'work');

        case 7:
          records_work = _context.sent;
          _context.next = 10;
          return _data.default.getRecordsActualMonth(actualYear, actualMonth, 'absence');

        case 10:
          records_absence = _context.sent;
          _context.next = 13;
          return _data.default.getRecordsActualMonth(actualYear, actualMonth, 'travel');

        case 13:
          records_travel = _context.sent;
          _context.next = 16;
          return _data.default.getFieldValues('superior');

        case 16:
          superior = _context.sent;
          _context.next = 19;
          return _data.default.getFieldValues('country');

        case 19:
          country = _context.sent;
          _context.next = 22;
          return _data.default.getFieldValues('proj_code');

        case 22:
          projCode = _context.sent;
          _context.next = 25;
          return _data.default.getFieldValues('absence');

        case 25:
          absence = _context.sent;
          _context.next = 28;
          return _data.default.getFieldValues('transport');

        case 28:
          transport = _context.sent;
          _context.next = 31;
          return _data.default.getFieldValues('reg_plate');

        case 31:
          regPlate = _context.sent;
          addItemSuperior = document.getElementById('add-item-superior');
          addItemCountryStart = document.getElementById('add-item-country-start');
          addItemCountryStop = document.getElementById('add-item-country-stop');
          addItemProjCode = document.getElementById('add-item-proj-code');
          addItemAbsence = document.getElementById('add-item-absence');
          addItemTransport = document.getElementById('add-item-transport');
          addItemRegPlate = document.getElementById('add-item-reg-plate');

          _ui.default.updateSelectionFields(addItemSuperior, superior);

          _ui.default.updateSelectionFields(addItemCountryStart, country);

          _ui.default.updateSelectionFields(addItemCountryStop, country);

          _ui.default.updateSelectionFields(addItemProjCode, projCode);

          _ui.default.updateSelectionFields(addItemAbsence, absence);

          _ui.default.updateSelectionFields(addItemTransport, transport);

          _ui.default.updateSelectionFields(addItemRegPlate, regPlate);

          localStorage.setItem('records_work', JSON.stringify(records_work));
          localStorage.setItem('records_absence', JSON.stringify(records_absence));
          localStorage.setItem('records_travel', JSON.stringify(records_travel)); // adjust the actual month

          selectMonth.children[actualMonth - 1].selected = true; // adjust the actual year

          for (i = 0; i < selectYear.children.length; i++) {
            if (selectYear.children[i].value == actualYear) {
              selectYear.children[i].selected = true;
            }
          } // adjust month grid


          document.body.insertBefore(_ui.default.adjustMonthGrid(actualYear, actualMonth, actualDay), aside); // add activity to grid

          records_work.forEach(function (record) {
            _ui.default.addActivity(record);
          }); // add activity to grid

          records_absence.forEach(function (record) {
            _ui.default.addActivity(record);
          }); // add activity to grid

          records_travel.forEach(function (record) {
            _ui.default.addActivity(record);
          });
          spinner.className = spinner.className.replace('show', '');

        case 56:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
selectDate.addEventListener('click', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var selectedMonth, selectedYear, containerGrid, sumWorkTime, date, actualDay;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(e.target.id === 'select-month' || e.target.id === 'select-year')) {
              _context2.next = 25;
              break;
            }

            // get month number (1 - 12)
            selectedMonth = document.getElementById('select-month').value;
            selectedYear = document.getElementById('select-year').value;
            containerGrid = document.querySelector('.container-grid');
            sumWorkTime = document.getElementById('sum-work-time');
            sumWorkTime.innerText = '00:00';
            date = new Date();
            actualDay = date.getDate();
            _context2.next = 10;
            return _data.default.getRecordsActualMonth(selectedYear, selectedMonth, 'work');

          case 10:
            records_work = _context2.sent;
            _context2.next = 13;
            return _data.default.getRecordsActualMonth(selectedYear, selectedMonth, 'absence');

          case 13:
            records_absence = _context2.sent;
            _context2.next = 16;
            return _data.default.getRecordsActualMonth(selectedYear, selectedMonth, 'travel');

          case 16:
            records_travel = _context2.sent;
            localStorage.setItem('records_work', JSON.stringify(records_work));
            localStorage.setItem('records_absence', JSON.stringify(records_absence));
            localStorage.setItem('records_travel', JSON.stringify(records_travel)); // remove the previous grid

            containerGrid.remove(); // adjust month grid

            document.body.insertBefore(_ui.default.adjustMonthGrid(selectedYear, selectedMonth, actualDay), aside); // add activity to grid

            records_work.forEach(function (record) {
              _ui.default.addActivity(record);
            }); // add activity to grid

            records_absence.forEach(function (record) {
              _ui.default.addActivity(record);
            }); // add activity to grid

            records_travel.forEach(function (record) {
              _ui.default.addActivity(record);
            });

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
document.addEventListener('click', function (e) {
  // click on work / travel element -> edit existing record
  if (e.target.classList.contains('fa-edit')) {
    // W-1, A-3, T-5
    elemID = e.target.parentElement.parentElement.dataset.id;
    var elemType = elemID.split('-')[0];
    var elemIdNum = elemID.split('-')[1];
    var index = 0;
    var typeStorage = {
      'W': 'records_work',
      'T': 'records_travel',
      'A': 'records_absence'
    };
    var type = {
      'W': 'Praca',
      'T': 'Podróż',
      'A': 'Nieobecność'
    };
    var records = JSON.parse(localStorage.getItem(typeStorage[elemType]));
    index = records.findIndex(function (record) {
      return record.id == elemIdNum;
    });

    if (index === -1) {
      console.error('index not found');
      return;
    }

    var addItemDate = document.getElementById('add-item-date');
    addItemDate.value = records[index].date;
    addItemType.value = type[elemType];

    _ui.default.showActivityFields(records[index].type, records[index]);

    addBtn.classList.add('hide');
    updateBtn.classList.remove('hide');
    aside.classList.remove('hide-aside');
  } // delete record


  if (e.target.classList.contains('fa-trash')) {
    var _notiQuestion = document.querySelector('.noti-question');

    elemID = e.target.parentElement.parentElement.dataset.id;
    _notiQuestion.style.top = '0';
  } // add new activity


  if (e.target.classList.contains('item-info')) {
    var date = document.getElementById('add-item-date');
    var actualYear = document.getElementById('select-year').value;
    var actualMonth = document.getElementById('select-month').value;
    var selectedDay = e.target.dataset.day;
    var lastDayOfMonth = new Date(actualYear, actualMonth, 0).getDate();
    actualMonth = actualMonth < 10 ? "0".concat(actualMonth) : actualMonth;
    selectedDay = selectedDay < 10 ? "0".concat(selectedDay) : selectedDay; // set min and max attributes for date

    date.setAttribute('min', "".concat(actualYear, "-").concat(actualMonth, "-01"));
    date.setAttribute('max', "".concat(actualYear, "-").concat(actualMonth, "-").concat(lastDayOfMonth));
    date.value = "".concat(actualYear, "-").concat(actualMonth, "-").concat(selectedDay);
    addBtn.classList.remove('hide');
    updateBtn.classList.add('hide');
    aside.classList.remove('hide-aside');
  }
});
document.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('item-type')) {
    var tooltip = e.target.querySelector('.item-tooltip');
    tooltip.classList.add('tooltip-show');
  }
});
document.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('item-type')) {
    var tooltip = e.target.querySelector('.item-tooltip');
    tooltip.classList.remove('tooltip-show');
  }
}); // change visible fields when activity field changes

addItemType.addEventListener('change', function (e) {
  var activityTrans = {
    'Praca': 'W',
    'Nieobecność': 'A',
    'Podróż': 'T'
  };

  _ui.default.showActivityFields(activityTrans[e.currentTarget.value]);

  document.getElementById('add-item-work-from').disabled = false;
  document.getElementById('add-item-work-to').disabled = false;
});
addItemAbsence.addEventListener('change', function (e) {
  var workFrom = document.getElementById('add-item-work-from');
  var workTo = document.getElementById('add-item-work-to');
  var selectedAbsence = absence.find(function (item) {
    return item.name === e.currentTarget.value;
  }); // work start = 00:00, work end = 00:00

  if (selectedAbsence.type === 'null-time') {
    workFrom.value = '00:00';
    workFrom.disabled = true;
    workTo.value = '00:00';
    workTo.disabled = true;
  } // work start = undef, work end = undef


  if (selectedAbsence.type === 'part-time') {
    workFrom.value = '';
    workFrom.disabled = false;
    workTo.value = '';
    workTo.disabled = false;
  } // work start = 08:00, work end = 16:00


  if (selectedAbsence.type === 'full-time') {
    workFrom.value = '08:00';
    workFrom.disabled = true;
    workTo.value = '16:00';
    workTo.disabled = true;
  }
}); // add button

addBtn.addEventListener('click', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
    var type, fieldsObj, req, notiInfo;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();
            type = document.getElementById('add-item-type').value;
            fieldsObj = null;
            if (type === 'Praca') fieldsObj = new _addItemWork.default();
            if (type === 'Podróż') fieldsObj = new _addItemTravel.default();
            if (type === 'Nieobecność') fieldsObj = new _addItemAbsence.default();

            if (!fieldsObj.requiredCheckErr()) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return");

          case 8:
            console.log(fieldsObj.getValues(0)); // insert data do DB

            _context3.next = 11;
            return _data.default.storeDB(fieldsObj.getValues(0));

          case 11:
            req = _context3.sent;
            // close sidebar and reload page
            aside.classList.add('hide-aside'); // show notification

            notiInfo = document.querySelector('.noti-info');
            notiInfo.children[0].children[0].innerText = 'Rekord dodano!';
            notiInfo.style.top = '0'; // reload page after 3s

            setTimeout(function () {
              window.location.reload();
            }, 3000);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}()); // update button

updateBtn.addEventListener('click', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
    var type, fieldsObj, elemIdNum, req, notiInfo;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            e.preventDefault();
            type = document.getElementById('add-item-type').value;
            fieldsObj = null;
            elemIdNum = elemID.split('-')[1];
            if (type === 'Praca') fieldsObj = new _addItemWork.default();
            if (type === 'Podróż') fieldsObj = new _addItemTravel.default();
            if (type === 'Nieobecność') fieldsObj = new _addItemAbsence.default();

            if (!fieldsObj.requiredCheckErr()) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return");

          case 9:
            _context4.next = 11;
            return _data.default.updateDB(fieldsObj.getValues(elemIdNum));

          case 11:
            req = _context4.sent;
            // close sidebar
            aside.classList.add('hide-aside'); // show notification

            notiInfo = document.querySelector('.noti-info');
            notiInfo.children[0].children[0].innerText = 'Rekord zmieniono!';
            notiInfo.style.top = '0'; // reload page after 3s

            setTimeout(function () {
              window.location.reload();
            }, 3000);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}()); // cancel button - close side bar

cancelBtn.addEventListener('click', function (e) {
  e.preventDefault();
  aside.classList.add('hide-aside');
}); // notification handlers

notiQuestion.addEventListener('click', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
    var notiInfo, elemType, elemIdNum, type, answer;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(e.target.id === 'noti-btn-yes')) {
              _context5.next = 11;
              break;
            }

            notiInfo = document.querySelector('.noti-info');
            elemType = elemID.substr(0, 1);
            elemIdNum = elemID.substr(2, 1);
            type = {
              'W': 'work',
              'T': 'travel',
              'A': 'absence'
            }; // delete from db
            // 1 -> success, 0 -> fail

            _context5.next = 7;
            return _data.default.deleteRecord(type[elemType], elemIdNum);

          case 7:
            answer = _context5.sent;
            // button -> div.d-flex -> div -> div.blur -> div.notification
            e.target.parentElement.parentElement.parentElement.parentElement.style.top = '-100%';
            notiInfo.style.top = '0';
            setTimeout(function () {
              window.location.reload();
            }, 3000);

          case 11:
            if (e.target.id === 'noti-btn-no') {
              e.currentTarget.style.top = '-100%';
            }

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x4) {
    return _ref5.apply(this, arguments);
  };
}());
},{"./ui.js":"ui.js","./data.js":"data.js","./addItemWork.js":"addItemWork.js","./addItemTravel.js":"addItemTravel.js","./addItemAbsence.js":"addItemAbsence.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61579" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.js.map