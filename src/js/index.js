import loglevel from "loglevel";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import LoginContainer from './components/containers/login/login_container'
import LoginForm from './components/containers/login/login_form'
import store from './store/index'
import style from '../styles/index.scss'

loglevel.info('src/js/components/form/component')


console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

render(
<Provider store={store}>
    <div className={style.mainWrapper}>
        <LoginContainer isSpaced className={style.mainContainer} isVisible={true}>
            <LoginForm hasAccept='Ingresar' />
        </LoginContainer>
    </div>
</Provider>,
document.getElementById("root")
);
