import React from 'react'
import { Rating } from '@mui/material';
import CurrencyFormat from '../currencyFormat/Currency';
import styles from '../product/product.module.css'
import {Link} from 'react-router-dom'
import { DataContext } from '../dataProvider/DataProvider';
import { Type } from '../../utility/action.type';
import { useContext} from "react";

function ProductCard({product,flex,flexedDescription,BaketRender}) {
    const {image,id,title,rating,price,description}=product;
    const [state,dispatch]=useContext(DataContext)
    console.log(state)
    const addToCart=()=>{
      dispatch({
        type:Type.ADD_TO_BASKET,
        item:{image,id,title,rating,price,description}
      })
    }

  return (

    <div className={`${styles.cardContainer} ${flex ? styles.flexedProduct : ''}`}>
     
        <Link to={`products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {flexedDescription ?<div style={{maxWidth:'800px'}}>{description}</div>: ''}
            <div className={styles['rating']}>
                {/* rating */}
                <Rating value={rating.rate} precision={0.5}/>
                <small>{rating.count}</small>
            </div>
             {/* price */}
             <CurrencyFormat amount={price}/>
             {
              BaketRender?(<button className={styles['button']} onClick={addToCart}>add to cart
              </button>):null
              
             }
             

        </div>
        
        

    </div>
  )
}

export default ProductCard