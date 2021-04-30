import React from 'react'

const Details = () => {
  return (
    <section className='details'>
      <h1>Details</h1>
        <div className="text-container">
          <h2>What:</h2>
          <p>Hey! It's that time of year for Beer Fest and I want to go with all of my closest friends! Which is why you're receiving this invite. The details are all below and I can't wait to spend theday with my favorite people :)</p> 
          <br></br>
          <p style={{marginBottom: '20px'}}><b>Note: </b>Please check if you've been vaccinated! If not, please wear a mask!</p>
          <hr className='hr'/>
          <h2 className='details__header'>Where:</h2>
          <p style={{marginBottom: '20px'}}>120 Madonna Rd, <br></br>San luis Obispo<br></br>CA, 92380</p>
          <hr className='hr'/>
          <h2 className='details__header'>When:</h2>
          <p>12:00-5:00pm<br></br>Saturday July 1st, 2021</p>
</div>

    </section>
  )
}

export default Details
