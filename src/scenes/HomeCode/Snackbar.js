import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'

export default ({ open, handleClose }) => (
	<Snackbar
		anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		open={open}
		autoHideDuration={2000}
		onClose={handleClose}
		ContentProps={{
			'aria-describedby': 'message-id'
		}}
		message={<span id="message-id">Link copied to your clipboard</span>}
	/>
)
