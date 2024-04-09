import React from 'react'
import AllPermisiion from './AllPermisiion'

export default function Permission() {
  return (
    <div>
      <div className='flex flex-row space-x-3 mt-1 pt-1 h-16'>
        <span className='bg-red-500 text-white cursor-pointer border-2 rounded-full flex text-xl font-semibold justify-center items-center w-1/3'> Request Permissions</span>
        <span className='bg-red-500 text-white cursor-pointer border-2 rounded-full flex text-xl font-semibold justify-center items-center w-1/3'> Active Permissions</span>
        <span className='bg-red-500 text-white cursor-pointer border-2 rounded-full flex text-xl font-semibold justify-center items-center w-1/3'> Expired Permissions</span>
      </div>
      <AllPermisiion/>
    
    </div>
  )
}
