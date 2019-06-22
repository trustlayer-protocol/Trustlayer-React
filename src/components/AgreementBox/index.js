import React from 'react'
import styled from '@emotion/styled'
import Avatars from 'components/Avatars'
import Agreement from 'components/Agreement'
import Menu from './Menu.js'

export default ({
	avatars = [],
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
		{avatars.length > 0 && (
			<>
				<AvatarText>Adopted by</AvatarText>
				<Avatars avatars={avatars} />
			</>
		)}
		<Agreement agreement={agreement} />
		<VerificationCode>
			<VerifiTitle>Verification code</VerifiTitle>
			<Hash>{hash}</Hash>
		</VerificationCode>
	</Root>
)

const VerificationCode = styled.div`
	background: #f6f6fb;
	text-align: center;
	padding: 10px 0;
`

const Root = styled.div`
	position: relative;
	background: white;
	border-radius: 6px;
	padding: 20px;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`

const MenuWrapper = styled.div`
	position: absolute;
	top: 7px;
	right: 10px;
`

const AvatarText = styled.div`
	margin-bottom: 10px;
`

const VerifiTitle = styled.div`
	color: #545456;
	font-weight: 600;
	font-size: 30px;
	@media (max-width: 630px) {
		font-size: 20px;
	}
	@media (max-width: 450px) {
		font-size: 16px;
	}
`

const Hash = styled.div`
	color: #8487cc;
	font-size: 30px;
	@media (max-width: 630px) {
		font-size: 20px;
	}
	@media (max-width: 450px) {
		font-size: 16px;
	}
`
