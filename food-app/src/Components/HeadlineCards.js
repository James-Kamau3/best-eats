import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='relative'>
        {/* Overlay */}
        <div className='absolute bg-black/40 w-full h-full rounded-xl text-white'>
        <p className='font-bold px-2 pt-4 text-2xl'>Sun's Out, BOGO'S Out</p>
        <p className='px-2'>Through B/26</p>
        <button className='border-white text-black bg-white hover:bg-black hover:text-white bottom-4 absolute mx-2'>Order Now</button>
        </div>
        <img 
        className='max-h-[160px] sm:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' 
        alt='/'/>
      </div>

      <div className='relative'>
        {/* Overlay */}
        <div className='absolute bg-black/40 w-full h-full rounded-xl text-white'>
        <p className='font-bold px-2 pt-4 text-2xl'>New Restaurants</p>
        <p className='px-2'>Added Daily</p>
        <button className='border-white text-black bg-white hover:bg-black hover:text-white bottom-4 absolute mx-2'>Order Now</button>
        </div>
        <img 
        className='max-h-[160px] sm:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' 
        alt='/'/>
      </div>

      <div className='relative'>
        {/* Overlay */}
        <div className='absolute bg-black/40 w-full h-full rounded-xl text-white'>
        <p className='font-bold px-2 pt-4 text-2xl'>We Deliver Desserts Too</p>
        <p className='px-2'>Tasty Treats</p>
        <button className='border-white text-black bg-white hover:bg-black hover:text-white bottom-4 absolute mx-2'>Order Now</button>
        </div>
        <img 
        className='max-h-[160px] sm:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' 
        alt='/'/>
      </div>
    </div>
  )
}

export default HeadlineCards
