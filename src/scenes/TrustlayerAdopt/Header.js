import React from 'react'
import styled from '@emotion/styled'
import { Heading } from 'services/styles'

const List = styled.div`
	margin-bottom: 20px;
`

const Item = styled.div`
	display: flex;
	align-items: center;
	color: #455a64;
	font-size: 20px;
	margin-bottom: 15px;
`

const numberSize = 25
const Number = styled.span`
	font-size: 18px;
	background: #1e88e5;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	width: ${numberSize}px;
	height: ${numberSize}px;
	border-radius: 100px;
`

export default () => (
	<>
		<Heading>Easiest NDA ever</Heading>
		<List>
			<Item>
				<Number>1</Number> Read, adopt and share your link
			</Item>
			<Item>
				<Number>2</Number> They adopt and your NDA activates
			</Item>
			<Item>
				<Number>3</Number> Verified and preserved on Blockchain
			</Item>
		</List>
	</>
)
