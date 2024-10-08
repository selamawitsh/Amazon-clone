import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from '../product/product.module.css'
function Product() {
    const [products, setproducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setproducts(res.data)

        }).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className={styles['products']}>
    {
        products.map((singleProduct)=>(
            <ProductCard product={singleProduct} key={singleProduct.id}/>
        ))

    }
    
    </div>
  )
}

export default Product