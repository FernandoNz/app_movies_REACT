import React from "react"
import styles from "../Pages/NotFound.module.css"
import { Link } from "react-router-dom"

function NotFound() {
	return (
		<div className={styles.notFound}>
			<p>404: Page not Found</p>
			<p>
				Watch some movies {"->"} <Link to='/'>HOME</Link>{" "}
			</p>
		</div>
	)
}

export default NotFound
