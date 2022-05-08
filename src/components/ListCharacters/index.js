import { useContext } from 'react'
import { AppContext } from 'context/AppContext'
import { Card } from 'components/Card'
import { Modal } from 'components/Modal'
import { Details } from 'components/Details'
import { List } from 'styled-components/ListCharacter'

export function ListCharacters() {
	const { list, character, loading } = useContext(AppContext)

	return (
		<>
			<List>
				{list.map((character) => (
					<Card key={character.id} character={character} />
				))}
			</List>
			<Modal>
				<Details character={character} loading={loading} />
			</Modal>
		</>
	)
}
