import React, { useState } from 'react'
import styled from '@emotion/styled'
import AgreementBox from 'components/AgreementBox'
import AdoptButton from 'components/buttons/Green'
import { useHttp } from 'hooks/http'
import Modal from 'components/Modal'
import SSOModal from 'components/sso/SSOModal'
import * as ScrollMagic from 'scrollmagic'
import _ from 'lodash'

const Root = styled.div`
	margin: 40px 0 80px;
`

const Container = styled.div`
	max-width: 670px;
	margin: 0 auto;
`

const Heading = styled.div`
	font-size: 40px;
	margin-bottom: 20px;
`

const ButtonContainer = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`

export default () => {
	const [isLoading, fetchedData] = useHttp(
		'http://localhost:3002/get/default-form'
	)

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

	return (
		<>
			<Root>
				<Container>
					<Heading>Make NDAs automatic</Heading>
					<AgreementBox
						avatars={avatars}
						hash={agreementHash}
						agreement={agreementContent}
					/>
				</Container>
			</Root>
			<Modal open={isModalOpen} onClose={closeConfirmMessage}>
				This is a test modal
				<button onClick={closeConfirmMessage}>Cancel</button>
				<button onClick={displaySsoModal}>Confirm</button>
			</Modal>
			<SSOModal action="adopt" formId={2} open={isSsoOpen} />
			<ButtonContainer>
				<AdoptButton
					disabled={isButtonDisabled}
					text="Adopt"
					onClick={displayConfirmMessage}
				/>
			</ButtonContainer>
		</>
	)
}
