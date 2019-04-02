import { useState, useEffect } from 'react'
import axios from 'axios'

export const useHttp = (url, dependencies = []) => {
	const [isLoading, setIsLoading] = useState(false)
	const [fetchedData, setFetchedData] = useState(null)
	const domain =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8081/'
			: 'https://trustlayerapi.trustbot.io/'

	useEffect(() => {
		setIsLoading(true)

		const fetchData = async () => {
			try {
				const { data: response } = await axios.get(`${domain}${url}`)

				if (response.ok) {
					setFetchedData({ ok: true, ...response.result })
				} else {
					new Error(response.message)
				}

				setIsLoading(false)
			} catch (e) {
				setFetchedData({ ok: false })
				setIsLoading(false)
			}
		}

		fetchData()
	}, dependencies)

	return [isLoading, fetchedData]
}
