import React from 'react'
import styled from '@emotion/styled'

const Avatars = styled.div`
	display: flex;
	align-items: center;
`

const DISPLAY_AVATAR_AMOUNT = 5

const outputAvatars = avatars => {
	if (avatars.length > DISPLAY_AVATAR_AMOUNT) {
		return (
			<>
				{avatars.slice(0, DISPLAY_AVATAR_AMOUNT).map((avatar, index) => (
					<div
						key={'avatar-' + index}
						style={{
							backgroundImage: `url(${avatar.avatar_url})`,
							backgroundSize: 'cover',
							backgroundColor: '#333',
							width: 28,
							height: 28,
							borderRadius: 50,
							marginRight: 5
						}}
					/>
				))}
				<div>+ {avatars.length - DISPLAY_AVATAR_AMOUNT}</div>
			</>
		)
	} else {
		return avatars.map((avatar, index) => (
			<div
				key={`avatar-${index}`}
				style={{
					backgroundImage: `url(${avatar.avatar_url})`,
					backgroundSize: 'cover',
					backgroundColor: '#333',
					width: 28,
					height: 28,
					borderRadius: 50,
					marginRight: 5
				}}
			/>
		))
	}
}

export default ({ avatars = [] }) => (
	<Avatars>{avatars.length > 0 && outputAvatars(avatars)}</Avatars>
)
