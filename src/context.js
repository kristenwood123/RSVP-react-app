import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    number: '', 
    mask: true,
    vacc: true
  });

  const [people, setPeople] = useState([])
  // const [showModal, setShowModal] = useState(false)
  // const [isModalOpen, setIsModalOpen] = useState(false)

  // const openModal = () => {
  //   setShowModal(true)
  // }

  //   const closeModal = () => {
  //   setShowModal(false)
  // }

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
    const {firstName, lastName, number, vacc, mask} = inputValues;

    if(firstName && lastName && number) {
      const person = {id: new Date().getTime().toString(), firstName, lastName, number, vacc, mask}
      setPeople((prevState) => {
        return [...prevState, person]
      })
      setInputValues({
        firstName: '',
        lastName: '',
        number: '',
        vacc: false,
        mask: false
      })
    } 
  }

  return <AppContext.Provider value={{ people, inputValues, handleSubmit, handleOnChange}}>
    {children}
  </AppContext.Provider>
} 

//custom hook
 export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }