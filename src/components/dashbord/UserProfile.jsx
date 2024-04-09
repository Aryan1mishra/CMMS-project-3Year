import React from "react";

export default function UserProfile() {
  return (
    <div>
      <h2 className="m-2 py-5 text-2xl font-bold">
        Hostel Related Information
      </h2>
      <div className="space-y-12">
      <div className="flex flex-row space-x-3 px-3">
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="Wadern name" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="wadern mail" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="Security guard" />
        </div>

      </div>
      <div className="flex flex-row space-x-3 px-3">
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="caretaker name" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="phone number" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="email" />
        </div>

      </div>
      <div className="flex flex-row space-x-3 px-3">
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="night caretaker name" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="phone number" />
        </div>
        <div className="flex w-1/3 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="email" />
        </div>

      </div>

      </div>
      <h2 className="m-2 py-5 text-2xl font-bold">
        Emergency contact
      </h2>
      <div className="flex flex-row space-x-8 ">
        <div className="flex w-1/5 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="admin office" />
        </div>
        <div className="flex w-1/5 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="phone number" />
        </div>
        <div className="flex w-1/5 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="Ambulance" />
        </div>
        <div className="flex w-1/5 rounded-full px-2 text-l border-gray-200 border-2 m-2 space-x-4">
          <input type="text" placeholder="Health centre" />
        </div>

      </div>
      
      
    </div>
  );
}
