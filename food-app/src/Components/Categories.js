import React from 'react'
import {categories} from '../data/data.js'


function Categories() {
  return (
    <div className='max-w-[1640px] px-4 py-12'>
        
            <h1 className='text-orange-600 font-bold text-4xl text-center pb-8'>Top Rated Menu Items</h1>
        
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
            <div key={index} className='bg-gray-200 items-center rounded-xl flex justify-between'>

                <h1 className='font-bold md:text-md mx-auto'>{item.name}</h1>
                <img className='w-20 mx-auto' src={item.image} alt={item.name} />
            </div>
        ))}

      </div>
    </div>
  )
}

export default Categories
