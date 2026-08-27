import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'

function App({ children }) {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <div key={pathname} className="page-transition">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
