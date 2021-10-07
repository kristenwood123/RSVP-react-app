import React from 'react'
import { GiBeerStein } from 'react-icons/gi'
import Progressbar from './Progress_Bar'
import { useHistory } from 'react-router-dom'
import { useAuthGlobal } from '../contexts/AuthContext'


const Main = ({ redirect }) => {
  //  const { count, unsure } = useGlobalContext()
  const { currentUser } = useAuthGlobal()
  const history = useHistory()
  
  const handleRedirect = () => {

    if(!currentUser) {
      return history.push('/signup')
    } else {
      return history.push('/List')
    }
  }

  return (
    <section className='details'>
      <div className="text-container">
        <article className='details-card'>
          <GiBeerStein className='beer-icon'/>
            <h1 className='header__heading'>Beer Fest 2021</h1>
            <p style={{width: '75%', margin: '0 auto'}}>
              Hey! It's that time of year for Beer Fest and I want to go with all of my closest friends! Which is why you're receiving this invite. The details are all below and I can't wait to spend the day with my favorite people :)</p> 
              <div className="btn-container">
                <button 
                  className='list-btn btn1'
                  onClick={() => history.push('/List')}>See whose going</button>
                <button 
                  className='rsvp-btn btn1'
                  onClick={handleRedirect}>RSVP</button>
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
              <div>
                <li className='details-nums'>8</li>
                <li className='details-text'>total attending</li>
              </div>
                <hr className='details-hr'/>
                <div className="vl"></div>
              <div>
                <li className='details-nums'>4</li>
                <li className='details-text'>not attending</li>
              </div>
                <hr className='details-hr'/>  
                <div className="vl"></div>
              <div>
                <li className='details-nums'>1</li>
                <li className='details-text'>unsure</li>
              </div>
                <hr className='details-hr'/>  
                <div className="vl"></div>
              <div>
                <li className='details-nums'>56</li>
                <li className='details-text'>days left</li>
              </div>
              <hr className='details-hr'/>  
            </ul>
            <Progressbar bgcolor='#4eb6ab' height={15} now={60} />
           </article>
        </div>
    </section>
  )
}

export default Main
