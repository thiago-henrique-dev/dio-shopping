import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home'
import Contatos from './Pages/Contatos'

const MainRoutes = () => {
    return (
        <Route>
            <Route path="/"
                    element={<HomePage/>}>
            </Route>
            <Route path="/"
                    element={<Contatos/>}>
            </Route>
        </Route>
    )
}