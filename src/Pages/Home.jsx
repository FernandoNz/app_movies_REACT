import MovieCard from "../Components/MovieCard"
import styles from "../Pages/Home.module.css"
import { useState, useEffect } from "react"
import { getWeeklyTrending } from "../Services/index"
import ClipLoader from "react-spinners/ClipLoader"
import Searchbox from "../Components/Searchbox"

const IMG_URL = "https://image.tmdb.org/t/p/w500/"

const Home = () => {
	const [weeklyTrending, setWeeklyTrending] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getWeeklyTrending().then(data => {
			setLoading(false)
			setWeeklyTrending(data.results)
		})
	}, [])

	return (
		<div>
			{loading && (
				<div className={styles.loader_container}>
					<ClipLoader size={36} color={"#fff"} />
				</div>
			)}
			<ul className={styles.card_container}>
				{weeklyTrending.map(movie => (
					<MovieCard
						key={movie.id}
						poster={IMG_URL + movie.poster_path}
						title={movie.title}
					/>
				))}
			</ul>
			<Searchbox />
		</div>
	)
}
export default Home
