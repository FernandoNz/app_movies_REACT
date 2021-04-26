const API_KEY = process.env.REACT_APP_API_KEY
const URL_BASE = "https://api.themoviedb.org/3/"

async function requestAPI(url) {
	try {
		const res = await fetch(url)
		const data = await res.json()

		if (!res.ok) throw { status: res.status, statusText: res.statusText }

		return data
	} catch (error) {
		return error
	}
}

export function getWeeklyTrending() {
	const URL = `${URL_BASE}trending/movie/week?api_key=${API_KEY}`
	return requestAPI(URL)
		.then(data => (data.ok ? data : Promise.reject(data)))
		.catch(error => error)
}

export function getMovieDetails(id) {
	const URL = `${URL_BASE}movie/${id}?api_key=${API_KEY}&language=en-US`

	return requestAPI(URL)
		.then(data => (data.ok ? data : Promise.reject(data)))
		.catch(error => error)
}

export function getSearch(query) {
	const URL = `${URL_BASE}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
	return requestAPI(URL)
		.then(data => (data.ok ? data : Promise.reject(data)))
		.catch(error => error)
}
