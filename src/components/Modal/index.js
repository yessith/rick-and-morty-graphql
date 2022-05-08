import { AppContext } from 'context/AppContext'
import { useContext } from 'react'
import { ModalContainer, ModalContent } from 'styled-components/Modal'

export function Modal({ children }) {
	const { modal, toggleModal } = useContext(AppContext)
	if (!modal) return

	return (
		<ModalContainer>
			<ModalContent>
				{children}
				<button onClick={toggleModal}>❌</button>
			</ModalContent>
		</ModalContainer>
	)
}
