import React from 'react'
import { useGlobalContext } from '../context'
import { GiBeerStein } from 'react-icons/gi'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Details = () => {
   const { count } = useGlobalContext()
  return (
    <section className='details'>
      <div className="text-container">
        <article className='details-card'>
          <GiBeerStein className='beer-icon'/>
            <h1 className='header__heading'>Beer Fest 2021</h1>
            <p style={{width: '75%', margin: '0 auto'}}>
              Hey! It's that time of year for Beer Fest and I want to go with all of my closest friends! Which is why you're receiving this invite. The details are all below and I can't wait to spend the day with my favorite people :)</p> 
              <div className="btn-container">
                <button className='list-btn btn1'>See whose going</button>
                <button className='rsvp-btn btn1'>RSVP</button>
              </div>
        </article>
        <article className='details-card'>
          <h2 className='details__header'>Where:</h2>
          <p style={{marginBottom: '20px'}}>
            120 Madonna Rd, <br></br>San luis Obispo<br></br>CA, 92380</p>
            <h2 className='details__header'>When:</h2>
            <p>12:00-5:00pm<br></br>Saturday October 1st, 2021</p>
        </article>
         
           <article className='details-card stats'>
            <ul id='list-stats'>
              <li className='details-nums'>{count}</li>

              <li className='details-text'>total attending</li>
              <hr className='details-hr'/>

              <li className='details-nums'>56</li>
              <li className='details-text'>days left</li>
              <hr className='details-hr'/>
              <div id='progress-bar'>
                <ProgressBar now={60} variant='info' />
              </div>
            </ul>
           </article>
        </div>
    </section>
  )
}

export default Details
