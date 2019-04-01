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
				onClick={() => signIn(state)}
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

export const hasIdToken = () => {
	const hashQueryParams = window.location.hash
	const strParams = hashQueryParams.slice(1, hashQueryParams.length)
	const urlParams = new URLSearchParams(strParams)

	return urlParams.has('id_token')
}

export const getIdToken = () => {
	const hashQueryParams = window.location.hash
	const strParams = hashQueryParams.slice(1, hashQueryParams.length)
	const urlParams = new URLSearchParams(strParams)

	return urlParams.get('id_token')
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

const signIn = state => {
	if (!window.gapi.auth2 || !window.gapi.auth2.getAuthInstance()) {
		initAuth2(() => {
			window.gapi.auth2
				.getAuthInstance()
				.signIn()
				.then(idToken => {
					console.log('here')
					onSigninSuccess(idToken, state)
				})
		})
	} else {
		window.gapi.auth2
			.getAuthInstance()
			.signIn()
			.then(idToken => {
				console.log('here')
				onSigninSuccess(idToken, state)
			})
	}
}

const onSigninSuccess = (idToken, state) => {
	console.log({ idToken, state })
}

export const signOut = () => {
	if (!window.gapi.auth2 || !window.gapi.auth2.getAuthInstance()) {
		initAuth2(() => {
			window.gapi.auth2.getAuthInstance().signOut()
		})
	} else {
		window.gapi.auth2.getAuthInstance().signOut()
	}
}

function initAuth2(onInit) {
	window.gapi.auth2
		.init({
			client_id: CLIENT_ID,
			ux_mode: 'redirect',
			redirect_uri: REDIRECT_URI,
			fetch_basic_profile: true,
			state: JSON.stringify({ hello: 'world' })
		})
		.then(onInit)
}
