import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    number: ''
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
    //  const target = e.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
    
setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));  
  };

  const handleSubmit = e => {
     e.preventDefault();
    const {firstName, lastName, number, plusOne, driver} = inputValues;

    if(firstName && lastName && number) {
      const person = {id: new Date().getTime().toString(), firstName, lastName, number, plusOne, driver}
      setPeople((prevState) => {
        return [...prevState, person]
      })
      setInputValues({
        firstName: '',
        lastName: '',
        number: ''
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