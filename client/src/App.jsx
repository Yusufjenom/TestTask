import { useState } from 'react'
import { createBrowserRouter,
        createRoutesFromElements,
          Route,
          RouterProvider,
            Navigate
          } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Pages/Error';
import SubmitForm from './Pages/SubmitForm';
import EditForm from './Pages/EditForm';

const available = JSON.parse(localStorage.getItem("editSafeHouse"));
console.log(available)
function App() {
      const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<SubmitForm/>}/>
            <Route path='/update/:id' element={<EditForm/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
      ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
