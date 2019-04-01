import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
	width: 100%;
	color: #1e88e5;
	background: white;
	border: 2px solid #1e88e5;
	font-size: 30px;
	padding: 15px 0;
	transition: background 250ms;
	max-width: 670px;
	&:disabled {
		background: #ddd;
	}
`

export default ({ text, onClick }) => <Button onClick={onClick}>{text}</Button>
