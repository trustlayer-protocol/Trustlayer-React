import ButtonImage from './google.svg'
import React from 'react'

const DEV_CLIENT_ID =
	'383771246634-h53hieefe5ip1f6rv8rk0lu5g6b9ub72.apps.googleusercontent.com'
const PRODUCTION_CLIENT_ID =
	'383771246634-h53hieefe5ip1f6rv8rk0lu5g6b9ub72.apps.googleusercontent.com'
const DEV_REDIRECT_URI = 'http://localhost:8081/modify/google'
const PRODUCTION_REDIRECT_URI =
	'https://trustlayerapi.trustbot.io/modify/google'

const CLIENT_ID =
	process.env.NODE_ENV === 'development' ? DEV_CLIENT_ID : PRODUCTION_CLIENT_ID
const REDIRECT_URI =
	process.env.NODE_ENV === 'development'
		? DEV_REDIRECT_URI
		: PRODUCTION_REDIRECT_URI

export const googleButton = ({ state }) => {
	return (
		<span style={{ cursor: 'pointer' }}>
			<img
				onClick={() => authorize(state)}
				alt="google"
				style={{ height: 50, width: 200 }}
				src={ButtonImage}
			/>
		</span>
	)
}

export const loadGoogleScript = (scriptName, onLoad) => {
	if (!window.gapi) {
		insertScriptElements()
		window.init = () => {
			window.gapi.load(scriptName, () => {
				if (onLoad) {
					onLoad()
				}
			})
		}
	} else {
		if (onLoad) {
			onLoad()
		}
	}
}

function insertScriptElements() {
	const scriptTag = document.createElement('script')
	const metaTag = document.createElement('meta')
	scriptTag.src = 'https://apis.google.com/js/platform.js?onload=init'
	metaTag.name = 'google-signin-client_id'
	metaTag.content = CLIENT_ID
	document.head.appendChild(scriptTag)
	document.head.appendChild(metaTag)
}

export const isGoogleLoggedIn = () => {
	if (window.gapi && window.gapi.auth2.getAuthInstance()) {
		let GoogleAuth = window.gapi.auth2.getAuthInstance()
		console.log('signed in: ' + GoogleAuth.isSignedIn.get())
	}
}

const authorize = state => {
	const config = {
		client_id: CLIENT_ID,
		scope: 'email profile openid',
		response_type: 'token',
		prompt: 'select_account'
	}

	window.gapi.auth2.authorize(config, response => {
		const { access_token } = response
		if (!access_token) return
		window.location.replace(
			`${REDIRECT_URI}?code=${access_token}&state=${state}`
		)
	})
}

export const signOut = () => {
	if (!window.gapi.auth2 || !window.gapi.auth2.getAuthInstance()) {
		initAuth2(null, () => {
			window.gapi.auth2.getAuthInstance().signOut()
		})
	} else {
		window.gapi.auth2.getAuthInstance().signOut()
	}
}

function initAuth2(state, onInit) {
	console.log({ state })
	window.gapi.auth2
		.init({
			client_id: CLIENT_ID,
			ux_mode: 'redirect',
			fetch_basic_profile: true
		})
		.then(onInit)
}
