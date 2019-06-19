import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ArrowRightAlt } from '@material-ui/icons'

export default () => (
	<Root>
		<Heading>Easiest NDA ever</Heading>
		<List>
			<Item>
				<Number>1</Number>{' '}
				<Text>
					You adopt and share
					<br />
					your link
				</Text>
			</Item>
			<ArrowContainer>
				<ArrowRightAlt
					style={{
						fontSize: 44
					}}
				/>
			</ArrowContainer>
			<Item>
				<Number>2</Number>{' '}
				<Text>
					They adocolorhe
					<br />
					NDA activities
				</Text>
			</Item>
			<ArrowContainer>
				<ArrowRightAlt
					style={{
						fontSize: 44
					}}
				/>
			</ArrowContainer>
			<Item>
				<Number>3</Number>{' '}
				<Text>
					Blockchain verifies
					<br />
					and preserves
				</Text>
			</Item>
		</List>
	</Root>
)

const Heading = styled.div`
	text-align: center;
	font-size: 32px;
	margin-bottom: 30px;
	opacity: 0.8;
`
const Root = styled.div`
	padding-left: 20px;
`

const List = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
`

const Item = styled.div`
	color: #4f575a;
	font-size: 25px;
	margin-bottom: 15px;
	line-height: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const ArrowContainer = styled.div`
	margin-top: 8px;
	color: #9a9a9a;
`

const numberSize = 56
const Number = styled.span`
	font-size: 25px;
	background: #676bc1;
	border: 6px solid #b3b4cd;
	color: white;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	margin-bottom: 20px;
	width: ${numberSize}px;
	height: ${numberSize}px;
	border-radius: 100px;
`

const Text = styled.div`
	color: #606060;
	font-size: 16px;
	text-align: center;
	line-height: 1.4;
	opacity: 0.9;
`
