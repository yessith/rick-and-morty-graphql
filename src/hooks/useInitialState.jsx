import { useQuery } from '@apollo/client'
import { GET_CHARECTER } from 'graphql/queries'
import { useEffect, useState } from 'react'
import { random } from 'utils/random'

export function useInitialState() {
	const id = random()
	const [list, setList] = useState([])
	const [characterId, setCharacterId] = useState(id)
	const [character, setCharacter] = useState()
	const [modal, setModal] = useState(false)

	// get singel character
	const { loading, data } = useQuery(GET_CHARECTER, {
		variables: {
			id: characterId,
		},
	})

	useEffect(() => {
		if (!data) return
		setCharacter(data.character)
	}, [data])

	// get id character & active modal
	const getIdCharacter = (id) => {
		toggleModal()
		setCharacterId(id)
	}

	const toggleModal = () => setModal(!modal)

	return { list, character, modal, loading, setList, setModal, toggleModal, getIdCharacter }
}
