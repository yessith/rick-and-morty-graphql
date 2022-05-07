import { NavBar } from 'components/NavBar'
import { Details } from 'components/Details'
import { useGetData } from 'hooks/useGetData'

export function Home() {
	const { character, loading, error, randomIdCharacter } = useGetData()
	return (
		<>
			<NavBar onRandomId={randomIdCharacter} />
			<main>
				<Details character={character} loading={loading} error={error} />
			</main>
		</>
	)
}
