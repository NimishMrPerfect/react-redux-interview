import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../containers/home';
import Results from '../../containers/results';

const App = () => (
	<div>
		<header className="navigation-header">
			<div className="navigation-link-wrapper">
				<Link to="/">Home</Link>
				<Link to="/results">Results</Link>
			</div>
		</header>

		<main>
			<Route exact path="/" component={Home} />
			<Route exact path="/results" component={Results} />
		</main>
	</div>
)

export default App