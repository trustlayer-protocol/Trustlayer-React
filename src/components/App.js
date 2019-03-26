import React from 'react'
import 'typeface-roboto'
import HashReader from './HashReader.js'
import IndexPage from './IndexPage'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
	<BrowserRouter>
		<Route exact path="/" component={IndexPage} />
		<Route path="/:hashId" component={HashReader} />
	</BrowserRouter>
)

export default App
