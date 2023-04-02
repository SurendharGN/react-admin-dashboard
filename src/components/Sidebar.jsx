import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const sidebar = () => {
  return (
    <div className="flex flex-col h-screen border-r  border-r-gray-300">
        <div className=" flex flex-col align-middle justify-center h-14 border-b border-b-gray-300 mb-3">
            <span className="text-center font-raleway font-medium text-xl">SurendharGN</span>
        </div>
        <div>
            
            <ul className="flex flex-col gap-3">
                <p className="pl-2 font-medium text-gray-500 text-sm">MAIN</p>
                    <li className="sidebar-text mb-3">
                        <DashboardIcon style={{width:"22px",height:"25px"}}/>
                        <span className="pl-2">Dashboard</span>
                    </li>
                
                <p className="pl-2 font-medium text-gray-500 text-sm">LISTS</p>
                    <li className="sidebar-text">
                        <PeopleOutlineOutlinedIcon style={{width:"22px",height:"25px"}}/>
                        <span  className="pl-2" >Users</span>
                    </li>
                    <li className="sidebar-text">
                        <CreditCardOutlinedIcon style={{width:"22px",height:"25px"}}/>
                        <span  className="pl-2">Orders</span>
                    </li>
                    <li className="sidebar-text mb-3">
                        <LocalShippingOutlinedIcon style={{width:"22px",height:"25px"}} className="w-12 h-12"/>
                        <span className="pl-2 ">Delivery</span>
                    </li>

                <p className="pl-2 font-medium text-gray-500 text-sm">USEFUL</p>
                    <li className="sidebar-text">
                        <BarChartOutlinedIcon style={{width:"22px",height:"25px"}}/>
                        <span  className="pl-2">Stats</span>
                    </li>
                    <li className="sidebar-text mb-3">
                    <NotificationsNoneOutlinedIcon style={{width:"22px",height:"25px"}}/>
                    <span  className="pl-2">Notifications</span>
                </li>

            <p className="pl-2 font-medium text-gray-500 text-sm">SERVICE</p>
                <li className="sidebar-text">
                    <SettingsSystemDaydreamOutlinedIcon style={{width:"22px",height:"25px"}}/>
                    <span  className="pl-2">System Health</span>
                </li>
                <li className="sidebar-text">
                    <LoginOutlinedIcon style={{width:"22px",height:"25px"}}/>
                    <span  className="pl-2">Logs</span>
                </li>
                <li className="sidebar-text mb-3">
                    <SettingsOutlinedIcon style={{width:"22px",height:"25px"}}/>
                    <span  className="pl-2">Settings</span>
                </li>
                
            <p className="pl-2 text-gray-500 text-sm font-medium">USER</p>
                <li className="sidebar-text">
                    <AccountCircleOutlinedIcon style={{width:"22px",height:"25px"}}/>
                    <span  className="pl-2">Profile</span>
                </li>
                <li className="sidebar-text">
                    <LogoutOutlinedIcon style={{width:"22px",height:"25px"}}/>
                    <span  className="pl-2">Logout</span>
                </li>
                
            </ul>

        </div>
        <div className="flex align-middle justify-center mt-8 gap-5">
            <div className="w-8 h-8 bg-black rounded-full hover:scale-x-105 hover:scale-y-105"></div>
            <div className="w-8 h-8 bg-white border border-black rounded-full hover:scale-x-105 hover:scale-y-105"></div>
        </div>
    </div>
  )
}

export default sidebar