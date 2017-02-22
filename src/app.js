import React from 'react';
import { render } from 'react-dom';

//Import components:
import App from "./js/app";
import Single from "./js/single";
import PhotoGrid from "./js/photoGrid";

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './js/store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}>

                </IndexRoute>
                        <Route path="/view/:postId" component={Single}>
                    </Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById("container"));