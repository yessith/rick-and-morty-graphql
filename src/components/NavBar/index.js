import { Link } from 'react-router-dom'
import { Button } from 'styled-components/Button'
import { Header, Logo, NavMenu } from 'styled-components/NavBar'

export function NavBar({ onRandomId }) {
	return (
		<Header>
			<Logo to='/'>
				<figure>
					<img
						src='https://ernestognw.github.io/rick-and-morty-random/static/media/logo-white.fab45c5f.svg'
						alt='Logo'
					/>
				</figure>
			</Logo>
			<NavMenu>
				<Button onClick={onRandomId}>Generate</Button>
				<Button>
					<Link to='/caracters'>History</Link>
				</Button>
			</NavMenu>
		</Header>
	)
}
