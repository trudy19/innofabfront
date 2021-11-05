import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { editmarquesReducer, marquesReducer, savemarquesReducer } from "./reducers/marqueReducer";

const initialState = {

};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    marque: marquesReducer,
    savemarque:savemarquesReducer,
    editmarque:editmarquesReducer

  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
