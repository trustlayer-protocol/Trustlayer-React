import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import AgreementBox from 'components/AgreementBox'
import AdoptButton from 'components/buttons/Green'
import { useHttp } from 'hooks/http'
import SSOModal from 'components/sso/SSOModal'
import AdoptModal from 'components/AdoptModal'
import UserBlurb from 'components/UserBlurb'
import ScrollSnackbar from 'components/ScrollSnackbar'
import _ from 'lodash'
import { Root, Container, ButtonContainer } from 'services/styles'
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import ndas from './tempData.js'

const StyledTabs = withStyles({
	indicator: {
		backgroundColor: '#35373a',
		height: 3
	}
})(Tabs)

const useConfirmMessage = () => {
	const [isModalOpen, setModalState] = useState(false)

	const displayConfirmMessage = () => {
		setModalState(true)
	}

	const closeConfirmMessage = () => {
		setModalState(false)
	}

	return {
		isModalOpen,
		setModalState,
		displayConfirmMessage,
		closeConfirmMessage
	}
}

export default withRouter(({ history, match }) => {
	const email = localStorage.getItem('email')
	const [isLoading, fetchedData] = useHttp(`get/user/email/${email}`)

	const user = _.get(fetchedData, 'user', {})
	const forms = _.get(fetchedData, 'forms', [])
	const usersAdoptedTypes = forms.map(form => form.type)

	window.scrollTo(0, 0)
	const {
		isModalOpen,
		setModalState,
		displayConfirmMessage,
		closeConfirmMessage
	} = useConfirmMessage()

	const ndaType = _.get(match, 'params.type', '')
	const ndaVersion = _.get(match, 'params.version', '')

	const usersAdoptedVersionByType = forms
		.filter(nda => nda.type === ndaType)
		.map(nda => nda.version)
	const filteredNda = ndas.filter(val => val.type === ndaType)
	const ndaTypes = _.uniqBy(
		ndas.map(({ name, type }) => ({ name, type })),
		nda => nda.type
	)
	const usersNdaTypes = ndaTypes.filter(nda =>
		usersAdoptedTypes.includes(nda.type)
	)
	const currentNda = ndas.filter(
		nda => nda.type === ndaType && nda.version === ndaVersion
	)[0]

	const canAdopt = !(
		usersAdoptedTypes.includes(ndaType) &&
		usersAdoptedVersionByType.includes(ndaVersion)
	)

	const [isSsoOpen, setSsoState] = useState(false)

	const displaySsoModal = () => {
		setSsoState(true)
		setModalState(false)
	}

	const closeSsoModal = () => {
		setSsoState(false)
	}

	const selectType = event => {
		const newType = event.target.value
		if (newType === 'more') {
			history.push(`/find-form`)
		} else {
			const ndaFilteredByType = ndas.filter(nda => nda.type === newType)
			const firstNda = ndaFilteredByType.shift()
			history.push(`/form/${newType}/${firstNda.version}`)
		}
	}

	const selectVersion = (event, value) => {
		history.push(`/form/${ndaType}/${value}`)
	}
	const date = new Date()
	return (
		<>
			<Root>
				<Container>
					<UserBlurb
						avatarUrl={user.avatar_url}
						name={user.full_name}
						email={user.email}
						date={Date.now()}
						isAdopt={!canAdopt}
					/>

					{usersNdaTypes.length > 0 && usersAdoptedTypes.includes(ndaType) ? (
						<Select
							value={ndaType}
							input={<Input name="age" id="age-label-placeholder" />}
							styles={{
								width: '100%'
							}}
							onChange={selectType}
							name="type"
						>
							{usersNdaTypes.map(nda => (
								<MenuItem key={`type-${nda.type}`} value={nda.type}>
									{nda.name}
								</MenuItem>
							))}
							<MenuItem value="more">Find more forms</MenuItem>
						</Select>
					) : (
						<Button
							variant="outlined"
							onClick={() => history.push('/find-form')}
						>
							Find More forms
						</Button>
					)}
					<StyledTabs value={ndaVersion} onChange={selectVersion}>
						{filteredNda.map((nda, index) => (
							<Tab
								key={`tab-${index}`}
								style={
									usersAdoptedVersionByType.includes(nda.version)
										? { color: 'green', fontSize: 20, fontWeight: 'bold' }
										: { fontSize: 20 }
								}
								value={nda.version}
								label={nda.version}
							/>
						))}
					</StyledTabs>
					<AgreementBox hash={currentNda.id} agreement={currentNda.content} />
				</Container>
			</Root>
			<AdoptModal
				open={isModalOpen}
				onConfirm={displaySsoModal}
				onClose={closeConfirmMessage}
			/>
			<SSOModal
				handleOnClose={closeSsoModal}
				action="adopt"
				formId={currentNda.id}
				open={isSsoOpen}
			/>
			{canAdopt && (
				<>
					<ButtonContainer>
						<AdoptButton text="ADOPT" onClick={displayConfirmMessage} />
					</ButtonContainer>
					<ScrollSnackbar />
				</>
			)}
		</>
	)
})
