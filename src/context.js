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
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    number: '', 
  });

  const [people, setPeople] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [count, setCount] = useState(8)
  const [unsure, setUnsure] = useState(2)
  const [state, dispatch] = useReducer(reducer, defaultModalState)



// Functions ----------------------------------------------->
const handleOnChange = e => {
  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  const name = e.target.name;
    
setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));  
};


const handleSubmit = e => {
     e.preventDefault();
    setCount(count + 1)
    const {firstName, lastName, number, email } = inputValues;
    if(firstName && lastName && number) {
      const person = {id: new Date().getTime().toString(), firstName, lastName, email, number }
      setPeople((prevState) => {
        return [...prevState, person]
      })

      setShowModal(true)

      setInputValues({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
      })

      dispatch({type: 'ADD_PERSON'})
    } 
  }

const closeModal = () => {
  dispatch({type: 'CLOSE_MODAL'})
}

  return <AppContext.Provider value={{ 
   people,
   state,
   showModal, 
   count,
   unsure,
   inputValues,
    handleSubmit, 
    handleOnChange, 
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