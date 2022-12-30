"use strict";
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 1577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Arrow = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
  className: "arrow small",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: "14",
    height: "9",
    viewBox: "0 0 14 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M1 4.62963H13M13 4.62963L9.09302 1M13 4.62963L9.09302 8",
      stroke: "var(--black-100)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arrow);

/***/ }),

/***/ 6958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Behance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9812);
/* harmony import */ var _Dribbble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6718);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(528);
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1577);
/* harmony import */ var _utils_worksList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4271);
/* harmony import */ var _WorkItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1175);
/* harmony import */ var _Drive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6492);
/* harmony import */ var _Codepen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8021);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const WorkLayout = ({
  children,
  name,
  description,
  personal,
  workPlace,
  date,
  role,
  client,
  industry,
  tools,
  print,
  relatedLinks
}) => {
  const related = () => {
    const rel = [];

    for (let i = 0; i < _utils_worksList__WEBPACK_IMPORTED_MODULE_6__/* .works.length */ ._B.length; i++) {
      const {
        link
      } = _utils_worksList__WEBPACK_IMPORTED_MODULE_6__/* .works */ ._B[i];

      if (relatedLinks.includes(link)) {
        rel.push(_utils_worksList__WEBPACK_IMPORTED_MODULE_6__/* .works */ ._B[i]);
      }
    }

    return rel;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: name,
    mainClass: `workDetail${print ? " print" : ""}`,
    workActive: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("article", {
      className: "intro",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/work/",
        className: "goBackClick",
        title: "Go Back",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Arrow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
          children: "Volver"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: description ? "left" : "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("h2", {
            className: name.length > 7 ? "long" : "",
            children: [name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
              className: "dot",
              children: "."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            className: "info",
            children: [personal && "Personal project ", !personal && "Created at ", !personal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("b", {
              children: workPlace
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("b", {
              children: ["- ", date]
            })]
          }), role && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            className: "info",
            children: ["Role - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("b", {
              children: role
            })]
          }), !personal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            className: "info",
            children: ["Client - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("b", {
              children: client
            })]
          }) : null, industry && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            className: "info",
            children: ["Industry - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("b", {
              children: industry
            })]
          }), tools && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            className: "info",
            children: ["Tools - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("b", {
              children: tools
            })]
          })]
        }), description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: "right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            className: "description",
            children: description
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("article", {
      className: "contentWrapper",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("article", {
      className: "otherWorks",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h4", {
        children: "You might like these too"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("ul", {
        className: "list",
        children: related().map(i => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_WorkItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          link: i.link,
          category: i.category,
          name: i.name,
          image: i.image,
          size: i.size,
          project: i.link,
          detail: true
        }, i.link))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("article", {
      className: "moreWorks",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h3", {
        children: "We have more works in here!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "icons",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
          target: "_blank",
          title: "Go to Behance",
          rel: "noreferrer",
          href: "https://www.behance.net/tefyfernandez",
          className: "behance",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Behance__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
          target: "_blank",
          title: "Go to Dribbble",
          rel: "noreferrer",
          href: "https://dribbble.com/tefyfernandez",
          className: "dribbble",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Dribbble__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
          target: "_blank",
          title: "Go to Codepen",
          rel: "noreferrer",
          href: "https://codepen.io/tefyfernandez",
          className: "codepen",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Codepen__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
          target: "_blank",
          title: "Go to Drive",
          rel: "noreferrer",
          href: "https://drive.google.com/drive/folders/1DdiODWVebV52cFL5o17qGW_pEiF3GtAU?usp=sharing",
          className: "drive",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Drive__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkLayout);

/***/ })

};
;