import React from 'react'
import styled from '@emotion/styled'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import PdfButton from 'components/buttons/PDF'
import { useHttp } from 'hooks/http'
import _ from 'lodash'

const Root = styled.div`
	margin: 40px 0;
`

const Container = styled.div`
	max-width: 670px;
	margin: 0 auto;
`

export default ({ code }) => {
	const [isLoading, fetchedData] = useHttp(`get/agreement/${code}`)

	const user1 = _.get(fetchedData, 'user1', {})
	const user2 = _.get(fetchedData, 'user2', {})
	const agreementContent = _.get(fetchedData, 'form.content', '')
	const hash = _.get(fetchedData, 'form.form_hash', '')

	return (
		<Root>
			<Container>
				<UserBlurb
					avatarUrl={user1.avatar_url}
					name={user1.full_name}
					email={user1.email}
				/>
				<UserBlurb
					avatarUrl={user2.avatar_url}
					name={user2.full_name}
					email={user2.email}
				/>
				<AgreementBox hash={hash} agreement={agreementContent} />
				<PdfButton />
			</Container>
		</Root>
	)
}
