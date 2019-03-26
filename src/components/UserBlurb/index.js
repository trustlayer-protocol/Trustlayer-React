import React from 'react'
import styled from '@emotion/styled'

const Root = styled('div')`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const Avatar = styled('div')`
	background: #777;
	width: 36px;
	height: 36px;
	border-radius: 50px;
	margin-right: 10px;
`

const UserInfo = styled('div')``

const InviteMessage = styled('div')`
	font-size: 18px;
`

const Email = styled('div')`
	font-size: 14px;
`

export default () => (
	<Root>
		<Avatar />
		<UserInfo>
			<InviteMessage>Sara Smith invites you to adopt</InviteMessage>
			<Email>sara.smith@abc.com</Email>
		</UserInfo>
	</Root>
)
