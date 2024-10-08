import React from 'react'
import { Rating } from '@mui/material';
import CurrencyFormat from '../currencyFormat/Currency';
import styles from '../product/product.module.css'

function ProductCard({product}) {
    const {image,id,title,rating,price}=product;
  return (
    <div className={styles['cardContainer']}>
        <a href="#">
            <img src={image} alt="" />
        </a>
        <div>
            <h3>{title}</h3>
            <div className={styles['rating']}>
                {/* rating */}
                <Rating value={rating.rate} precision={0.5}/>
                <small>{rating.count}</small>
            </div>
             {/* price */}
             <CurrencyFormat amount={price}/>

        </div>
        <button className={styles['button']}>add to cart</button>
        

    </div>
  )
}

export default ProductCard