import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import React, { Component } from 'react'

import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>
				<Outlet />
			</div>
		)
	}
}


export default App;
