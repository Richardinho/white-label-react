import React from 'react';
import { aside, content } from '../../styles/layout.scss';
import { Filters } from './filters';
import { Results } from './results';

export class Home extends React.Component {

	toFlag = true;

	constructor (props) {
		super(props);

		let defaultCriteria = {
			minYear : -50,
			maxYear : 300,
			yearFrom : 69,
			yearTo : 234,
			dynasty : 'all',
			sortBy : 'reign-asc'
		};

		let usp = new URLSearchParams(window.location.search);

		let criteria = Object.assign({}, defaultCriteria);

		for(let c in criteria) {
			if(usp.has(c)) {
				criteria[c] = usp.get(c);
			}
		}

		this.state = {
			results : [],

			criteria : criteria,

			sortingOrders : [

			],
			dynasties : [

			]
		};

		let queryString = '?' + usp.toString();
        this.props.router.update(queryString);

		this.props.api.fetchEmperors(queryString).then((data) => {
			this.setState({
				results : data.results,
				dynasties : data.criteria.dynasties,
				sortingOrders : data.criteria.sortingOrders
			});

		});

		this.handleDynastyChange = this.handleDynastyChange.bind(this);
		this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
		this.handleYearFromChange = this.handleYearFromChange.bind(this);
		this.handleYearToChange = this.handleYearToChange.bind(this);
	}

	handleDynastyChange (event) {
		this.updateQueryString('dynasty', event.target.value);
	}

	handleSortOrderChange (event) {
		this.updateQueryString('sortBy', event.target.value);
	}

	handleYearFromChange (year) {
		this.updateQueryString('yearFrom', year);
	}

	handleYearToChange (year) {
		this.updateQueryString('yearTo', year);
	}

	updateQueryString(key, value) {
		let criteria = this.state.criteria;
		criteria[key] = value;
		this.setState({'criteria' :  criteria });
		let usp = new URLSearchParams();
		for(let c in criteria) {
			usp.set(c, criteria[c]);
		}
		let queryString = '?' + usp.toString();
		this.props.router.update(queryString);
		this.props.api.fetchEmperors(queryString).then((data) => {
			this.setState({ results : data.results });
		});
	}

	render () {

		return (
			<div className='clearfix'>
				<div className={ aside }>
					<Filters
						criteria = {            this.state.criteria}
						dynasties = {           this.state.dynasties }
						sortingOrders = {       this.state.sortingOrders }
						handleYearFromChange={  this.handleYearFromChange}
						handleYearToChange={    this.handleYearToChange}
						handleDynastyChange={   this.handleDynastyChange}
						handleSortOrderChange={ this.handleSortOrderChange}/>
				</div>
				<div className={ content }>
					<Results router={this.props.router} results={ this.state.results } />
				</div>
			</div>
		);
	}
}



