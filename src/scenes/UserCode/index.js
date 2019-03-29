import React, { useState } from 'react'
import styled from '@emotion/styled'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import AdoptButton from 'components/buttons/Green'
import { useHttp } from 'hooks/http'
import Modal from 'components/Modal'
import SSOModal from 'components/sso/SSOModal'
import _ from 'lodash'

const Root = styled.div`
	margin: 40px 0;
`

const Container = styled.div`
	max-width: 670px;
	margin: 0 auto;
`

export default ({ code }) => {
	const [isLoading, fetchedData] = useHttp(
		`http://localhost:3002/get/user/${code}`
	)

	const agreementContent = _.get(fetchedData, 'recent_form.content', '')
	const user = _.get(fetchedData, 'user', {})
	const actionLink = _.get(fetchedData, 'actions[0].link', '')
	const formId = _.get(fetchedData, 'actions[0].form_id', '')
	const hash = _.get(fetchedData, 'actions[0].form_hash', '')

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
					<AdoptButton text="Adopt" onClick={displayConfirmMessage} />
				</Container>
			</Root>
			<Modal open={isModalOpen} onClose={closeConfirmMessage}>
				This is a test modal
				<button onClick={closeConfirmMessage}>Cancel</button>
				<button onClick={displaySsoModal}>Confirm</button>
			</Modal>
			<SSOModal
				action="adopt"
				link={actionLink}
				formId={formId}
				open={isSsoOpen}
			/>
		</>
	)
}
