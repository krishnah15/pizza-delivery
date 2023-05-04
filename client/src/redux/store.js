import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userRedux from "./userRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    REGISTER,
    PURGE
} from 'redux-persist';

import storage from "redux-persist/lib/storage";
import cartRedux from "./cartRedux";

const persistConfig ={
    key: "root",
    version: 1,
    storage,

}

const combinedReducers = combineReducers({user: userRedux, cart: cartRedux});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer:{
        user: persistedReducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER,PURGE]
            },
        })
    
});

export let persistor = persistStore(store);