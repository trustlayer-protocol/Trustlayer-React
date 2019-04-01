import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'

export default () => {
	const [isSnackbarOpen, setSnackbarState] = useState(true)

	const handleClose = () => {
		setSnackbarState(false)
	}

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={isSnackbarOpen}
			autoHideDuration={2000}
			onClose={handleClose}
			ContentProps={{
				'aria-describedby': 'message-id'
			}}
			message={<span id="message-id">Read and scroll</span>}
		/>
	)
}
