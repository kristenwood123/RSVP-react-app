import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const { state, closeModal } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })

  return (
    <div>
      <p style={{paddingTop: '10px'}}>{state.modalContent}</p>
    </div>
  )
}

export default Modal
