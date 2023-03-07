"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./stores/user/reducers.js
/* harmony default export */ const reducers = ({
    setCookie (state, { payload  }) {
        state.cookie = payload;
    }
});

;// CONCATENATED MODULE: ./services/userServices.js
async function login(data) {
    console.log(data);
}
;

;// CONCATENATED MODULE: ./stores/user/thunks.js


const thunks_login = (0,toolkit_namespaceObject.createAsyncThunk)("auth/login", async (data, thunkAPI)=>{
    try {
        const res = await login(data);
        return res;
    } catch (error) {
        console.log(error);
        if (error.status) {
            const message = error.message;
            return thunkAPI.rejectWithValue(message);
        } else {
            return thunkAPI.rejectWithValue("Something went wrong");
        }
    }
});

;// CONCATENATED MODULE: ./stores/user/extraReducers.js

const getAuth = {
    [thunks_login.pending]: (state, action)=>{
        state.loading = true;
    },
    [thunks_login.fulfilled]: (state, action)=>{
        state.loading = false;
        state.token = action.payload;
    },
    [thunks_login.rejected]: (state, action)=>{
        state.loading = false;
    }
};
/* harmony default export */ const extraReducers = ({
    ...getAuth
});

;// CONCATENATED MODULE: ./stores/user/userSlice.js



const initialState = {
    loading: false,
    token: null,
    name: "",
    cookie: "",
    email: ""
};
const userSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "user",
    initialState,
    reducers: reducers,
    extraReducers: extraReducers
});
const { setCookie  } = userSlice.actions;
/* harmony default export */ const user_userSlice = (userSlice.reducer);

;// CONCATENATED MODULE: ./stores/rootReducer.js


const rootReducer = (0,toolkit_namespaceObject.combineReducers)({
    user: user_userSlice
});
/* harmony default export */ const stores_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./stores/index.js


const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: stores_rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
/* harmony default export */ const stores = (store);

;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: stores,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
;
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9006));
module.exports = __webpack_exports__;

})();