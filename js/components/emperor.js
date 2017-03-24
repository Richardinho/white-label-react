import React from 'react';
import { emperorArticle } from '../../styles/emperor.scss';

export default class Emperor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            data : ''
        };

		let id = this.props.id;
		this.props.api.fetchEmperor(id).then( data => {

			this.setState({
				data: data
			});
		});
    }

	render () {
		return (
			<div className={ emperorArticle }>
				<div dangerouslySetInnerHTML={{__html: this.state.data }}></div>
			</div>
		);
	}
}