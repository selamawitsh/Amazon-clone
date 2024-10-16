import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from '../product/product.module.css'
import {Loader} from '../Loader';
function Product() {
    const [products, setproducts] = useState([])
    const [Loading, setLoading] = useState()

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
            <ProductCard BaketRender={true}product={singleProduct} key={singleProduct.id}/>
        ))

    }
    
    </div>
  )
}

export default Product