import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Header = styled.header`
	width: 100%;
	height: 80px;
	display: flex;
	padding: 0 1rem;
	max-width: 1200px;
	margin: 0 auto;
	place-items: center;
	justify-content: space-between;
`
export const Logo = styled(Link)`
	width: 200px;
	display: inline-flex;
`
export const NavMenu = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 2rem;
`
