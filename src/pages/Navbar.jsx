import React from 'react'
import { Link } from 'react-router-dom'
import man from '../assets/man.svg'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Link to={"/"}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Users Crud</span>
        </div>
      </Link>
      
      <div className="w-full block flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          <Link to={"/"} className=" mt-4 inline-block mt-0 text-teal-200 hover:text-white mr-4">
            users
          </Link>
          <Link to={"/add"} className=" mt-4 inline-block mt-0 text-teal-200 hover:text-white mr-4">
            add
          </Link>
        </div>
        
      </div>
    </nav>
  )
}
