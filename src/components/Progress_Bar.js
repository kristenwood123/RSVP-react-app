import React from 'react'

const Progress_Bar = ({bgcolor, height}) => {
   const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: '0 auto',
      }
      
      const Childdiv = {
        height: '100%',
        width: '60%',
        backgroundColor: bgcolor,
        borderRadius: 40,
      }
  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
  )
}

export default Progress_Bar
