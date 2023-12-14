import { useState } from 'react'
import { createBrowserRouter,
        createRoutesFromElements,
          Route,
          RouterProvider,
            Navigate
          } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Pages/Home';


function App() {
      const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
      ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
