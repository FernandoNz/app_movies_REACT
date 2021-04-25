import React from "react"
import SearchIcon from "@material-ui/icons/Search"
import styles from "../Components/Searchbox.module.css"

function Searchbox(props) {
	return (
		<form>
			<div className={styles.search_container}>
				<input type='search' name='search' />
				<div className={styles.icon}>
					<SearchIcon />
				</div>
			</div>
		</form>
	)
}

export default Searchbox
