import loglevel from "loglevel"
import React from "react"
import {render} from "react-dom"
import {Button} from 'semantic-ui-react'
import style from './style.scss'

loglevel.info('src/js/components/presentational/form/component')

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonClick(e) {
        console.log(e)
    }

    render() {
        let button
        if (this.props.hasAccept) {
            button = <button
                className="ok ui button"
                onClick={(e) => this.buttonClick(e)}
            >
            {this.props.hasAccept}
            </button>
        }

        return (
            <React.Fragment>
                <div className={style.main}>Hello</div>
                { button }
            </React.Fragment>
        )
    }
}

export default Component;
