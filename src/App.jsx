import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import EditPage from './pages/EditPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <nav className='bg-gray-700'>
        <div className='container mx-auto p-2'>
          <Link to="/"><h2 className='text-white text-2xl font-bold'>REACT</h2></Link>
        </div>
      </nav>
        <div className='container mx-auto p-2 h-full'>
          <Routes>
            <Route index element={<HomePage />}></Route>
            <Route path="/create" element={<ProductPage/>}></Route>
            <Route path="/edit/:id" element={<EditPage/>}></Route>
          </Routes>
        </div>
       <ToastContainer />
    </div>
  )
}

export default App
