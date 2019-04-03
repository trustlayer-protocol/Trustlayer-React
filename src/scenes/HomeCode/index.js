import React, { useState } from 'react'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import { useHttp } from 'hooks/http'
import AdoptModal from 'components/AdoptModal'
import AdoptButton from 'components/buttons/Green'
import RevokeModal from './RevokeModal'
import Button from 'components/buttons/BlueOutline'
import SSOModal from 'components/sso/SSOModal'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Root, Container, ButtonContainer } from 'services/styles'
import _ from 'lodash'
import Snackbar from './Snackbar'

const extractData = fetchedData => {
	const agreementContent = _.get(fetchedData, 'recent_form.content', '')
	const avatars = _.get(fetchedData, 'avatars', [])
	const user = _.get(fetchedData, 'user', {})
	const formId = _.get(fetchedData, 'actions[0].form_id', '')
	const hash = _.get(fetchedData, 'actions[0].form_hash', '')
	const actions = _.get(fetchedData, `actions`, [])

	const recentAction = actions.reduce((acc, curr) => {
		return acc.created > curr.created ? acc : curr
	}, {})

	return {
		agreementContent,
		user,
		avatars,
		formId,
		hash,
		actions,
		recentAction
	}
}

export default ({ location, history }) => {
	const urlParams = new URLSearchParams(location.search)
	const token = urlParams.get('token')

	const [isLoading, fetchedData] = useHttp(`get/user/secure/${token}`)
	if (!token || (fetchedData && fetchedData.ok === false))
		history.push('/login')

	const {
		agreementContent,
		user,
		formId,
		hash,
		recentAction,
		avatars
	} = extractData(fetchedData)

	const actionSnackbar = urlParams.get('action')
	const [isActionSnackbarOpen, setactionSnackbarState] = useState(
		actionSnackbar === 'adopt'
	)
	const closeActionSnackbarSnackbar = () => {
		setactionSnackbarState(false)
	}

	// show the opposite of what the most recent action was
	const screenDisplay = recentAction.action === 'revoke' ? 'adopt' : 'revoke'
	const [isModalOpen, setModalState] = useState(false)

	const displayConfirmMessage = () => {
		setModalState(true)
	}

	const closeConfirmMessage = () => {
		setModalState(false)
	}

	const [isSsoOpen, setSsoState] = useState(false)

	const closeSsoModal = () => {
		setSsoState(false)
	}

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
					{screenDisplay === 'revoke' && (
						<UserBlurb
							avatarUrl={user.avatar_url}
							name="You"
							email={user.email}
							date={recentAction.created}
						/>
					)}
					<AgreementBox
						hash={hash}
						avatars={avatars}
						agreement={agreementContent}
						clickRevoke={displayConfirmMessage}
						showMenu={screenDisplay === 'revoke'}
					/>
				</Container>
			</Root>
			{screenDisplay === 'revoke' && (
				<>
					<RevokeModal
						open={isModalOpen}
						onClose={closeConfirmMessage}
						onConfirm={displaySsoModal}
					/>
					<SSOModal
						action="revoke"
						link={recentAction.link}
						userId={user.id}
						open={isSsoOpen}
						handleOnClose={closeSsoModal}
					/>
				</>
			)}
			{screenDisplay === 'adopt' && (
				<>
					<AdoptModal
						open={isModalOpen}
						onClose={closeConfirmMessage}
						onConfirm={displaySsoModal}
					/>
					<SSOModal
						action="adopt"
						formId={2}
						open={isSsoOpen}
						handleOnClose={closeSsoModal}
					/>
				</>
			)}
			<ButtonContainer>
				{screenDisplay === 'revoke' && (
					<CopyToClipboard
						text={`https://trustlayer.trustbot.io/${user.link}`}
						onCopy={onClipboardCopy}
					>
						<Button text="GET INVITE LINK" />
					</CopyToClipboard>
				)}
				{screenDisplay === 'adopt' && (
					<AdoptButton text="ADOPT" onClick={displayConfirmMessage} />
				)}
			</ButtonContainer>
			<Snackbar open={isCopied} handleClose={closeClipboardSnackbar} />
			<Snackbar
				open={isActionSnackbarOpen}
				handleClose={closeActionSnackbarSnackbar}
				message="Adoption complete!"
			/>
		</>
	)
}
