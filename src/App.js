import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	async componentDidMount() {
		this.setState({ loading: true });
		const resData = await fetch('https://api.github.com/users');
		const data = await resData.json();
		this.setState({ users: data, loading: false });
	}
	render() {
		return (
			<div className='App'>
				<Navbar title='ManHub Finder' />
				<div className='container'>
					<Users
						loading={this.state.loading}
						users={this.state.users}
					/>
				</div>
			</div>
		);
	}
}

export default App;
