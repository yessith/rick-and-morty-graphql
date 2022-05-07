export function Card({ character }) {
	return (
		<article>
			<figure>
				<img src={character.image} alt={character.name} />
			</figure>
			<div>
				<h2>{character.name}</h2>
				<button>Details</button>
			</div>
		</article>
	)
}
