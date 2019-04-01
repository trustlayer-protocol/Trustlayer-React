import React from 'react'
import ButtonImage from './linkedin.svg'

const redirectUri = 'http%3A%2F%2Flocalhost%3A8081%2Fmodify%2Flinkedin'
// const redirectUri = 'https%3A%2F%2Fapi.trustbot.io%2Frest%2Foauth%2Flinkedin';
const AUTHORIZE_URI = `https://www.linkedin.com/oauth/v2/authorization?client_id=78bo5ls26ov71s&response_type=code&redirect_uri=${redirectUri}&scope=r_liteprofile%20r_emailaddress&state=`

const linkedInButton = ({ state }) => (
	<span style={{ cursor: 'pointer' }}>
		<img
			onClick={() => global.window.location.replace(`${AUTHORIZE_URI}${state}`)}
			alt="linkedin"
			style={{ height: 50, width: 200 }}
			src={ButtonImage}
		/>
	</span>
)

export default linkedInButton
