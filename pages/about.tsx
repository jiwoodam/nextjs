import 'raf/polyfill';
import 'es6-shim';
import 'es6-promise';
import 'reset-css/reset.css';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from '../src/store/index';
import Test from '../src/containers/desktop/Test';


class About extends React.Component<null, React.ComponentState> {
    render() {
        return(
            <div>About us
                <Provider store={store}>
                    <Test/>
                </Provider>
            </div>
        );
    }

}
export default About;