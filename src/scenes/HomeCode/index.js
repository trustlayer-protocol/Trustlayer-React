import React, { useState } from 'react'
import styled from '@emotion/styled'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import AdoptButton from 'components/buttons/Green'
import { useHttp } from 'hooks/http'
import Modal from 'components/Modal'
import PdfButton from 'components/buttons/PDF'
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

const ButtonContainer = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`

export default ({ code }) => {
	const [isLoading, fetchedData] = useHttp(
		`http://localhost:3002/get/user/${code}`
	)

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
				This is a test modal
				<button onClick={closeConfirmMessage}>Cancel</button>
				<button onClick={displaySsoModal}>Confirm</button>
			</Modal>
			<SSOModal
				action="revoke"
				link={actionLink}
				formId={formId}
				open={isSsoOpen}
			/>
			<ButtonContainer>
				<PdfButton />
			</ButtonContainer>
		</>
	)
}
