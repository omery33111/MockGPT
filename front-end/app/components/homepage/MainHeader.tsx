import React from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const MainHeader = () => {
  return (
    <>
      <div className="absolute top-4 left-5 text-2xl">
        <HiOutlinePencilAlt />
      </div>

      <header className="w-full p-3 flex justify-end absolute top-0 right-1">
        <div className="flex space-x-2">
          <button className="bg-black text-white px-3 py-0.5 rounded-[30px] text-sm">Log in</button>
          <button className="bg-white text-black px-3 py-0.5 rounded-[30px] border border-gray-300 text-sm">Sign up</button>
        </div>
      </header>
    </>
  )
}

export default MainHeader