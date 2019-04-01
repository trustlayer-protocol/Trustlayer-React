import React, { useState } from 'react'
import styled from '@emotion/styled'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import { useHttp } from 'hooks/http'
import Modal from 'components/Modal'
import Button from 'components/buttons/BlueOutline'
import SSOModal from 'components/sso/SSOModal'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
	Root,
	Container,
	ButtonContainer,
	AlertButton,
	CancelButton
} from 'services/styles'
import _ from 'lodash'
import Snackbar from './Snackbar'

export default () => {
	const userCode = 'UvBFJpfE6Lq' // Temp development until login is setup
	const [isLoading, fetchedData] = useHttp(`get/user/${userCode}`)

	const agreementContent = _.get(fetchedData, 'recent_form.content', '')
	const user = _.get(fetchedData, 'user', {})
	const formId = _.get(fetchedData, 'actions[0].form_id', '')
	const hash = _.get(fetchedData, 'actions[0].form_hash', '')
	const actions = _.get(fetchedData, `actions`, [])

	const actionLink = actions.length > 0 ? actions[actions.length - 1].link : ''

	const [isButtonDisabled, setButtonState] = useState(true)

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

	const [isCopied, setIsCopied] = useState(false)
	const onClipboardCopy = () => {
		setIsCopied(true)
	}

	const closeClipboardSnackbar = () => {
		setIsCopied(false)
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
					<AgreementBox
						hash={hash}
						agreement={agreementContent}
						clickRevoke={displayConfirmMessage}
						showMenu={true}
					/>
				</Container>
			</Root>
			<Modal open={isModalOpen} onClose={closeConfirmMessage}>
				<h3>
					Are you sure you want to revoke your adoption of this agreement?
				</h3>
				<p>
					This will not revoke or affect any previous agreements, which will
					continue in effect. Consult with your legal counsel if you need to
					terminate any existing obligations.
				</p>
				<AlertButton onClick={displaySsoModal}>REVOKE ADOPTION</AlertButton>
				<CancelButton onClick={closeConfirmMessage}>Cancel</CancelButton>
			</Modal>
			<SSOModal
				action="revoke"
				link={actionLink}
				userId={user.id}
				open={isSsoOpen}
			/>
			<ButtonContainer>
				<CopyToClipboard
					text={`https://trustlayer.trustbot.io/${userCode}`}
					onCopy={onClipboardCopy}
				>
					<Button text="GET INVITE LINK" />
				</CopyToClipboard>
			</ButtonContainer>
			<Snackbar open={isCopied} handleClose={closeClipboardSnackbar} />
		</>
	)
}
