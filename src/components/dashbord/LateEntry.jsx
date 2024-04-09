import React from "react";

export default function LateEntry() {
  return (
    <div>
      <h2 className="m-2 py-5 text-2xl font-bold ml-3 p-2">Late Entry Permission</h2>
      <div className="flex flex-row items-center justify-center  space-x-8 px-3">
        <div className="flex w-1/3 rounded-full px-2 text-l m-2 space-x-4">
          <input type="text" placeholder="Date" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 m-4 space-x-4">
          <input type="text" placeholder="Hostel" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l  m-2 space-x-4">
          <input type="text" placeholder="Reason" />
        </div>
      </div>
      <div className="flex items-centre justify-center">
        <button className="w-1/4 mb-4 text-[18px] mt-6 rounded-full bg-red-500 hover:bg-red-600 text-white py-2 transition-colors duration-300 ">
          Sumit
        </button>
      </div>
    </div>
  );
}
