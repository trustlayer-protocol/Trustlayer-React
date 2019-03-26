import React from 'react'
import styled from '@emotion/styled'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import PdfButton from 'components/buttons/PDF'

const Root = styled.div`
	margin: 40px 0;
`

const Container = styled.div`
	max-width: 670px;
	margin: 0 auto;
`

export default () => (
	<Root>
		<Container>
			<UserBlurb />
			<AgreementBox />
			<PdfButton />
		</Container>
	</Root>
)
