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
import MyProvider from './components/MyProvider'

const App = () => (
  <MyProvider>
    <BrowserRouter>
    <div className="container">
       <Header/>
       <Switch>
          <Route exact path='/' component={Details}/>
          <Route path='/Rsvp' component={Rsvp}/>
          <Route path='/List' component={List}/>
       </Switch>
    </div>
     <Footer/>
    </BrowserRouter>
    </MyProvider>
  );

export default App;
