import { Route, Routes } from "react-router-dom";

import React from 'react';

import {About, Earn, Support, Trade, Neofi} from '../Pages/index'

let pages = [
    { path: '/trade', component: Trade },
    { path: '/earn', component: Earn },
    { path: '/support', component: Support },
    { path: '/about', component: About },
]


function AllRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Neofi />} ></Route>
            <Route path="/trade" element={ <Trade />} > </Route>
            <Route path="/earn" element={<Earn /> } ></Route>
            <Route path="/support" element={ <Support />} > </Route>
            <Route path="/about" element={ <About />} > </Route>
        </Routes>
    );
}

export default AllRoutes;