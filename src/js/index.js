import loglevel from "loglevel";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { addArticle } from "./actions/index";

import Form from './components/form/component'

loglevel.info('src/js/index')
store.subscribe(() => loglevel.info('suscribed to store'))
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
//
render(
<Provider store={store}>
    <Form />
</Provider>,
document.getElementById("root")
);
