import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/layout'
import Footer from './components/layout/footer'
import About from './page/about'
import Download from './page/dowload'
import HomePage from './page/home'
import NotFound from './page/notFound'

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
