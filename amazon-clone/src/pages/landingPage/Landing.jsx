import React from 'react'
import Layout from '../../components/layout/Layout'
import Slid from '../../components/crousel_slide/Slid'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'

function Landing() {
  return (
    <Layout>
        <Slid/>
        <Category/>
        <Product/>
    </Layout>
  )
}

export default Landing