import { useState, useEffect } from 'react'
import axios from 'axios'

export const useHttp = (url, dependencies = []) => {
	const [isLoading, setIsLoading] = useState(false)
	const [fetchedData, setFetchedData] = useState(null)

	useEffect(() => {
		setIsLoading(true)

		const fetchData = async () => {
			const { data: response } = await axios.get(url)

			if (response.ok) {
				setFetchedData(response.result)
			} else {
				new Error(response.message)
			}

			setIsLoading(false)
		}

		fetchData()
	}, dependencies)

	return [isLoading, fetchedData]
}
