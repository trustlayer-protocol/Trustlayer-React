import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import ndas from './tempData.js'
import styled from '@emotion/styled'
import _ from 'lodash'

const Root = styled.div`
	max-width: 700px;
	margin: 0 auto;
	padding: 20px;
`

const Header = styled.div`
	display: flex;
	align-items: center;
`

const Title = styled.h3`
	font-size: 24px;
`

const Paper = styled.div`
	background: white;
	border-radius: 6px;
	padding: 20px;
	margin-bottom: 20px;
	cursor: pointer;
	font-size: 17px;
	line-height: 1.4;
`

const NdaTitle = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-top: 0;
	margin-bottom: 18px;
`

const Details = styled.div`
	font-weight: 500;
	margin-bottom: 18px;
`

const Blurb = styled.p`
	font-weight: 400;
	margin-bottom: 0;
`

export default withRouter(({ history }) => {
	const filteredNdas = _.uniqBy(ndas, nda => nda.type)

	const goToForm = type => {
		const ndaFilteredByType = ndas.filter(nda => nda.type === type)
		const firstNda = ndaFilteredByType.shift()
		history.push(`/form/${type}/${firstNda.version}`)
	}

	return (
		<Root>
			<Header>
				<IconButton style={{ marginRight: 10 }} aria-label="Back">
					<ArrowBack />
				</IconButton>
				<Title>Find forms</Title>
			</Header>
			{filteredNdas.map((nda, index) => (
				<Paper key={index} onClick={() => goToForm(nda.type)}>
					<NdaTitle>{nda.name}</NdaTitle>
					<Details>
						<div>{nda.author}</div>
						<div>Updated {nda.date}</div>
					</Details>
					<Blurb>{nda.blurb}</Blurb>
				</Paper>
			))}
		</Root>
	)
})
