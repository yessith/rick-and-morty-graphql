import React from 'react'
import { useInitialState } from 'hooks/useInitialState'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const initialState = useInitialState()

	return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
