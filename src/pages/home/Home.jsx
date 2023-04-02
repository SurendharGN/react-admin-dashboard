import React from 'react'
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
import Widget from "../../components/Widget"
import Featured from "../../components/Featured"
import Chart from "../../components/Chart"

const Home = () => {
  return (
    <div className="flex">
        <div className="flex-1">
            <Sidebar/>
        </div>
        <div className="sm:flex-[3] lg:flex-[6] ">
            <Navbar/>
            <div className="flex m-8 justify-between">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>

            <div className="flex ">
                <div><Featured/></div>
                <div><Chart/></div>
                
                
            </div>
            
        </div>
    </div>
  )
}

export default Home