/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function SVGEE() {
	  'use strict';

	  // API to expose
	  var SVGEE = {
	    addClass    : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lib/addClass\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    animate     : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"animate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    circle      : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"circle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    closeSVG    : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"closeSVG\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    createSVG   : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"createSVG\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    ellipse     : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ellipse\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    fill        : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fill\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    g           : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    group       : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    line        : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"line\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    nGon        : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"nGon\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    polygon     : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"polygon\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    polyline    : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"polyline\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    rect        : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rect\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    removeClass : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"removeClass\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    stroke      : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"stroke\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    square      : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"square\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    tessellate  : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tessellate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    text        : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"text\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    tile        : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tile\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    toggleClass : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"toggleClass\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	  };

	  // actually expose the API
	  this.SVGEE = SVGEE;
	})();


/***/ }
/******/ ])