import '!style!css!../reset.css';
import '!style!css!../utilities.css';  // switch off css modules
import '!style!css!sass!../styles/text.scss';  // switch off css modules

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { Home } from './components/home';
import { Other } from './components/other';
import Emperor from './components/emperor';
import { API } from './api';
import Router from './router';

import Backbone from 'backbone';

let router = new Router();
let api = new API();

router.registerRoute('', function () {

	ReactDOM.render(
	  <Layout>
		  <Home
			router={ router }
			api={ api } />
	  	</Layout>,
	  document.getElementById('app')
	);
});

router.registerRoute('other', function () {

	ReactDOM.render(
	  <Other router={ router }/>,
	  document.getElementById('app')
	);
});

router.registerRoute('emperor/:id', function (id) {

	ReactDOM.render(
	  <Layout>
		  <Emperor id={id}
			api={ api } />
	  	</Layout>,
	  document.getElementById('app')
	);
});

Backbone.history.start({ pushState : true });