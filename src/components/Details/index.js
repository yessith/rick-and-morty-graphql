import { Spinner } from 'components/Spinner'
import { Character, DetailsCharacter, DetailsList } from 'styled-components/Character'

export function Details({ character, loading, error }) {
	if (loading) return <Spinner />
	if (error) return console.error(error)

	return (
		<>
			{character ? (
				<Character>
					<figure>
						<img src={character.image} alt={character.name} />
					</figure>
					<DetailsCharacter>
						<div>
							<h1>{character.name}</h1>
							<span>Character ID: {character.id}</span>
						</div>
						<DetailsList>
							<li>Status: {character.status}</li>
							<li>Species: {character.species}</li>
							<li>Type: {character.type}</li>
							<li>Gender: {character.gender}</li>
							<li>Origin: {character.origin.name}</li>
							<li>Location: {character.location.name}</li>
							<li>Create al: {character.created}</li>
						</DetailsList>
					</DetailsCharacter>
				</Character>
			) : (
				<h1>No se ha cargado ningún personaje</h1>
			)}
		</>
	)
}
