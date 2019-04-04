import React from 'react'
import styled from '@emotion/styled'
import Markdown from 'react-markdown'

const Root = styled.div`
	font-family: 'Noto Serif TC', serif;
`

export default ({ agreement }) => (
	<Root>
		<Markdown source={agreement} />
	</Root>
)
