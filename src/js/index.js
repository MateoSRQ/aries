import loglevel from "loglevel";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Form from  './components/Form/component'
import store from './store/index'

loglevel.info('src/js/components/form/component')


store.subscribe(() => loglevel.info('suscribed to store'))
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
//
render(
<Provider store={store}>
    <Form />
</Provider>,
document.getElementById("root")
);
