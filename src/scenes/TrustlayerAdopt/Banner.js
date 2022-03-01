import React from 'react'
import styled from '@emotion/styled'

const Banner = () => (
	<Root>
		Trustbot is now Trustlayer!{' '}
		<a href="mailto: jim@trustbot.io">Contact us for more information.</a>
	</Root>
)

const Root = styled.div`
	position: fixed;
	z-index: 99999;
	top: 0;
	left: 0;
	width: 100%;
	text-align: center;
	padding: 8px 20px;
	background: #333;
	color: white;
	letter-spacing: 0.02rem;

	a {
		color: white;
		font-weight: 500;
	}
`

export default Banner
