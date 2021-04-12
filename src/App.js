import './index.css'
import React from 'react'
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

//Components
import Header from './components/Header'
import List from './components/List'
import Rsvp from './components/Rsvp'
import Details from './components/Details'
import Footer from './components/Footer'

const App = () => (
  
    <BrowserRouter>
    <div className="container">
       <Header/>
       <Switch>
          <Route path='/' component={Details}/>
          <Route path='/Rsvp' component={Rsvp}/>
          <Route path='/List' component={List}/>
       </Switch>
    </div>
     <Footer/>
    </BrowserRouter>
  );

export default App;
