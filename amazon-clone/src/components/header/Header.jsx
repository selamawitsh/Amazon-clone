import React from 'react'
import logo from "../../assets/images/amazon-logo-cover.png"
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiCart} from "react-icons/bi";
import americanFlag from "../../assets/images/flag.jpg"
import Lowerheader from './Lowerheader';
import styles from '../header/header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../dataProvider/DataProvider';

 function Header() {
   const [{basket},dispatch] =useContext(DataContext)
   
    console.log(basket)
  return (
    <section className={styles['fixedHeader']}>
    <div className={styles['header_container']}>
        {/* logo */}
        <div className={styles['logo_container']}>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>

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
            <Link to="/Signup">
            
                <p>Hello,sign in</p>
                <span>Account and Lists</span>
            </Link>
        
            <Link to="/Orders">
            
                <p>Return</p>
                <span>&Orders</span>
            </Link>
            <Link to="/Cart" className={styles['cart']}>
                {/* carticon */}
                <BiCart size={35}/>
                <p>{basket.length}</p>
                <span>Cart</span>

            </Link>
            </div>
            
        
        </div>
    </div>
    <Lowerheader/>

    </section>
  )
}
export default Header