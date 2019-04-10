import React from 'react'
import styled from '@emotion/styled'

const Heading = styled.div`
	font-size: 32px;
	margin-bottom: 10px;
`
const Root = styled.div`
	padding-left: 20px;
`

const List = styled.div`
	margin-bottom: 20px;
`

const Item = styled.div`
	display: flex;
	align-items: center;
	color: #4f575a;
	font-size: 25px;
	margin-bottom: 15px;
	line-height: 1;
`

const numberSize = 28
const Number = styled.span`
	font-size: 18px;
	background: #1d7acc;
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
	<Root>
		<Heading>Easiest NDA ever</Heading>
		<List>
			<Item>
				<Number>1</Number> You adopt and share your link
			</Item>
			<Item>
				<Number>2</Number> They adopt and the NDA activates
			</Item>
			<Item>
				<Number>3</Number> Blockchain verifies and preserves
			</Item>
		</List>
	</Root>
)
