import React from 'react'
import UserCode from 'scenes/UserCode'
import AgreementCode from 'scenes/AgreementCode'
import HomeCode from 'scenes/HomeCode'

const getFirstCharacter = text => text.charAt(0).toLowerCase()

export default ({ match }) => {
	switch (getFirstCharacter(match.params.hashId)) {
		case 'u':
			return <UserCode />

		case 'a':
			return <AgreementCode />

		case 'h':
			return <HomeCode />

		default:
			return (
				<div>
					<strong>{match.params.hashId}</strong> is an Invalid hash code.
					<p>For testing try adding u, a, or h as the first character.</p>
				</div>
			)
	}
}
