import React from 'react'
import styled from '@emotion/styled'
import Avatars from 'components/Avatars'
import Agreement from 'components/Agreement'

const Container = styled('div')`
	max-width: 670px;
	background: white;
	border-radius: 6px;
	margin: 40px auto;
	padding: 20px;
`

const VerificationCode = styled('p')`
	background: #ddd;
`

const Button = styled('button')`
	width: 100%;
	color: white;
	background: #4caf50;
	font-size: 30px;
	padding: 15px 0;
`

export default () => (
	<Container>
		<Avatars />
		<Agreement />
		<VerificationCode>
			Verification code XlkdfFDHLdsfklsdjf123dsfadslf3Alkjdf1SDFjo4A2
		</VerificationCode>
		<Button>ADOPT</Button>
	</Container>
)
