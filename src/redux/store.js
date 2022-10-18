import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import { chatsReducer } from "./chatsReducer";
import { messageReducer } from "./messageReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

// комбинируем редьюсеры
const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаем store с использованием persistedReducer
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
