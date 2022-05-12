import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { Container } from 'react-bootstrap'
//router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container >
           <Routes>
            <Route path="/" element = {<HomeScreen />} />
            <Route path="/cart" element = {<HomeScreen />} />
            <Route path="/login" element = {<HomeScreen />} />

            <Route path="/product/:id" element = {<ProductScreen />} />
           </Routes>
            
        </Container>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
