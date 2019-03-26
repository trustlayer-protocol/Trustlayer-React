import React from 'react'
import styled from '@emotion/styled'
import AgreementBox from 'components/AgreementBox'
import AdoptButton from 'components/buttons/Adopt'

const Root = styled.div`
	margin: 40px 0;
`

const Container = styled.div`
	max-width: 670px;
	margin: 0 auto;
`

const Heading = styled.div`
	font-size: 40px;
	margin-bottom: 20px;
`

export default () => (
	<Root>
		<Container>
			<Heading>Make NDAs automatic</Heading>
			<AgreementBox />
			<AdoptButton />
		</Container>
	</Root>
)
