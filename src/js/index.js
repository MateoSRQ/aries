import loglevel from "loglevel";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Form from  './components/Form/component'
import Container from  './components/Container/component'
import store from './store/index'
import style from '../styles/index.scss'

loglevel.info('src/js/components/form/component')


store.subscribe(() => loglevel.info('suscribed to store'))
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
//


render(
<Provider store={store}>
    <div className={style.mainWrapper}>
        <Container isHorizontallyCentered isSpaced className={style.mainContainer}>
            <Form />
        </Container>
    </div>
</Provider>,
document.getElementById("root")
);
