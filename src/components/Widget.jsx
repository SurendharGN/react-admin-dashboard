import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widget = ({type}) => {
    let data;
    const amount=100;
    const diff=20;

    switch(type){
        case "user":
            data={title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:(<PersonOutlineOutlinedIcon style={{backgroundColor:"BBE1FA",color:"0F4C75",width:"30px",height:"30px",padding:"3px",borderRadius:"2px"}}/>)

    };
    break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon  style={{backgroundColor:"FFFBAC",color:"FFCA03",width:"30px",height:"30px",padding:"4px",borderRadius:"2px"}}
            
           
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon style={{backgroundColor:"B5F1CC",color:"54B435",width:"30px",height:"30px",padding:"4px",borderRadius:"2px"}}
            
            
            
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon  style={{backgroundColor:"E3DFFD",color:"D9ACF5",width:"30px",height:"30px",padding:"4px",borderRadius:"2px"}} 
            
            
           
          />
        ),
      };
      break;
    default:
      break;

    }

   
    
  return (
    <div className="flex border shadow-sm h-36 w-72 justify-between rounded-sm transition ease-in-out duration-300 hover:scale-x-110 hover:scale-y-110 " >
        <div className="flex flex-col justify-between m-3  ">
            <h1 className="font-medium text-gray-400 text-sm hover:text-black ">{data.title}</h1>
            <p className="text-4xl font-extralight tracking-wider">{data.isMoney && "$"}{amount}</p>
            <Link to="/" className="border-b border-b-black pb-0 mb-1 ">{data.link}</Link>
        </div>
        <div className="flex flex-col justify-between m-3 text-right ">
            <div className="flex">
                <KeyboardArrowUpOutlinedIcon/>
                <p>{diff}</p>
            </div>
            <div>
                {data.icon}
            </div>
        </div>
    </div>
  )
}

export default Widget