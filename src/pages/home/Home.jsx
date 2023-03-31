import React from 'react'
import Sidebar from "../../components/Sidebar"

const Home = () => {
  return (
    <div className="flex">
        <div className="bg-sky-100">
            <Sidebar/>
        </div>
        <div className="">Home container</div>
    </div>
  )
}

export default Home