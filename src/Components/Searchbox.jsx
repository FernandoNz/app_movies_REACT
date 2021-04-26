import React, { useState } from "react"
import SearchIcon from "@material-ui/icons/Search"
import styles from "../Components/Searchbox.module.css"

function Searchbox({ setSearch }) {
	const [word, setWord] = useState("")

	const handleChange = e => {
		setWord(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (word.length !== 0) setSearch(word)

		setWord("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.search_container}>
				<input
					type='search'
					name='search'
					onChange={handleChange}
					value={word}
				/>
				<div className={styles.icon}>
					<SearchIcon />
				</div>
			</div>
		</form>
	)
}

export default Searchbox
