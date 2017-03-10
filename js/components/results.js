import React from 'react';
import {Link} from 'react-router';
import { searchResultItem, addInfo } from '../../styles/results.scss';

let createUrl = (id) => {
	return 'https://white-label-elements.herokuapp.com/images/medium/' + id + '.jpg';  //  use  ES2015 template
}

export default class Results extends React.Component {

	render () {
		return (
			<ol>
				{this.props.results.map((result) => {
					return (
						<li key={ result.id }>
							<Link to={ "/emperor/" + result.id }>
								<div className={[searchResultItem, 'media'].join(' ')}>
									<div className='media-image'>
										<img alt="" src={ createUrl(result.id)}/>
									</div>
									<div className="media-body">
										<h3>{ result.name }</h3>
										<div className={ addInfo }>{ result.from } { result.to }
										</div>
									</div>
								</div>
							</Link>
						</li>
					)
				})}
			</ol>
		);
	}
}