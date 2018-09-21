import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import index from './../reducers/index';

const logger = createLogger();

//declare const useReduxDevTools: any;

const composers = compose(
    applyMiddleware(logger, ReduxThunk)//,
    //useReduxDevTools && window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f
);

const store = createStore(index, composers);

export default store;