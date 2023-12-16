import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import './App.css'

function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />

        </div>
    )
}

export default RootLayout