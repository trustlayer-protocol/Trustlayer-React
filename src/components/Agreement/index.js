import React from 'react'
import styled from '@emotion/styled'
import Markdown from 'react-markdown'

export default ({ agreement }) => (
	<Root>
		<Markdown source={agreement} />
	</Root>
)

const Root = styled.div`
	line-height: 1.65;

	ul {
		background: #f6f6fb;
		padding: 20px 10px 20px 40px;

		li {
			color: #757575;
			margin-bottom: 10px;

			&:last-child {
				margin-bottom: 0;
			}
		}

		strong {
			color: black;
		}
	}
`
