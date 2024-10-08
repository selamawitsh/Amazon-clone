import React from 'react'
import { categoryinfo } from './categoryFullInfo.js';
import CategoryCard from './CategoryCard'
import cardStyle from './category.module.css';

function Category() {
  return (
    <div className={cardStyle['categoryContainer']}>
        {categoryinfo.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </div>
  )
}

export default Category


