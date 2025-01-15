import React from 'react'

function AddTask () {
  return (
    <div className='p-4'>
      <p className='text-gray-600/70'>Add to list</p>
      <div className='flex gap-1'>
        <input type="text" className='w-full p-2 rounded-md border border-gray-200/30' />
        <button className='bg-indigo-500/80 py-2 px-4 rounded-md'>
          <span className='text-white text-2xl font-bold'>&#43;</span>
        </button>
      </div>
    </div>
  )
}

export default AddTask