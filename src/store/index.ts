import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import index from './../reducers/index';


const logger = createLogger();


const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

const store = createStore(index, /* preloadedState, */ composeEnhancers(
    applyMiddleware(logger, ReduxThunk),

));

export default store;