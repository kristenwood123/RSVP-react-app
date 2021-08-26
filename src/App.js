import './index.css'
import React from 'react'
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

//Components
import List from './components/List'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/login'

const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
       <Navbar/>       
      <AuthProvider>
       <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/list' component={List}/>
          <Rote path='/login' component={Login}/>
       </Switch>
    </AuthProvider>
    </div>
     <Footer/>
    </BrowserRouter>
  )
}

export default App;
