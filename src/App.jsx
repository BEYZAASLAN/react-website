import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar } from './sections/navbar';
import { Hero } from './sections/hero';
import { Features } from './sections/features';
import { Footer } from './sections/footer';
function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <Features/>
     <Footer/>
    </>
  )
}

export default App
