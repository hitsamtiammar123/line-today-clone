import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { main, bookmarks } from './initialStates';

function mainReducers(state = main, action){
  const { payload, type } = action;
    switch(type){
      case 'MAIN_ONLOAD':
        return {
          ...state,
          mainParams: payload,
          mainFetch: true,
          action: type,
        };
      case 'MAIN_SUCCESS':
        return {
          ...state,
          mainResponse: payload.result,
          mainFetch: false,
          action: type,
        };
      case 'MAIN_FAILED':
        return {
          ...state,
          mainErrorResponse: payload,
          mainFetch: false,
          action: type,
        }
      default:
    }
    return state;
}

function bookmarkReducers(state = bookmarks, action){
  const { payload, type } = action;
  switch(type){
    case 'SET_BOOKMARK':
      return {
        ...state,
        list: [
          ...state.list,
          payload
        ],
        action: type,
      }
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        list: state.list.filter(d => d.id !== payload.id),
        action: type,
      }
    default:
  }
  return state;
}

const composeEnhancer =
  (process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const reducers = combineReducers({
  main: mainReducers,
  bookmark: bookmarkReducers,
});

const persistConfig = {
  key: 'line-today-clone-by-hitsam-tiammar',
  storage,
  whitelist: ['bookmark']
};

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(ReduxThunk)));
const persistor = persistStore(store)

export {
  store, persistor
};

export default store;