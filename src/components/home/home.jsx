import React from 'react'

const Home = props => (
	<div className="page-wrapper">
		<h1>React/Redux Code Challenge</h1>
		<h4>Count: {props.count}</h4>
		<div className="button-cell">
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.incrementAsync}>Increment Async</button>
		</div>

		<div className="button-cell">
			<button onClick={props.decrement}>Decrement</button>
			<button onClick={props.decrementAsync}>Decrement Async</button>
		</div>
	</div>
);

export default Home
