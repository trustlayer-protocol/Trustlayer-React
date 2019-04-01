import React, { Component } from 'react'
import styled from '@emotion/styled'
import Modal from 'components/Modal'
import Typography from '@material-ui/core/Typography'
import LinkedInButton from './LinkedIn'
import * as Google from './Google'

const Root = styled.div`
	display: flex;
	flex-flow: column;
`

const Link = styled.a`
	display: inline-block;
	color: #1e88e5;
	text-decoration: none;
	margin-bottom: 20px;
`
const ButtonContainer = styled.div`
	flex-direction: column;
	flex: 1;
	padding-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`

class SSOModal extends Component {
	constructor(props) {
		super(props)
		const state = this.getStateObject()
		Google.checkIfAuthenticatedAndRedirectToServer(state)
		Google.loadGoogleScript('auth', () => {
			console.log('google script loaded')
		})
	}

	getStateObject = () => {
		const { action, link, formId = null, userId = null } = this.props
		const stateObj = {
			action,
			link,
			user_id: userId,
			form_id: formId
		}

		return encodeURI(JSON.stringify(stateObj))
	}

	render() {
		const { open, handleOnClose } = this.props
		const state = this.getStateObject()
		return (
			<Modal open={open} onClose={handleOnClose}>
				<Root>
					<div>
						<h3>Please sign in</h3>
						<p>Confirm that it's really you.</p>
					</div>
					<ButtonContainer>
						<LinkedInButton state={state} />
						<Google.googleButton />
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
}

export default SSOModal
