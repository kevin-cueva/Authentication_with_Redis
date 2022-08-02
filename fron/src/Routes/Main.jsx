import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // Trae estos componentes Para las rutas
import LandingPage from '../components/LandingPage';
import Login from '../components/Login';
import NotPage from '../components/NotPage';
import Register from '../components/Register';
const Main=()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}/>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='*' element={<NotPage/>} ></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}
export default Main;