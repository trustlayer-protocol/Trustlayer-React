import React from 'react'
import styled from '@emotion/styled'
import { Done } from '@material-ui/icons'
import moment from 'moment'

const Root = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	margin-bottom: 20px;
	padding-left: 20px;
`

const UserInfo = styled.div``

const InviteMessage = styled.div`
	font-size: 18px;
	font-weight: 500;
`

const Bottom = styled.div`
	font-size: 14px;
`

const GreenCheck = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	background: #8bc34a;
	border-radius: 20px;
	position: absolute;
	bottom: -5px;
	left: 54px;
`

export default ({
	avatarUrl,
	name,
	email,
	date,
	hasGreenCheck = true,
	noText = false,
	isAdopt = true
}) => (
	<Root>
		<div
			style={{
				backgroundImage: `url(${avatarUrl})`,
				backgroundSize: 'cover',
				backgroundColor: '#555',
				width: 56,
				height: 56,
				borderRadius: 50,
				marginRight: 10
			}}
		/>
		{isAdopt && (
			<GreenCheck>
				<Done
					style={{
						color: 'white',
						fontSize: 16
					}}
				/>
			</GreenCheck>
		)}
		{noText ? (
			<UserInfo>
				<InviteMessage>{name}</InviteMessage>
				<Bottom>{email}</Bottom>
			</UserInfo>
		) : (
			<>
				{date ? (
					<UserInfo>
						{isAdopt ? (
							<>
								<InviteMessage>{name || email} adopted</InviteMessage>
								<Bottom>
									{moment(parseInt(date, 10)).format('D MMM YYYY')} | {email}
								</Bottom>
							</>
						) : (
							<>
								<InviteMessage>{name}</InviteMessage>
								<Bottom>{email}</Bottom>
							</>
						)}
					</UserInfo>
				) : (
					<UserInfo>
						<InviteMessage>{name || email} invites you to adopt</InviteMessage>
						<Bottom>{email}</Bottom>
					</UserInfo>
				)}
			</>
		)}
	</Root>
)
