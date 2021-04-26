import styles from "../Components/MovieCard.module.css"

const MovieCard = ({ title, poster }) => {
	return (
		<li className={styles.card}>
			<img width={170} height={240} loading='lazy' src={poster} alt={poster} />
			<div className={styles.card_info}>
				<span>{title}</span>
			</div>
		</li>
	)
}

export default MovieCard
