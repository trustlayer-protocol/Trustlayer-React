import { useState, useEffect } from 'react'
import axios from 'axios'

export const useHttp = (url, dependencies = []) => {
	const [isLoading, setIsLoading] = useState(false)
	const [fetchedData, setFetchedData] = useState(null)
	const domain =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3002/'
			: 'http://trustlayer.us-west-2.elasticbeanstalk.com/'

	useEffect(() => {
		setIsLoading(true)

		const fetchData = async () => {
			const { data: response } = await axios.get(`${domain}${url}`)

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
