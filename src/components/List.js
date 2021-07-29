import React from 'react'
import { useGlobalContext } from '../context'
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { GiHealthCapsule } from 'react-icons/gi';

const List = () => {
  const { people } = useGlobalContext()

  return (
    <section className ='list'>
      <h1 className='list__header'>Who's Going</h1>
      <p>These people are coming, are you?</p>
      <p>A <RiSurgicalMaskLine style={{fontSize: '20px'}}/> means they are vaccinated. A <GiHealthCapsule style={{fontSize: '20px'}}/> means they will be wearing a mask!</p>
      <article className='attending'>
        <ul className='list__ul'>
          {people.map((person) => {
            const {firstName, lastName, number, vacc, mask, id} = person;
            console.log(mask);
            return (
        
              <li key={id} className='person'>
                <div className='person__text'>
                <h4>{firstName} {lastName}</h4>
                <p>Phone: {number}</p>
                <div className="icon" style={{display:'flex'}}>
                  <p>{mask && <RiSurgicalMaskLine />}</p>
                  <p>{vacc && <GiHealthCapsule />}</p>
                </div>
                </div>
              </li>
            )
          })}
            <li className='person'>
                <div className='person__text'>
                <h4>Annie Carlson</h4>
                <p>Phone: 854-123-2432</p>
                <div className="icon" style={{display:'flex'}}>
                  <p><RiSurgicalMaskLine /></p>
                  <p></p>
                </div>
                </div>
              </li>
               <li className='person'>
                <div className='person__text'>
                <h4>Frank Willis</h4>
                <p>Phone: 555-123-1295</p>
                <div className="icon" style={{display:'flex'}}>
                  <p><GiHealthCapsule /></p>
                  <p></p>
                </div>
                </div>
              </li>
          </ul>
      </article>
    </section>
  )
}

export default List
