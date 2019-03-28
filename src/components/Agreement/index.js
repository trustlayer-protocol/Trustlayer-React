import React from 'react'
import Markdown from 'react-markdown'

export default ({ agreement }) => (
	<>
		<Markdown source={agreement} />
	</>
)
