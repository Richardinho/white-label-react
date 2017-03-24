import React from 'react';
import Banner from './components/banner';
import styles from '../styles/layout.scss';

export default class Layout extends React.Component {

	constructor(props) {

		super(props);

	}

	render() {
		return (
			<div className={ styles.container }>
				<Banner/>
				{ this.props.children }
			</div>
		);
	}
}