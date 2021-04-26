import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../Services"
import ClipLoader from "react-spinners/ClipLoader"
import styles from "../Pages/MovieDetails.module.css"

function MovieDetails() {
	const [movie, setMovie] = useState([])
	const [loading, setLoading] = useState(true)
	const { movieID } = useParams()

	useEffect(() => {
		getMovieDetails(movieID)
			.then(data => {
				setMovie(data)
				setLoading(false)
			})
			.catch(err => err)
	}, [movieID])

	return (
		<>
			{loading ? (
				<div className='loader_container'>
					<ClipLoader size={36} color={"#fff"} />
				</div>
			) : (
				<div className={styles.movie_container}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						alt={movie.title}
					/>
					<div className={styles.movie_info}>
						<h2 className={styles.title}>{movie.title}</h2>
						<p className={styles.genres}>
							<strong>Genres : </strong>
							{movie.genres.map(genre => genre.name).join(", ")}
						</p>
						<p className={styles.description}>
							<strong>Description : </strong>
							{movie.overview}
						</p>
					</div>
				</div>
			)}
		</>
	)
}

export default MovieDetails
