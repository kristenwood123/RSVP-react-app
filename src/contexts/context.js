import React, { useContext, useState } from 'react'
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
// State -------------------------------------------->
  const [attending, setAttending] = useState('')

  const [inputFields, setInputFields] = useState({
    firstName: '',
    lastName: '', 
    checkboxYes: false, 
    checkboxNo: false
  })


// Functions ----------------------------------------------->
  const handleChange = e => {
    const value = e.target.type === "text" ? e.target.value : e.target.checked;
    const name = e.target.name;

    setInputFields({
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    
  }


  return <AppContext.Provider value={{ 
    inputFields, 
    handleChange, 
    handleSubmit
   }}>
    {children}
  </AppContext.Provider>
} 

//custom hook
 export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }