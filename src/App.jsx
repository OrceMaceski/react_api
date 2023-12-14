import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes'
import NavBar from './components/NavBar'

function App() {


  return (
    <Router>
      <div className='app'>
        <NavBar />
        <h1>React on Rails</h1>
        <p>Find this application layout in src/App.js</p>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
