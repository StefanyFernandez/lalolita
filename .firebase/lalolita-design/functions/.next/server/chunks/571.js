"use strict";
exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 6492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Drive = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
  className: "drive",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "87.3",
    height: "78",
    viewBox: "0 0 87.3 78",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "var(--black-100)",
      d: "M6.6,66.8l3.8,6.7c0.8,1.4,1.9,2.5,3.3,3.3L27.5,53H0c0,1.5,0.4,3.1,1.2,4.5L6.6,66.8z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "var(--black-100)",
      d: "M43.7,25L29.9,1.2c-1.4,0.8-2.5,1.9-3.3,3.3l-25.4,44C0.4,49.9,0,51.4,0,53h27.5L43.7,25z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "var(--black-100)",
      d: "M73.6,76.8c1.3-0.8,2.5-1.9,3.3-3.3l1.6-2.8l7.7-13.2c0.8-1.4,1.2-3,1.2-4.5H59.8l5.9,11.5L73.6,76.8z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "var(--black-100)",
      d: "M43.7,25L57.4,1.2C56.1,0.4,54.5,0,52.9,0H34.4c-1.6,0-3.1,0.4-4.5,1.2L43.7,25z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "var(--black-100)",
      d: "M59.8,53H27.5L13.8,76.8c1.4,0.8,2.9,1.2,4.5,1.2h50.8c1.6,0,3.2-0.4,4.5-1.2L59.8,53z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "var(--black-100)",
      d: "M73.4,26.5l-12.7-22c-0.8-1.4-2-2.5-3.3-3.3L43.7,25l16.2,28h27.4c0-1.5-0.4-3.1-1.2-4.5L73.4,26.5z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("polygon", {
      fill: "var(--white-100)",
      points: "43.6,27 29,1.7 30.8,0.7 43.6,23 56.5,0.7 58.3,1.7 "
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("polygon", {
      fill: "var(--white-100)",
      points: "14.6,77.3 12.9,76.3 25.8,54 0,54 0,52 29.2,52 "
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("polygon", {
      fill: "var(--white-100)",
      points: "72.7,77.3 58.1,52 87.2,52 87.2,54 61.5,54 74.4,76.3 "
    })]
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drive);

/***/ }),

/***/ 1175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const WorkItem = ({
  link,
  name,
  category,
  image,
  size,
  project,
  detail,
  width,
  height
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
  className: `workItem${size ? ` ${size}` : ""}`,
  id: `${category} ${link}`,
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    title: name,
    href: `/work/${category.toLowerCase().replace(/\s+/g, "")}/${link}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
      className: "name",
      children: name
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    prefix: `${detail ? "../" : ""}`,
    title: name,
    folder: `works/${project}/`,
    source: image,
    width: width,
    height: height
    /* format="jpeg" */

  })]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkItem);

/***/ }),

/***/ 4271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* binding */ TabsNames),
/* harmony export */   "_B": () => (/* binding */ works),
/* harmony export */   "eA": () => (/* binding */ tabs),
/* harmony export */   "ml": () => (/* binding */ cpGoImages),
/* harmony export */   "xQ": () => (/* binding */ lalalandImages)
/* harmony export */ });
let TabsNames;

(function (TabsNames) {
  TabsNames["All"] = "All";
  TabsNames["Web"] = "UI - UX";
  TabsNames["Branding"] = "Branding";
  TabsNames["Lettering"] = "Lettering";
  TabsNames["Other"] = "Other Things";
})(TabsNames || (TabsNames = {}));

const tabs = [{
  category: TabsNames.All
}, {
  category: TabsNames.Web
}, {
  category: TabsNames.Branding
}, {
  category: TabsNames.Lettering
}, {
  category: TabsNames.Other
}];
const works = [{
  name: "Lalaland",
  link: "lalaland",
  image: "01",
  category: TabsNames.Web,
  size: "big",
  width: 1911,
  height: 1469
}, {
  name: "CP GO",
  link: "cp-go",
  image: "01",
  category: TabsNames.Web,
  size: "big",
  width: 1800,
  height: 1800
}, {
  name: "Dr. Q",
  link: "dr-q",
  image: "cover",
  category: TabsNames.Web,
  size: "tall",
  width: 1600,
  height: 1600
},
/* {
  name: 'Cervantes',
  link: 'cervantes',
  image: 'photo-2',
  category: TabsNames.Web,
}, */

/* {
  name: 'Nowo',
  link: 'nowo',
  image: 'photo-2',
  category: TabsNames.Web,
  size: 'tall',
}, */

/* {
  name: 'Read Garden',
  link: 'read-garden',
  image: 'photo-2',
  category: TabsNames.Web,
  size: 'big',
}, */
{
  name: "Luck",
  link: "luck",
  image: "luck",
  category: TabsNames.Lettering,
  size: "big",
  width: 1800,
  height: 1800
}, {
  name: "Chicky Nuggies",
  link: "chicky-nuggies",
  image: "chicky-nuggies",
  category: TabsNames.Lettering,
  width: 1800,
  height: 1800
}, {
  name: "Hello World",
  link: "hello-world",
  image: "hello-world",
  category: TabsNames.Lettering,
  width: 1800,
  height: 1800
}, {
  name: "Every saint...",
  link: "saint",
  image: "saint",
  category: TabsNames.Lettering,
  width: 1800,
  height: 1800
}, {
  name: "Soul Shine",
  link: "soul-shine",
  image: "soul-shine",
  category: TabsNames.Lettering,
  width: 1800,
  height: 1800
}, {
  name: "Stay Weird",
  link: "stay-weird",
  image: "stay-weird",
  category: TabsNames.Lettering,
  size: "big",
  width: 1800,
  height: 1800
}, {
  name: "Timing",
  link: "timing",
  image: "timing",
  category: TabsNames.Lettering,
  size: "big",
  width: 1800,
  height: 1800
}
/* {
  name: 'Los Cuates',
  link: 'los-cuates',
  image: 'photo-1',
  category: TabsNames.Branding,
  size: 'big',
}, */

/* {
  name: 'Publistone',
  link: 'publistone',
  image: 'photo-2',
  category: TabsNames.Branding,
  size: 'wide',
}, */
]; // Internal Pages

const lalalandImages = [{
  name: "01",
  title: "Lalaland"
}, {
  name: "02",
  title: "Lalaland"
}, {
  name: "04",
  title: "Lalaland",
  size: "big"
}, {
  name: "05",
  title: "Lalaland"
}, {
  name: "06",
  title: "Lalaland"
}, {
  name: "07",
  title: "Lalaland",
  size: "big"
}];
const cpGoImages = [{
  name: "03",
  title: "CP Go"
}, {
  name: "02",
  title: "CP Go"
}, {
  name: "04",
  title: "CP Go"
}, {
  name: "05",
  title: "CP Go"
}, {
  name: "06",
  title: "CP Go",
  size: "big"
}, {
  name: "07",
  title: "CP Go"
}, {
  name: "08",
  title: "CP Go"
}, {
  name: "09",
  title: "CP Go",
  size: "big"
}, {
  name: "10",
  title: "CP Go"
}, {
  name: "11",
  title: "CP Go",
  size: "tall"
}, {
  name: "12",
  title: "CP Go"
}, {
  name: "13",
  title: "CP Go"
}, {
  name: "14",
  title: "CP Go"
}, {
  name: "18",
  title: "CP Go",
  size: "tall"
}, {
  name: "15",
  title: "CP Go"
}, {
  name: "17",
  title: "CP Go"
}];

/***/ })

};
;