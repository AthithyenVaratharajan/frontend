import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { VITE_BACKEND_URL } from '../App';




const ProductPage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleChange =(e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quantity || !price || !image){
      alert("Error: Please fill in all fields")
      
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_BACKEND_URL}/products`, {name: name, quantity: quantity, price: price, image: image})
      toast.success(`Save ${response.data.name} successfully`)
      setIsLoading(false);
      
      navigate("/")
      
    }catch(error){
      toast.error(error.message)
      setIsLoading(false);
    }
   
    

  }
  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6'>
      <h2 className='font-semibold text-2xl mb-4 block text-center'>
        Create a Product
      </h2>
      <form onSubmit={handleSubmit} action="">
        <div className='space-y-2'>
          <div>
            <label htmlFor="">Name</label>
            <input onChange={handleChange} type="text" value={name} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 'placeholder="Enter Name"/>
          </div>
          <div>
            <label htmlFor="">Quantity</label>
            <input onChange={(e)=>setQuantity(e.target.value)} type="number" value={quantity} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 'placeholder="Enter Quantity"/>
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input onChange={(e)=>setPrice(e.target.value)} type="number" value={price} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 'placeholder="Enter Price"/>
          </div>
          <div>
            <label htmlFor="">Enter Image Url</label>
            <input onChange={(e)=>setImage(e.target.value)} type="text" value={image} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 'placeholder="Enter Image Url"/>
          </div>
          
        </div>
          {!isLoading && (<button type='submit' className='block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer'>Save</button>)}
          
      </form>
    </div>
  )
}

export default ProductPage
