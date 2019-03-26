import React from 'react'
import styled from '@emotion/styled'

const Avatar = styled.div`
	background: #333;
	width: 28px;
	height: 28px;
	border-radius: 50px;
	margin-right: 5px;
`

const Avatars = styled.div`
	display: flex;
	align-items: center;
`

export default () => (
	<Avatars>
		<Avatar />
		<Avatar />
		<Avatar />
		<div>+ 248K</div>
	</Avatars>
)
