import React  from 'react';
import { banner } from '../../styles/banner.scss';
import {Link} from 'react-router';

export default (props) => {
	return (
		<div className={ banner }>
			<h1>
				<Link to={ "/" }>Emperors of Rome</Link>
			</h1>
		</div>
	);
};