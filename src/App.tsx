import './App.css'
import { Header } from './components/layout'
import Footer from './components/layout/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './page/home'
import About from './page/about'
import NotFound from './page/notFound'
import Download from './page/dowload'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/download' element={<Download />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
