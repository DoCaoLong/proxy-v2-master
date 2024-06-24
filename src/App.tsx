import './App.css'
import { Header } from './components/layout'
import Footer from './components/layout/footer'
import { Hero } from './components/page'
import Chose from './components/page/chose'
import Contact from './components/page/contact'
import Download from './components/page/download'
import Hear from './components/page/hear'
import Our from './components/page/our'
import Proxy from './components/page/proxy'
import Top from './components/page/top'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Top />
      <Our />
      <Chose />
      <Proxy />
      <Download />
      <Hear />
      <Contact />
      <Footer />
    </>
  )
}

export default App
