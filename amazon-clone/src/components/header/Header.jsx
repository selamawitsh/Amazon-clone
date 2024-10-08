import React from 'react'
import logo from "../../assets/images/amazon-logo-cover.png"
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiCart} from "react-icons/bi";
import americanFlag from "../../assets/images/flag.jpg"
import Lowerheader from './Lowerheader';
import styles from '../header/header.module.css';

 function Header() {
  return (
    <>
    <div className={styles['header_container']}>
        {/* logo */}
        <div className={styles['logo_container']}>
            <a href="">
                <img src={logo} alt="" />
            </a>

            {/* delivery */}
                <div className={styles['delivery']}>
                    <span>
                        {/* icon */}
                        <CiLocationOn />
                    </span>
                    <div>
                    <p>Deliver to</p>
                    <span>Ethiopia</span>
                    </div>
                        
                </div>

            
            

        </div>
        {/* search */}
        <div className={styles['search-container']}>
            <select name="All" id="">
                <option value="All">All</option>
            </select>
            <input type="text" placeholder='Search Amazon'  />
            <span><FaSearch /></span>
            
        </div>
        {/* right-side */}
        <div className={styles['order_container']}>
            <a className={styles['right-side']}>
                {/* <img src="" alt="" />flag */}
                <img src={americanFlag} alt="" />
                <select>
                    <option value="">EN</option>
                </select>
            </a>

            <div className={styles['orders']}>
            <a href="#">
            
                <p>Hello,sign in</p>
                <span>Account and Lists</span>
            </a>
        
            <a href="#">
            
                <p>Return</p>
                <span>&Orders</span>
            </a>
            <a href="#" className={styles['cart']}>
                {/* carticon */}
                <BiCart size={35}/>
                <p>0</p>
                <span>Cart</span>

            </a>
            </div>
            
        
        </div>
    </div>
    <Lowerheader/>

    </>
  )
}
export default Header