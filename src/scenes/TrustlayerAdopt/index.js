import React, { useState } from 'react'
import styled from '@emotion/styled'
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

const Heading = styled.div`
	font-size: 40px;
	margin-bottom: 20px;
`

export default () => {
	const [isLoading, fetchedData] = useHttp(
		'http://localhost:3002/get/default-form'
	)

	const agreementContent = _.get(fetchedData, 'form.content', '')

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
					<AgreementBox agreement={agreementContent} />
					<AdoptButton text="Adopt" onClick={displayConfirmMessage} />
				</Container>
			</Root>
			<Modal open={isModalOpen} onClose={closeConfirmMessage}>
				This is a test modal
				<button onClick={closeConfirmMessage}>Cancel</button>
				<button onClick={displaySsoModal}>Confirm</button>
			</Modal>
			<SSOModal action="adopt" formId={2} open={isSsoOpen} />
		</>
	)
}
