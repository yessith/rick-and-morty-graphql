import { useEffect, useState, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { AppContext } from 'context/AppContext'
import { GET_CHARECTER } from 'graphql/queries'
import { random } from 'utils/random'

export function useGetData() {
	const id = random()
	const { list, setList } = useContext(AppContext)
	const [character, setCharacter] = useState()
	const [characterId, setCharacterId] = useState(id)

	//cuando el componente se monta el hook useQuery consulta la api graphql y se le pasa como parametro el id de un personaje random para obtener esa informacion
	const { loading, error, data } = useQuery(GET_CHARECTER, {
		variables: {
			id: characterId,
		},
	})

	useEffect(() => {
		if (!data) return

		setCharacter(data.character)
		setList([data.character, ...list])

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	const randomIdCharacter = () => {
		const id = random()
		setCharacterId(id)
	}

	return { character, list, loading, error, randomIdCharacter }
}
