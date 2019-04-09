import React from 'react'
import Snackbar from 'components/Snackbar'

export default ({ location }) => {
	const urlParams = new URLSearchParams(location.search)
	const message = urlParams.get('message')

	return <Snackbar open={true} message={message} />
}
