import MovieCard from "../Components/MovieCard"
import styles from "../Pages/Home.module.css"
import { useState, useEffect } from "react"
import { getWeeklyTrending, getSearch } from "../Services/index"
import ClipLoader from "react-spinners/ClipLoader"
import Searchbox from "../Components/Searchbox"
import { Link } from "react-router-dom"

const IMG_URL = "https://image.tmdb.org/t/p/w500/"

const Home = () => {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState("")
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getWeeklyTrending().then(data => {
			setLoading(false)
			setMovies(data.results)
		})
	}, [])

	useEffect(() => {
		setLoading(true)
		if (search.length > 0) {
			getSearch(search).then(results => {
				setMovies(results.results)
				setLoading(false)
			})
		}
	}, [search])

	return (
		<>
			<header>
				<h1>Movies</h1>
				<Searchbox setSearch={setSearch} />
			</header>
			<main>
				{loading && (
					<div className='loader_container'>
						<ClipLoader size={36} color={"#fff"} />
					</div>
				)}
				<ul className={styles.card_container}>
					{movies.length !== 0 &&
						movies.map(
							movie =>
								movie.poster_path && (
									<Link to={`/movie/${movie.id}`} key={movie.id}>
										<MovieCard
											poster={IMG_URL + movie.poster_path}
											title={movie.title}
										/>
									</Link>
								)
						)}
				</ul>
			</main>
		</>
	)
}
export default Home
