import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
	width: 100%;
	color: white;
	background: #4caf50;
	font-size: 30px;
	padding: 15px 0;
	border: none;
	cursor: pointer;
	transition: background 250ms;
	&:disabled {
		background: #ddd;
	}
	&:hover {
		background: #388e3c;
	}
`

export default ({ disabled, text, onClick }) => (
	<Button disabled={disabled} onClick={onClick}>
		{text}
	</Button>
)
