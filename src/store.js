import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { applyMiddleware, combineReducers, createStore } from "redux"
import SignupReducer from "./reducers/SignupReducer"

const reducer = combineReducers({
    Signup: SignupReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store