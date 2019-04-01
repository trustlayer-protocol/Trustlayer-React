import React, { useState } from 'react'
import AgreementBox from 'components/AgreementBox'
import AdoptButton from 'components/buttons/Green'
import { useHttp } from 'hooks/http'
import Modal from 'components/Modal'
import SSOModal from 'components/sso/SSOModal'
import * as ScrollMagic from 'scrollmagic'
import ScrollSnackbar from 'components/ScrollSnackbar'
import Header from './Header.js'
import _ from 'lodash'
import {
	Root,
	Container,
	Heading,
	ButtonContainer,
	ConfirmButton,
	CancelButton,
	Link
} from 'services/styles'

export default () => {
	const [isLoading, fetchedData] = useHttp('get/default-form')

	const scrollController = new ScrollMagic.Controller()
	const agreementContent = _.get(fetchedData, 'form.content', '')
	const agreementHash = _.get(fetchedData, 'form.hash', '')
	const avatars = _.get(fetchedData, 'avatars', [])
	const [isButtonDisabled, setButtonState] = useState(true)

	if (agreementHash) {
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

	//scrollController.destroy(true)
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

	const closeSsoModal = () => {
		setSsoState(false)
	}

	return (
		<>
			<Root>
				<Container>
					<Header />
					<AgreementBox
						avatars={avatars}
						hash={agreementHash}
						agreement={agreementContent}
					/>
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
				handleOnClose={closeSsoModal}
				action="adopt"
				formId={2}
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
