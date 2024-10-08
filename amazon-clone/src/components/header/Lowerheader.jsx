import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import styles from '../header/header.module.css';
function Lowerheader() {
  return (
    <div className={styles['lower_header']}>
    <ul>
        <li>
            <CiMenuBurger />
            <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Buy Again</li>
        <li>Sell</li>
        <li>Customer Service</li>
        <li>Gift Cards</li>
        <li>Resistry</li>
    </ul>
    </div>
  )
}
export default Lowerheader