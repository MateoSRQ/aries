import loglevel from "loglevel"
import React from "react"
import { render } from "react-dom"
import { Button } from 'semantic-ui-react'
import style from './style.scss'

loglevel.info('src/js/components/container/component')

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //return this.props.children;hello
        var className = style.main
        if (this.props.isSpaced) { className += ' ' + style.spaced }
        if (this.props.className) { className += ' ' + this.props.className }
        return(
            <div className={className}>{this.props.children}</div>
        )
    }
}
export default Component;
