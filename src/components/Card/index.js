import { AppContext } from 'context/AppContext'
import { useContext } from 'react'
import { Button } from 'styled-components/Button'
import { CardCharacter } from 'styled-components/Card'

export function Card({ character }) {
	const { getIdCharacter } = useContext(AppContext)
	return (
		<CardCharacter>
			<figure>
				<img src={character.image} alt={character.name} />
			</figure>
			<div>
				<h2>{character.name}</h2>
				<Button onClick={() => getIdCharacter(character.id)}>Details</Button>
			</div>
		</CardCharacter>
	)
}
