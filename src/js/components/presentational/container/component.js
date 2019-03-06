import loglevel from "loglevel"
import React from "react"
import { render } from "react-dom"
import { Button } from 'semantic-ui-react'
import style from './style.scss'

loglevel.info('src/js/components/presentational/container/component')

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.visible = true
        if (this.props.isVisible != undefined) { this.state.visible = this.props.isVisible}
        console.log('pres.container.props')
        console.log(this.props)
    }

    render() {
        var className = style.main
        if (this.props.isSpaced) { className += ' ' + style.spaced }
        if (this.props.className) { className += ' ' + this.props.className }
        if (this.state.visible) {
            return (
                <div className={className}>{this.props.children}</div>
            )
        }
        else {
            return null
        }
    }
}
export default Component;
