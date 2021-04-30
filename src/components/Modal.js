import React, {useState} from 'react'
import { GiPartyPopper } from 'react-icons/gi'

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
 
  return (
    <div>
      <p style={{paddingTop: '10px'}}>You've been added! <GiPartyPopper /></p>
    </div>
  )
}

export default Modal
