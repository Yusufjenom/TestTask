import { useState } from 'react'
import { createBrowserRouter,
        createRoutesFromElements,
          Route,
          RouterProvider,
          } from 'react-router-dom';
import RootLayout from './RootLayout';
import SubmitForm from './Pages/SubmitForm';
import EditForm from './Pages/EditForm';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
      const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<SubmitForm/>}/>
            <Route path='/update/:id' element={<EditForm/>}/>
        </Route>
      ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
