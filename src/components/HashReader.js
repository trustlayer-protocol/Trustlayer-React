import React from 'react'
import UserCode from 'scenes/UserCode'

const getFirstCharacter = text => text.charAt(0).toLowerCase()

export default ({ match }) => {
	switch (getFirstCharacter(match.params.hashId)) {
		case 'u':
			return <UserCode />

		case 'a':
			return <div>Agreement code</div>

		case 'h':
			return <div>Home code</div>

		default:
			return (
				<div>
					<strong>{match.params.hashId}</strong> is an Invalid hash code.
					<p>For testing try adding u, a, or h as the first character.</p>
				</div>
			)
	}
}
