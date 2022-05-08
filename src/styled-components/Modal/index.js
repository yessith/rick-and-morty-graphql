import styled from 'styled-components'

export const ModalContainer = styled.section`
	background: rgba(32, 35, 41, 0.8);
	position: fixed;
	top: -10px;
	left: -10px;
	right: -10px;
	bottom: -10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`

export const ModalContent = styled.div`
	position: relative;
	& button {
		position: absolute;
		top: 4px;
		right: 20px;
		cursor: pointer;
		border: none;
		border-radius: 50%;
		padding: 0.5rem;
		font-size: 2.5rem;
		background-color: var(--Color-White);
	}
`
