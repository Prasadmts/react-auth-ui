import React from 'react';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import {Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/profile' element={<Profile />}/> 
                <Route path='/' element={<Login />}/> 
            </Routes>
        </div>
    );
};

export default App;