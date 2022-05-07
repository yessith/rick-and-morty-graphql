import { gql } from '@apollo/client'

// gql: modulo que ayuda a parsear o formatear tadas las querys que se definen para que la api graphql pueada entender esa query

// query para obtener un personaje especifico por su id de la api graphql

export const GET_CHARECTER = gql`
	query getCharecter($id: ID!) {
		character(id: $id) {
			id
			name
			image
			status
			species
			type
			gender
			created
			origin {
				name
			}
			location {
				name
			}
		}
	}
`
