import './index.css'
import React from 'react'
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

//Components
import List from './components/List'
import Rsvp from './components/Rsvp'
import Details from './components/Details'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
       <Navbar/>
       <Switch>
          <Route exact path='/' component={Details}/>
          <Route path='/Rsvp' component={Rsvp}/>
          <Route path='/List' component={List}/>
       </Switch>
    </div>
     <Footer/>
    </BrowserRouter>
  )
}


export default App;
