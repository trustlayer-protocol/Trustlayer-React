import React from 'react'
import styled from '@emotion/styled'
import Modal from 'components/Modal'
import { AlertButton, CancelButton } from 'services/styles'

const Title = styled.h3`
	font-size: 22px;
	line-height: 1.3;
	margin-top: 10px;
`

const Text = styled.p`
	letter-spacing: 0.25px;
	line-height: 1.4;
	margin-bottom: 30px;
`

export default ({ open, onClose, onConfirm }) => (
	<Modal open={open} onClose={onClose}>
		<Title>
			Are you sure you want to revoke your adoption of this agreement?
		</Title>
		<Text>
			This will not revoke or affect any previous agreements, which will
			continue in effect. Consult with your legal counsel if you need to
			terminate any existing obligations.
		</Text>
		<AlertButton onClick={onConfirm}>REVOKE ADOPTION</AlertButton>
		<CancelButton onClick={onClose}>Cancel</CancelButton>
	</Modal>
)
