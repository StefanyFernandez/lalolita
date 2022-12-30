"use strict";
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);

/* import { assetPrefix } from "../../next.config"; */



const assetPrefix = "../";

const Image = ({
  source,
  title,
  className,
  format,
  width,
  height,
  folder,
  prefix
}) => {
  const disableContextMenu = e => {
    e.preventDefault();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("picture", {
    className: `image${className || ""}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("source", {
      type: "image/webp",
      srcSet: `${assetPrefix}${prefix || ""}img/${folder || ""}desktop/${source}@1x.webp 1x, 
                ${assetPrefix}${prefix || ""}img/${folder || ""}desktop/${source}@2x.webp 2x, 
                ${assetPrefix}${prefix || ""}img/${folder || ""}desktop/${source}@4x.webp 4x`,
      media: "(min-width: 1025px)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("source", {
      type: "image/webp",
      srcSet: `${assetPrefix}${prefix || ""}img/${folder || ""}tablet/${source}@1x.webp 1x, 
                ${assetPrefix}${prefix || ""}img/${folder || ""}tablet/${source}@2x.webp 2x`,
      media: "(max-width: 1024px)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("source", {
      type: "image/webp",
      srcSet: `${assetPrefix}${prefix || ""}img/${folder || ""}mobile/${source}@1x.webp 1x, 
               ${assetPrefix}${prefix || ""}img/${folder || ""}mobile/${source}@2x.webp 2x`,
      media: "(max-width: 768px)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      onContextMenu: disableContextMenu,
      alt: title,
      width: width || "100%",
      height: height || "100%",
      src: `${assetPrefix}${prefix || ""}img/${folder || ""}desktop/${source}@1x.${format || "png"}`,
      srcSet: `${assetPrefix}${prefix || ""}img/${folder || ""}desktop/${source}@1x.${format || "png"} 1x, 
                ${assetPrefix}${prefix || ""}img/${folder || ""}desktop/${source}@2x.${format || "png"} 2x, 
                ${assetPrefix}${prefix || ""}img/${folder || ""}desktop/${source}@4x.${format || "png"} 4x`
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ })

};
;