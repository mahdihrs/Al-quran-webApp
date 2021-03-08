import React from 'react'

//Import Assets
import Logo from '../Assets/allah.png'

export default function Navbar() {
  return (
    <div className="bg-green-500 px-8 py-4 flex flex-row">
      <img src={Logo} alt="Logo qur'an App" className="w-12"/>
      <h1 className="font-semibold text-3xl text-white ml-5 cursor-pointer">
        Al-Qur'an App
      </h1>
      <div className="ml-8">
        <div className="bg-white flex items-center rounded-full">
          <input className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Cari Ayat" />
          <div className="p-2">
            <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-400 focus:outline-none w-8 h-8 flex items-center justify-center">
            <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
