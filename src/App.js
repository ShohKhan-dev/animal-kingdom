 import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Album from './Components/album';
import Header from './Components/Header/header';
import Footer from "./Components/Footer/footer";
import AddAnimal from "./Components/Forms/getinput";
import SingleContent from "./Components/SingleContent/singleContent";
import UpdateAnimal from "./Components/Forms/update";
import Search from "./Components/Forms/search";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>

      <Header/>

      <Routes>
        
        <Route exact path="/" element={<Album/>}/>
        <Route exact path="/add" element={<AddAnimal/>}/>
        <Route path="/animal/:id" element={<SingleContent/>}/>
        <Route path="/animal/update/:id" element={<UpdateAnimal/>}/>
        <Route path="/search" element={<Search/>}/>

      </Routes>
  
    </BrowserRouter>

    <Footer/>

    </>
    
  );
}

export default App;
