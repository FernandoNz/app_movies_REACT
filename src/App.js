import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom"

import Home from "./Pages/Home"

function App() {
	return (
		<>
			<Router>
				<h1>Movies</h1>
				{/* <NavLink exact to='/' activeClassName='active'>
					Home
				</NavLink> */}
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route exact path='/movie/:id'>
						movie id
					</Route>
					<Route path='/movie'>movie</Route>
					<Route path='*'>404</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
