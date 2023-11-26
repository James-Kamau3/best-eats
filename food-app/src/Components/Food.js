import React, { useState } from 'react'
import {data} from '../data/data.js'

function Food() {
    const [food, setFood] = useState(data)

    const filterType = (category) => {
        setFood(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

    const filterPrice = (price) => {
        setFood(
            data.filter((item) => {
                return item.price === price
            })
        )
    }


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-4xl font-bold text-orange-600 text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
        <div className='flex flex-col md:flex-row lg:flex-row justify-between py-10'>
        {/* Filter type */}
        <div>
            <p className='font-bold text-gray-700 p-3'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setFood(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>All</button>
                <button onClick={() => filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>Burgers</button>
                <button onClick={() => filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>Pizzas</button>
                <button onClick={() => filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>Salads</button>
                <button onClick={() => filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>Chicken</button>
            </div>
        </div>

        {/* filter price */}
        <div>
            <p className='font-bold text-gray-700 p-3 mt-4'>Filter Price</p>
            <div className='flex justify-between flex-wrap max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$20')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>$20</button>
                <button onClick={() => filterPrice('$30')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>$30</button>
                <button onClick={() => filterPrice('$40')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>$40</button>
                <button onClick={() => filterPrice('$50')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white md:m-1'>$50</button>
            </div>
        </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-4'>
        {food.map((item, index)=>(
            <div key={index} className='border shadow-xl hover:scale-105 duration-300 rounded-xl'>
                <img 
                className='w-full h-[180px] md:h-[250px] lg:h-[300px] object-cover rounded-xl'
                src={item.image} alt={item.name}/>
                <div className='md:flex md:justify-between md:px-3 md:py-4'>
                    <p><span className='p-1'>{item.name}</span></p>
                    <p><span className='p-2'>{item.price}</span></p>
                </div>
            </div>
        ))}
        </div>
      
    </div>
  )
}

export default Food
