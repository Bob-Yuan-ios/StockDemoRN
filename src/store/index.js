import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';

import thunk from 'redux-thunk';

export default function configureStore(initState) {
    const store = createStore(
        rootReducer,
        initState,
        applyMiddleware(thunk)
    );

    global.AppReduxState = store;

    return store;
}
