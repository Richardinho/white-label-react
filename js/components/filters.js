import React from 'react';
import { menu, rangeFilters } from '../../styles/filters.scss';

export class Filters extends React.Component {

	constructor(props) {

		super(props);

	}

	handleYearFromChange() {
		let newYear = this.yearFromInput.value
		this.props.handleYearFromChange(newYear);
	}

	handleYearToChange () {
		let newYear = this.yearToInput.value
		this.props.handleYearToChange(newYear);
	}

	render () {

		return (
			<div className={menu}>
				<h2>Filters</h2>
				<ul>
					<h3>Time range</h3>
					<li className={ rangeFilters }>
						<label htmlFor='year-from'>from</label>
						<input id='year-from'
									 type='number'
									 ref={(input) => this.yearFromInput = input}
									 defaultValue={ this.props.criteria.yearFrom}
									 min={ this.props.criteria.minYear }
									 max={ this.props.criteria.maxYear }
									 onBlur={ this.handleYearFromChange.bind(this) }
									 />
					</li>
					<li className={ rangeFilters }>
						<label htmlFor='year-to'>to</label>
						<input id='year-to'
									 type='number'
									 ref={(input) => this.yearToInput = input}
									 defaultValue={ this.props.criteria.yearTo }
									 min={ this.props.criteria.minYear }
									 max={ this.props.criteria.maxYear }
									 onBlur={ this.handleYearToChange.bind(this) }
									 />
					</li>
				</ul>
				<h4 htmlFor='dynasties'>Dynasty</h4>
				<select
					value={this.props.criteria.dynasty}
					id='dynasties'
					onChange={ this.props.handleDynastyChange } >
					{
						this.props.dynasties.map( (dynasty, index) => {
							return (
								<option key={ index }>{ dynasty }</option>
							);
						})
					}
				</select>
				<h3>Sort by</h3>
				<select
					value={this.props.criteria.sortBy}
					id='sort-by'
					onChange={ this.props.handleSortOrderChange }>
					{
						this.props.sortingOrders.map((sortOrder, index) => {
							return (
								<option key={index}>{ sortOrder }</option>
							);
						})
					}
				</select>
			</div>
		);
	}
}
