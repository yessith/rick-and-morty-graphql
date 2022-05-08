import { ListCharacters } from 'components/ListCharacters'
import { MainLayout } from 'styled-components/MainLayout'
import { Header, Logo } from 'styled-components/NavBar'

export function Caracters() {
	return (
		<>
			<Header>
				<Logo to='/'>
					<figure>
						<img
							src='https://ernestognw.github.io/rick-and-morty-random/static/media/logo-white.fab45c5f.svg'
							alt='Logo'
						/>
					</figure>
				</Logo>
			</Header>
			<MainLayout>
				<ListCharacters />
			</MainLayout>
		</>
	)
}
