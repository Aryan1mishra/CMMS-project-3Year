import React from 'react'

export default function HostelStay() {
  return (
    <div>
         <h2 className="m-2 py-5 text-2xl font-bold p-2">Hostel Stay Permission</h2>
         <div className="flex flex-row space-x-3 px-3">
        <div className="flex w-1/3 rounded-full px-2 text-l m-2 space-x-4">
          <input type="text" placeholder="Leave date" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l  m-2 space-x-4">
          <input type="text" placeholder="Leave time" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l  m-2 space-x-4">
          <input type="text" placeholder="Return time" />
        </div>
      </div>
      <div className="flex items-centre justify-center">
      <button className='w-1/4 mb-4 text-[18px] ml-6 mt-6 rounded-full bg-red-500 hover:bg-red-600 text-white py-2 transition-colors duration-300 '>Sumit</button>

      </div>
      
    </div>
  )
}
