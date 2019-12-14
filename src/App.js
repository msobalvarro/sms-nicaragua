import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Import Views
import Index from './Views/Index/Index'

// Components
import Header from './Components/Header/Header'

// Import global styles
import './App.scss'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />

        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>

        <Footer />
      </React.Fragment>
    </Router>
  )
}

export default App
