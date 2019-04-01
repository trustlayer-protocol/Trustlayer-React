import React, { useState } from 'react'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import AdoptButton from 'components/buttons/Green'
import { useHttp } from 'hooks/http'
import Modal from 'components/Modal'
import SSOModal from 'components/sso/SSOModal'
import * as ScrollMagic from 'scrollmagic'
import ScrollSnackbar from 'components/ScrollSnackbar'
import _ from 'lodash'
import {
	Root,
	Container,
	ButtonContainer,
	ConfirmButton,
	CancelButton,
	Link
} from 'services/styles'

export default ({ code }) => {
	const [isLoading, fetchedData] = useHttp(`get/user/${code}`)

	const scrollController = new ScrollMagic.Controller()
	const agreementContent = _.get(fetchedData, 'recent_form.content', '')
	const user = _.get(fetchedData, 'user', {})
	const actionLink = _.get(fetchedData, 'actions[0].link', '')
	const formId = _.get(fetchedData, 'actions[0].form_id', '')
	const hash = _.get(fetchedData, 'actions[0].form_hash', '')

	const [isButtonDisabled, setButtonState] = useState(true)

	if (hash) {
		let browserHeight = Math.max(
			document.documentElement.clientHeight,
			window.innerHeight || 0
		)

		new ScrollMagic.Scene({
			offset: document.body.scrollHeight - browserHeight - 200,
			triggerHook: 1
		})
			.addTo(scrollController)
			.on('enter leave update', e => {
				if (e.type === 'enter' && e.scrollDirection === 'FORWARD') {
					setButtonState(false)
				}
			})
	}
	const [isModalOpen, setModalState] = useState(false)

	const displayConfirmMessage = () => {
		setModalState(true)
	}

	const closeConfirmMessage = () => {
		setModalState(false)
	}

	const [isSsoOpen, setSsoState] = useState(false)

	const displaySsoModal = () => {
		setSsoState(true)
		setModalState(false)
	}

	return (
		<>
			<Root>
				<Container>
					<UserBlurb
						avatarUrl={user.avatar_url}
						name={user.full_name}
						email={user.email}
					/>
					<AgreementBox hash={hash} agreement={agreementContent} />
				</Container>
			</Root>
			<Modal open={isModalOpen} onClose={closeConfirmMessage}>
				<h3>
					Confirm that you have read and intend to be legally bound by this
					agreement.
				</h3>
				<p>You also agree:</p>
				<p>Trustbot is not your lawyer is not providing any legal advice.</p>
				<p>
					You release and will protect Trustbot from any liability arising from
					your use of this service.
				</p>
				<Link target="_blank" href="https://trustbot.io/terms">
					Read our terms
				</Link>
				<ConfirmButton onClick={displaySsoModal}>Confirm</ConfirmButton>
				<CancelButton onClick={closeConfirmMessage}>Cancel</CancelButton>
			</Modal>
			<SSOModal
				action="adopt"
				link={actionLink}
				formId={formId}
				open={isSsoOpen}
			/>

			<ButtonContainer>
				<AdoptButton
					disabled={isButtonDisabled}
					text="Adopt"
					onClick={displayConfirmMessage}
				/>
			</ButtonContainer>
			<ScrollSnackbar />
		</>
	)
}
