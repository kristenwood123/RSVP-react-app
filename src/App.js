import './index.css'
import React from 'react'
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import GlobalStyles from './styles/GlobalStyles'

//Components
import Rsvp1 from './components/Rsvp1'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <div className="container">
       <Navbar/>       
      <AuthProvider>
       <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={Login}/>
          <Route path='/rsvp' component={Rsvp1}/>
       </Switch>
    </AuthProvider>
    </div>
     <Footer/>
    </BrowserRouter>
  )
}

export default App;
