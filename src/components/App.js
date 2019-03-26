import React from 'react'
import 'typeface-roboto'
import HashReader from './HashReader.js'
import { BrowserRouter, Route } from 'react-router-dom'
import TrustlayerAdopt from 'scenes/TrustlayerAdopt'

export default () => (
	<BrowserRouter>
		<Route exact path="/" component={TrustlayerAdopt} />
		<Route path="/:hashId" component={HashReader} />
	</BrowserRouter>
)
