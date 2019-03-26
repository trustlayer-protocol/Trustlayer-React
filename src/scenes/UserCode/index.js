import React from 'react'
import styled from '@emotion/styled'
import UserBlurb from 'components/UserBlurb'
import Avatars from 'components/Avatars'
import Agreement from 'components/Agreement'

const Root = styled('div')`
	margin: 40px 0;
`

const Container = styled('div')`
	max-width: 670px;
	margin: 0 auto;
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
	border: none;
`

const AgreementBox = styled('div')`
	background: white;
	border-radius: 6px;
	padding: 20px;
`

export default () => (
	<Root>
		<Container>
			<UserBlurb />
			<AgreementBox>
				<Avatars />
				<Agreement />
				<VerificationCode>
					Verification code XlkdfFDHLdsfklsdjf123dsfadslf3Alkjdf1SDFjo4A2
				</VerificationCode>
				<Button>ADOPT</Button>
			</AgreementBox>
		</Container>
	</Root>
)
