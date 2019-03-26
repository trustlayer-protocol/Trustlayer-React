import React from 'react'
import 'typeface-roboto'
import HashReader from './HashReader.js'
import IndexPage from 'scenes/IndexPage'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from '@emotion/styled'

const Main = styled('main')``
const App = () => (
	<Main>
		<BrowserRouter>
			<Route exact path="/" component={IndexPage} />
			<Route path="/:hashId" component={HashReader} />
		</BrowserRouter>
	</Main>
)

export default App
