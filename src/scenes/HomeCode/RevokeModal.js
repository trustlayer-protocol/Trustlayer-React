import React from 'react'
import Modal from 'components/Modal'
import { AlertButton, CancelButton } from 'services/styles'

export default ({ open, onClose, onConfirm }) => (
	<Modal open={open} onClose={onClose}>
		<h3>Are you sure you want to revoke your adoption of this agreement?</h3>
		<p>
			This will not revoke or affect any previous agreements, which will
			continue in effect. Consult with your legal counsel if you need to
			terminate any existing obligations.
		</p>
		<AlertButton onClick={onConfirm}>REVOKE ADOPTION</AlertButton>
		<CancelButton onClick={onClose}>Cancel</CancelButton>
	</Modal>
)
