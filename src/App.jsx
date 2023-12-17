import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes'
import NavBar from './components/NavBar'

function App() {


  return (
    <Router>
        <NavBar />
      <div className='app'>
        {/* <h1>React on Rails</h1>
        <p className='mb-8'>Find this application layout in src/App.js</p> */}
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
