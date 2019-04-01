import React from 'react'
import styled from '@emotion/styled'

const Root = styled.div`
	padding-top: 40px;
`

const Header = styled.h1`
	text-align: center;
`

export default ({ location }) => {
	const urlParams = new URLSearchParams(location.search)
	const email = urlParams.get('email')
	localStorage.setItem('email', email)

	return (
		<Root>
			<Header>Success</Header>
		</Root>
	)
}
