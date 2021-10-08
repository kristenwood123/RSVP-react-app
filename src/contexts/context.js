import React, { useContext, useState } from 'react'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
// State -------------------------------------------->
  const attendees = [
    {
      firstName: 'Kristen',
      lastName: 'Morley',
      checkboxYes: false,
      checkboxNo: true,
      id: 0
    }
  ]

  const [attending, setAttending] = useState(attendees)
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
    attending,
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