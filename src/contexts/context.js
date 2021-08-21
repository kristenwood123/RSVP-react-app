import React, { useState, useContext, useReducer } from 'react'
const AppContext = React.createContext()

// Reducer, where we deal with state of modal
const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "You've been added!"
    }
  } if (action.type === 'CLOSE_MODAL') {
    return {...state, 
      isModalOpen: false
    }
  }
  throw new Error('no matching action type')
}

const defaultModalState = {
  isModalOpen: true, 
  modalContent: ''
}

const AppProvider = ({ children }) => {
// State -------------------------------------------->
  const [showModal, setShowModal] = useState(false)
  const [count, setCount] = useState(8)
  const [unsure, setUnsure] = useState(2)
  const [state, dispatch] = useReducer(reducer, defaultModalState)



// Functions ----------------------------------------------->

const closeModal = () => {
  dispatch({type: 'CLOSE_MODAL'})
}

  return <AppContext.Provider value={{ 
   state,
   showModal, 
   count,
   unsure,
    closeModal
   }}>
    {children}
  </AppContext.Provider>
} 

//custom hook
 export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }