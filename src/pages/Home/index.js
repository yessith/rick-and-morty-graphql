import { NavBar } from 'components/NavBar'
import { Details } from 'components/Details'
import { useGetData } from 'hooks/useGetData'
import { MainLayout } from 'styled-components/MainLayout'

export function Home() {
	const { character, loading, error, randomIdCharacter } = useGetData()
	return (
		<>
			<NavBar onRandomId={randomIdCharacter} />
			<MainLayout>
				<Details character={character} loading={loading} error={error} />
			</MainLayout>
		</>
	)
}
