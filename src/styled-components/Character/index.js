import styled from 'styled-components'

export const Character = styled.section`
	position: relative;
	display: grid;
	gap: 2rem;
	padding: 1rem;
	background-color: var(--Color-Brand);
	& figure {
		border: 5px dotted var(--Btn-Primary);
		border-radius: 50%;
		padding: 0.5rem;
		& img {
			border-radius: 50%;
		}
	}
	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`
export const DetailsCharacter = styled.article`
	display: grid;
	gap: 2rem;
	max-height: 400px;
	place-items: center;
	align-self: center;
`
export const DetailsList = styled.ul`
	display: grid;
	gap: 2rem;
`
