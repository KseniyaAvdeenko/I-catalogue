import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Authentication/Auth";
import {rootReducer} from "./store/store";
import {publicRoutes} from "./routes/routes";



function App() {

  return (
    <BrowserRouter>
        <Routes>
            {publicRoutes.map(route=>(
                <Route key={route.id} path={route.path} element={route.element()}/>
            ))}
            <Route path='sign-up' element={<Navigate to={'auth'} replace/>}/>
            <Route path='sign-in' element={<Navigate to={'auth'} replace/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
