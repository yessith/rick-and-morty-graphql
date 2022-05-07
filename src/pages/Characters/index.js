import { ListCharacters } from 'components/ListCharacters'
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
			<main>
				<ListCharacters />
			</main>
		</>
	)
}
