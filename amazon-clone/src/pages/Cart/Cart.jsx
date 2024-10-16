import React from 'react'
import Layout from '../../components/layout/Layout'
import { useContext } from 'react'
import { DataContext } from '../../components/dataProvider/DataProvider'
import ProductCard from '../../components/product/ProductCard'
import CurrencyFormat from '../../components/currencyFormat/Currency'
import { Link } from 'react-router-dom'
import cartStyle from './cartStyle.module.css'
function Cart() {
  const [{basket,user},dispatch]=useContext(DataContext)
  const total = basket.reduce((amount, item) => {
    return item.price *item.amount+ amount
  }, 0)
  console.log(basket)
  return (
    <Layout>
      <section className={cartStyle['container']}>
        <div className={cartStyle['cartContainer']}>
          <h2>Hello!</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {
            basket?.length==0?(<p>Opps ! no item in your cart</p>):(
              basket?.map((item)=>{
                return <ProductCard 
                product={item} 
                flex={true}
                flexedDescription={true}
                BasketRender={false}/>
              })
            )
          }
        </div>


        {basket?.length !==0&&(
          <div className={cartStyle['subtotal']}>
            <div>
              <p>Subtotal({basket?.length}items)</p>
              <CurrencyFormat amount={total}/>
            </div>
            <span>
              <input type="checkbox" />
              <small>this order contans a gift</small>
            </span>
            <Link to='/Payment'>Continue to checkout</Link>
          </div>

        )}
        
      </section>
        
    </Layout>

    
  )
}

export default Cart