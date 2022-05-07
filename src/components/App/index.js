import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { AppProvider } from 'context/AppContext'
import { AppRoutes } from 'routes/AppRoutes'

export function App() {
	// implementacion del cliente de graphql para consumir la api
	const client = new ApolloClient({
		uri: 'https://rickandmortyapi.com/graphql',
		cache: new InMemoryCache(),
	})

	return (
		// ApolloProvider conecta apollo client con react para  acceder a los datos de la api graphql.
		<ApolloProvider client={client}>
			<AppProvider>
				<AppRoutes />
			</AppProvider>
		</ApolloProvider>
	)
}
