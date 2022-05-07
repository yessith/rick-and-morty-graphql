import { useContext } from 'react'
import { AppContext } from 'context/AppContext'
import { Card } from 'components/Card'

export function ListCharacters() {
	const { list } = useContext(AppContext)

	return (
		<section>
			{list.map((character) => (
				<Card key={character.id} character={character} />
			))}
		</section>
	)
}
