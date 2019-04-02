import React from 'react'
import Modal from 'components/Modal'
import { ConfirmButton, CancelButton, Link } from 'services/styles'

export default ({ open, onClose, onConfirm }) => (
	<Modal open={open} onClose={onClose}>
		<h3>
			Confirm that you have read and intend to be legally bound by this
			agreement.
		</h3>
		<p>You also agree:</p>
		<p>Trustbot is not your lawyer is not providing any legal advice.</p>
		<p>
			You release and will protect Trustbot from any liability arising from your
			use of this service.
		</p>
		<Link target="_blank" href="https://trustbot.io/terms">
			Read our terms
		</Link>
		<ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
		<CancelButton onClick={onClose}>Cancel</CancelButton>
	</Modal>
)
