
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Landingpage from './pages/Landingpage';
import Watchhistory from './pages/Watchhistory';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div >
    

    <Header/>

    <Routes>
      
      <Route path =  {'/'} element = {<Landingpage/>} />
      <Route path =  {'/home'} element = {<Homepage/>} />
      <Route path =  {'/watch-history'} element = { <Watchhistory/>} />

      </Routes>

      <Footer/>
      

    
    

    </div>
  );
}

export default App;
