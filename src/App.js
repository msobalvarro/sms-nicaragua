import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Components
import Header from './Components/Header/Header'

// Import global styles
import './App.scss'
import Footer from './Components/Footer/Footer'

// Import Views
import Index from './Views/Index/Index'
import Firm from './Views/Firm/Firm'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />

        <Switch>
          <Route path="/">
            <Index />
          </Route>

          <Route path="/firm">
            <Firm />
          </Route>
        </Switch>

        <Footer />
      </React.Fragment>
    </Router>
  )
}

export default App
