import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";


import Home from '../views/Home';
import Task from "../views/Task";
import QrCode from "../views/QrCode";


export default function Rotas() {
    return(

        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/task' element={<Task />} />
                <Route path='/task:id' element={<Task />} />
                <Route path='/qrcode' element={<QrCode />} />
            </Routes>
        
        </BrowserRouter>


    )


}