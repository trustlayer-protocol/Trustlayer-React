import React from 'react'
import styled from '@emotion/styled'
import Avatars from 'components/Avatars'
import Agreement from 'components/Agreement'
import Menu from './Menu.js'

const VerificationCode = styled.p`
	background: #ddd;
`

const Root = styled.div`
	position: relative;
	background: white;
	border-radius: 6px;
	padding: 20px;
`

const MenuWrapper = styled.div`
	position: absolute;
	top: 7px;
	right: 10px;
`

const AvatarText = styled.div`
	margin-bottom: 10px;
`

export default ({
	avatars,
	hash = '',
	agreement,
	clickRevoke,
	showMenu = false
}) => (
	<Root>
		{showMenu && (
			<MenuWrapper>
				<Menu clickRevoke={clickRevoke} />
			</MenuWrapper>
		)}
		<AvatarText>Adopted by</AvatarText>
		<Avatars avatars={avatars} />
		<Agreement agreement={agreement} />
		<VerificationCode>Verification code {hash}</VerificationCode>
	</Root>
)
