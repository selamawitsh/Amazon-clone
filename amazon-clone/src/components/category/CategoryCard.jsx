import React from 'react'
import cardStyle from './category.module.css';
function CategoryCard({data}) {
  return (
    <div className={cardStyle['card']}>
        <a href="">
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.image} alt="" />
            <p>shop now</p>
        </a>
    </div>

  )
}

export default CategoryCard