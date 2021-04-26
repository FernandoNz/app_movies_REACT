import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./Pages/Home"
import MovieDetails from "./Pages/MovieDetails"
import NotFound from "./Pages/NotFound"

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route exact path='/movie/:movieID'>
						<MovieDetails />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
