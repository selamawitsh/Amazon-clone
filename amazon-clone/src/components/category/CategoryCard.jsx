import React from 'react'
import cardStyle from './category.module.css';
import {Link} from 'react-router-dom'
function CategoryCard({data}) {
  return (
    <div className={cardStyle['card']}>
        <Link to ={`/category/${data.name}`}>
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.image} alt="" />
            <p>shop now</p>
        </Link>
    </div>

  )
}

export default CategoryCard