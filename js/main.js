import '!style!css!../reset.css';
import '!style!css!../utilities.css';  // switch off css modules
import '!style!css!sass!../styles/text.scss';  // switch off css modules

import {Router, Route, browserHistory, Link} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './layout';
import Home from './components/home';
import Other from './components/other';
import Emperor from './components/emperor';
import store from './store';

let router = (
	<Router history={ browserHistory }>
		<Route component={ Layout }>
			<Route path="/" component={ Home }/>
			<Route path="/other" component={ Other }/>
			<Route path="/emperor/:id" component={ Emperor }/>
		</Route>
	</Router>
);

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);