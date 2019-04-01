import React from 'react'
import styled from '@emotion/styled'
import Modal from 'components/Modal'
import Typography from '@material-ui/core/Typography'
import LinkedInButton from './LinkedIn'

const Root = styled.div`
	display: 'flex',
	flex-flow: 'column'
`

const Link = styled.a`
	display: inline-block;
	color: #1e88e5;
	text-decoration: none;
	margin-bottom: 20px;
`
const ButtonContainer = styled.div`
	flex: 1;
	padding-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`

const SSOModal = ({
	open,
	handleOnClose,
	action,
	link,
	userId = null,
	formId = null
}) => {
	const stateObj = {
		action,
		link,
		user_id: userId,
		form_id: formId
	}

	const state = encodeURI(JSON.stringify(stateObj))
	return (
		<Modal open={open} onClose={handleOnClose}>
			<Root>
				<div>
					<h3>Please sign in</h3>
					<p>Confirm that it's really you.</p>
				</div>
				<ButtonContainer>
					<LinkedInButton state={state} />
				</ButtonContainer>
				<Typography variant="caption" color="textSecondary" gutterBottom>
					We will protect your private information and use it only to provide
					this service.
				</Typography>
				<Link target="_blank" href="https://trustbot.io/privacy-policy">
					Read our privacy policy
				</Link>
			</Root>
		</Modal>
	)
}

export default SSOModal
