import Contact from './Components/Contactdetails'
import Footer from './Components/Footer'
import Work from './Components/Work'
import Services from './Components/Service'
import About from './Components/About'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import LenisScroll from './Components/LenisScroll'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}