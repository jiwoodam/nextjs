import 'raf/polyfill';
import 'es6-shim';
import 'es6-promise';
import 'reset-css/reset.css';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from '../src/store/index';
import Cart from '../src/containers/desktop/Cart';




export default () => <div>About us

    <Provider store={store}>
        <Cart/>
    </Provider>
</div>