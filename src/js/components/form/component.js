import loglevel from "loglevel"
import React from "react"
import { render } from "react-dom"
import { Button } from 'semantic-ui-react'
// import 'semantic-ui-css/components/reset.css'
// import 'semantic-ui-css/components/site.css'
// import 'semantic-ui-css/components/button.css'
import style from './style.scss'

loglevel.info('src/js/components/form/component')

class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//return this.props.children;hello
		return(
			<React.Fragment>
				<div className={style.main}>Hello</div>
				<Button>Click Here</Button>
			</React.Fragment>
		)
	}
}
export default Form;
