import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import ndas from './tempData.js'
import styled from '@emotion/styled'
import _ from 'lodash'

const Root = styled.div`
	max-width: 670px;
	margin: 0 auto;
	padding: 20px;
`

const Header = styled.div`
	display: flex;
	align-items: center;
`

const Paper = styled.div`
	background: white;
	border-radius: 6px;
	padding: 20px;
	margin-bottom: 20px;
	cursor: pointer;
`

const Title = styled.div`
	margin: 0 0 10px 0;
	font-size: 24px;
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
				<h3>Find forms</h3>
			</Header>
			{filteredNdas.map((nda, index) => (
				<Paper key={index} onClick={() => goToForm(nda.type)}>
					<h4>{nda.name}</h4>
					<div>{nda.author}</div>
					<div>Updated {nda.date}</div>
					<p>{nda.blurb}</p>
				</Paper>
			))}
		</Root>
	)
})
