import styled from 'styled-components'

export const CardCharacter = styled.article`
	background-color: var(--Color-Brand-Second);
	box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
	position: relative;
	overflow: hidden;
	border-radius: 0.5rem;
	display: grid;
	place-items: center;
	& div {
		width: 100%;
		margin: 1rem;
		display: flex;
		justify-content: space-around;
	}
`
