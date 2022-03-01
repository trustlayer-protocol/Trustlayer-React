import React, { useState } from 'react'
import 'typeface-roboto'
import HashReader from './HashReader.js'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import TrustlayerAdopt from 'scenes/TrustlayerAdopt'
import SsoSuccess from 'scenes/SsoSuccess'
import SsoFail from 'scenes/SsoFail'
import Login from 'scenes/Login'
import Home from 'scenes/HomeCode'
import FormAdopt from 'scenes/FormAdopt'
import FindForm from 'scenes/FormAdopt/FindForm'
import styled from '@emotion/styled'
import HowItWorksImage from 'media/drop-down.png'

export default () => {
	const [isShowImage, setImage] = useState(false)

	const showImage = () => {
		setImage(true)
	}

	const hideImage = () => {
		setImage(false)
	}

	const toggleImage = () => {
		setImage(prev => !prev)
	}

	return (
		<>
			<Root>
				{isShowImage && (
					<>
						<Img src={HowItWorksImage} onClick={hideImage} />
						<Backdrop onClick={hideImage} />
					</>
				)}
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={TrustlayerAdopt} />
						<Route path="/sso-success" component={SsoSuccess} />
						<Route path="/fail" component={SsoFail} />
						<Route path="/login" component={Login} />
						<Route path="/home" component={Home} />
						<Route path="/form/:type/:version" component={FormAdopt} />
						<Route path="/form/:type" component={FormAdopt} />
						<Route path="/form" component={FormAdopt} />
						<Route path="/find-form" component={FindForm} />
						<Route exact path="/:hashId" component={HashReader} />
					</Switch>
				</BrowserRouter>
			</Root>
		</>
	)
}

const Root = styled.div`
	padding: 41px 20px 0;
`

const Img = styled.img`
	display: block;
	position: absolute;
	width: 100vw;
	max-width: 100%;
	z-index: 9;
	left: 50%;
	top: 39px;
	transform: translateX(-50%);
	max-width: 500px;
`

const Backdrop = styled.div`
	background: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 8;
	left: 0;
	top: 0;
`
