import React from 'react';
import { searchResultItem, addInfo } from '../../styles/results.scss';

let createUrl = (id) => {
	return 'https://white-label-elements.herokuapp.com/images/medium/' + id + '.jpg';  //  use  ES2015 template
}

export class Results extends React.Component {

	onClick(event) {
		event.preventDefault();
		this.props.router.navigate(event.currentTarget.getAttribute('href'));
	}

	render () {
		return (
			<ol>
				{this.props.results.map((result) => {
					return (
						<li key={ result.id }>
							<a onClick={this.onClick.bind(this)} href={ 'emperor/' + result.id }>
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
							</a>
						</li>
					)
				})}
			</ol>
		);
	}
}