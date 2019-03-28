import React from 'react'
import Modal from '@material-ui/core/Modal'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const ModalContent = styled.div(
	({ width, height }) =>
		css`
			width: ${width}px;
			min-height: ${height}px;
			background: white;
			border-radius: 6px;
			padding: 20px;
		`
)

export default ({ children, open, onClose, width = '350', height = '400' }) => (
	<Modal
		open={open}
		onClose={onClose}
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<ModalContent width={width} height={height}>
			{children}
		</ModalContent>
	</Modal>
)
