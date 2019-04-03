import React from 'react'
import UserCode from 'scenes/UserCode'
import AdoptCode from 'scenes/AdoptCode'
import AgreementCode from 'scenes/AgreementCode'
import HomeCode from 'scenes/HomeCode'

const getFirstCharacter = text => text.charAt(0).toLowerCase()

export default ({ location, match, history }) => {
	const code = match.params.hashId

	switch (getFirstCharacter(code)) {
		case 'u':
			return <UserCode history={history} code={code} />

		case 'd':
			return <AdoptCode code={code} />

		case 'a':
			return <AgreementCode location={location} code={code} />

		case 'h':
			return <HomeCode code={code} />

		default:
			return (
				<div>
					<strong>{match.params.hashId}</strong> is an Invalid hash code.
					<p>For testing try adding u, a, or h as the first character.</p>
				</div>
			)
	}
}
