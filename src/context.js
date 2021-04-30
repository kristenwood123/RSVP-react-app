import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // State -------------------------------------------->
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    number: '', 
    mask: '',
    vacc: ''
  });

  const [people, setPeople] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [count, setCount] = useState(2)


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

    const {firstName, lastName, number, vacc, mask} = inputValues;

    if(firstName && lastName && number) {
      const person = {id: new Date().getTime().toString(), firstName, lastName, number, vacc, mask}
      setPeople((prevState) => {
        return [...prevState, person]
      })

      setShowModal(true)

      setInputValues({
        firstName: '',
        lastName: '',
        number: '',
        vacc: '',
        mask: ''
      })
    } 
  }

  return <AppContext.Provider value={{ 
    people, 
    inputValues, 
    handleSubmit, 
    handleOnChange, 
    showModal, 
    count}}>
    {children}
  </AppContext.Provider>
} 

//custom hook
 export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }