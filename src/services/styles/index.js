import styled from '@emotion/styled'

export const Root = styled.div`
	margin: 20px 0 80px;
`

export const Container = styled.div`
	max-width: 670px;
	margin: 0 auto;
`

export const Heading = styled.div`
	font-size: 32px;
	margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
`

export const ConfirmButton = styled.div`
	background: #4caf50;
	color: white;
	width: 100%;
	padding: 10px 0;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
`

export const AlertButton = styled.div`
	background: #e53935;
	color: white;
	width: 100%;
	padding: 10px 0;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
`

export const CancelButton = styled.div`
	background: transparent;
	color: #1e88e5;
	width: 100%;
	padding: 10px 0;
	text-align: center;
	font-size: 18px;
	font-weight: 300;
	cursor: pointer;
`

export const Link = styled.a`
	display: inline-block;
	color: #1e88e5;
	text-decoration: none;
	margin-bottom: 20px;
`
