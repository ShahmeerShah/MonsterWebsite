import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
import Topbar from 'components/topbar'
import {CurrentUserProvider} from 'contexts/CurrentUser'
import CurrentUserChecker from 'components/CurrentUserChecker'

// import './index.css';

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
