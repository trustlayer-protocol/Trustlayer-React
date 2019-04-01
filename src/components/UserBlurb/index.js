import React from 'react'
import styled from '@emotion/styled'

const Root = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const UserInfo = styled.div``

const InviteMessage = styled.div`
	font-size: 18px;
`

const Email = styled.div`
	font-size: 14px;
`

export default ({ avatarUrl, name, email }) => (
	<Root>
		<div
			style={{
				backgroundImage: `url(${avatarUrl})`,
				backgroundSize: 'cover',
				backgroundColor: '#555',
				width: 36,
				height: 36,
				borderRadius: 50,
				marginRight: 10
			}}
		/>
		<UserInfo>
			<InviteMessage>{name || email} invites you to adopt</InviteMessage>
			<Email>{email}</Email>
		</UserInfo>
	</Root>
)
