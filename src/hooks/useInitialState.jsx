import { useState } from 'react'

export function useInitialState() {
	const [list, setList] = useState([])
	const [modal, setModal] = useState(false)

	return { list, modal, setList, setModal }
}
