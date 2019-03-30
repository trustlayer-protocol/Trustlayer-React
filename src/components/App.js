import React from 'react'
import 'typeface-roboto'
import HashReader from './HashReader.js'
import { BrowserRouter, Route } from 'react-router-dom'
import TrustlayerAdopt from 'scenes/TrustlayerAdopt'
import SsoSuccess from 'scenes/SsoSuccess'

export default () => (
	<BrowserRouter>
		<Route exact path="/" component={TrustlayerAdopt} />
		<Route path="/sso-success" component={SsoSuccess} />
		<Route exact path="/:hashId" component={HashReader} />
	</BrowserRouter>
)
