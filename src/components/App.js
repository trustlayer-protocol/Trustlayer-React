import React from 'react'
import 'typeface-roboto'
import HashReader from './HashReader.js'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import TrustlayerAdopt from 'scenes/TrustlayerAdopt'
import SsoSuccess from 'scenes/SsoSuccess'
import styled from '@emotion/styled'

const Root = styled.div`
	padding-top: 36px;
`

const Header = styled.div`
	background: #111;
	color: #eee;
	text-align: center;
	padding: 10px 0;
	font-size: 14px;
	letter-spacing: 1px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
`

const Link = styled.a`
	color: #bbb;
	text-decoration: none;
	transition: color 250ms;
	&:hover {
		color: white;
	}
`

export default () => (
	<>
		<Root>
			<Header>
				<Link target="_blank" href="https://trustlayer.org">
					Trustlayer
				</Link>{' '}
				|{' '}
				<Link target="_blank" href="https://trustbot.io">
					Trustbot.io
				</Link>
			</Header>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={TrustlayerAdopt} />
					<Route path="/sso-success" component={SsoSuccess} />
					<Route exact path="/:hashId" component={HashReader} />
				</Switch>
			</BrowserRouter>
		</Root>
	</>
)
