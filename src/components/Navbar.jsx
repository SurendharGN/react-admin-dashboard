import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

const Navbar = () => {
  return (
    <div className="border-b border-b-gray-300 h-14 flex justify-between items-center align-middle">
        <div className="flex mx-5 border border-gray-300">
            <input placeholder='Search...' className=" text-sm outline-none ml-5"></input>
            <div className="mr-3">
                <SearchOutlinedIcon/>
            </div>
        </div>

        <div className="flex gap-7">
            <div className="flex gap-1">
                <LanguageOutlinedIcon/>
                <p>English</p>
            </div>
            <div>
                <DarkModeOutlinedIcon/>
            </div>
            <div>
                <FullscreenExitOutlinedIcon/>
            </div>
            <div>
                <NotificationsNoneOutlinedIcon/>
            </div>
            <div>
                <ChatBubbleOutlineOutlinedIcon/>
            </div>
            <div>
                <ListOutlinedIcon/>
            </div>
            <div></div>
            
        </div>
    </div>
  )
}

export default Navbar