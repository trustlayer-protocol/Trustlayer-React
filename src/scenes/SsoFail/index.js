import React from 'react'
import { Redirect } from 'react-router-dom'
import Snackbar from 'components/Snackbar'

export default ({ location }) => {
	const urlParams = new URLSearchParams(location.search)
	const message = urlParams.get('message')

	if (message === 'user_cancelled_login') return <Redirect to="/login" />

	return <Snackbar open={true} message={message} />
}
