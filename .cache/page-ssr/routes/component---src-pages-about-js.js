"use strict";
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/jackson/Workspaces/JS/yandhi.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(621);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(31);
;// CONCATENATED MODULE: ./src/components/layout.module.css
// Exports
var sections = "layout-module--sections--1NoKs";
var container = "layout-module--container--YM7Lx";
var pages = "layout-module--pages--659VS";
var title = "layout-module--title--3Tmt6";
var heading = "layout-module--heading--2By-2";
var navLinks = "layout-module--nav-links--1VlO2";
var navLinkItem = "layout-module--nav-link-item--31U8T";
var navLinkText = "layout-module--nav-link-text--ExV28";

;// CONCATENATED MODULE: ./src/components/layout.js
const activePage={color:'white',background:'rgb(128, 61, 83)'};const Layout=({pageTitle,children})=>{return/*#__PURE__*/index_js_.createElement("ul",{className:sections},/*#__PURE__*/index_js_.createElement("title",null,pageTitle),/*#__PURE__*/index_js_.createElement("div",{className:pages},/*#__PURE__*/index_js_.createElement("h1",{className:title},"jackson"),/*#__PURE__*/index_js_.createElement("nav",null,/*#__PURE__*/index_js_.createElement("ul",{className:navLinks},/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/",className:navLinkText,activeStyle:activePage},"Home")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/langs",className:navLinkText,activeStyle:activePage},"Languages")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/about",className:navLinkText,activeStyle:activePage},"About Me"))))),/*#__PURE__*/index_js_.createElement("div",{className:container},/*#__PURE__*/index_js_.createElement("main",null,/*#__PURE__*/index_js_.createElement("h1",{className:heading},pageTitle),children)));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(621);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(792);
const AboutPage=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{pageTitle:"About Me"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"18, freshman at GSU in Pre-Computer Science"));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map