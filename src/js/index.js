import loglevel from "loglevel";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Form from  './components/presentational/Form/component'
//import Container from  './components//presentational/Container/component'
import Login from './components/containers/login/component'
import store from './store/index'
import style from '../styles/index.scss'

loglevel.info('src/js/components/form/component')


store.subscribe(() => loglevel.info('suscribed to store'))
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )

console.log(store.getState())


render(
<Provider store={store}>
    <div className={style.mainWrapper}>
        <Login isSpaced className={style.mainContainer} isVisible>
            <Form hasAccept='Ingresar' />
        </Login>
    </div>
</Provider>,
document.getElementById("root")
);
