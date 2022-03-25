import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import SingleServices from './Components/singleService/SingleServices';
import Subscribe from './Components/Subscribe/Subscribe';
function App() {
  return (
    <div className="App">
        <Header></Header> 
        <Routes>
            <Route exact path='/' element={<Hero/>}></Route>
            <Route exact path='/home' element={<Hero/>}></Route>
            <Route exact path='/services' element={<Services/>}></Route>
            <Route exact path='/services/:id' element={<SingleServices/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='*' element={<NotFound/>}></Route>
        </Routes>
        <Subscribe></Subscribe>
        <Footer></Footer>
        
    </div>
  );
}

export default App;
