import React from 'react';
import emperorAPI from '../emperor-api';
import { emperorArticle } from '../../styles/emperor.scss';

export default class Emperor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            data : ''
        };
    }

	componentDidMount() {

		let id = this.props.params.id;
		emperorAPI.loadEmperor(id).then( data => {

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