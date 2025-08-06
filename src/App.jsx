import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
       
      </Routes>
    </Router>

  )
}

export default App