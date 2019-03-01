import loglevel from "loglevel";
import React from "react";
import { render } from "react-dom";
import style from './style.scss'

loglevel.info('src/js/components/form/component')

class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//return this.props.children;hello
		return(
			<div className={style.main}>Hello</div>
		)
	}
}
export default Form;
