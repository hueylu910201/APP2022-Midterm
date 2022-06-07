import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore,persistReducer } from "redux-persist";
import {addFavReducer} from '../actions/reducer';

const initialState = { };
const reducer = combineReducers({
  favDrink: addFavReducer,
});

const persistConfig={
  key:'root',
  storage:AsyncStorage,
};


const Store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default Store;
