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
import Rsvp from './components/Rsvp'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import List from './components/List'

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
          <Route path='/rsvp' component={Rsvp}/>
          <Route path='/List' component={List}/>
       </Switch>
    </AuthProvider>
    </div>
     <Footer/>
    </BrowserRouter>
  )
}

export default App;
