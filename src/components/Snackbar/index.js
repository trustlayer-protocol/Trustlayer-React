import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

export default ({ open, handleClose, message = '' }) => (
	<Snackbar
		anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		open={open}
		autoHideDuration={5000}
		onClose={handleClose}
		ContentProps={{
			'aria-describedby': 'message-id'
		}}
		message={<span id="message-id">{message}</span>}
	/>
)
