import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { GlobalStyle } from 'styled-components/Global'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<StrictMode>
		<GlobalStyle />
		<App />
	</StrictMode>
)
