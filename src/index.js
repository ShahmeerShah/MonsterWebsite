import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Topbar from 'components/topbar'

// import './index.css';

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
