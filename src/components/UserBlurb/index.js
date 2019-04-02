import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const Root = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const UserInfo = styled.div``

const InviteMessage = styled.div`
	font-size: 18px;
	font-weight: 500;
`

const Bottom = styled.div`
	font-size: 14px;
`

export default ({ avatarUrl, name, email, date }) => (
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
		{date ? (
			<UserInfo>
				<InviteMessage>{name || email} adopted</InviteMessage>
				<Bottom>
					{moment().format('d MMM YYYY')} | {email}
				</Bottom>
			</UserInfo>
		) : (
			<UserInfo>
				<InviteMessage>{name || email} invites you to adopt</InviteMessage>
				<Bottom>{email}</Bottom>
			</UserInfo>
		)}
	</Root>
)
