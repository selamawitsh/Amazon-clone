import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endpoint'
import ProductCard from '../../components/product/ProductCard'
import Layout from '../../components/layout/Layout'
import resultstyle from '../Results/resultstyle.module.css';
import { Loader } from '../../components/Loader'
function Result() {
  const {categoryName}=useParams()
  const [result, setresult] = useState([])
  const [isLoading, setisLoading] = useState(false)
  
  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)

    .then((res)=>{
      console.log(res.data)
      setresult(res.data)
     

    }).catch((err)=>{
      console.log(err)
    })
    .finally(() => {
      setisLoading(false); 
    });
  }, [])
  

  return (
    <Layout>
      
      <div className={resultstyle['resultContainer']}>
      <h1>Results</h1>
      <p>category</p>
      {isLoading? <Loader/>:<div>
        {result?.map((product)=>(
          <ProductCard 
          product={product} 
          key= {product.id}
          BaketRender={true}/>
        ))}

      </div>} 
      {/* <div>
        {result?.map((product)=>(
          <ProductCard 
          product={product} 
          key= {product.id}/>
        ))}

      </div> */}

    </div>

    </Layout>
    
  )
}

export default Result