import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/01/20/07/51/ai-generated-8520530_640.png" alt="" />
            <div className='ml-3'>
                <p>Full Name</p>
                <p  className='opacity-70'>username</p>
            </div>
        </div>

    </div>
  )
}

export default SearchUserCard