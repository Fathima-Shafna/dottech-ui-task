import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">
          
        </div>
      </div>
    </div>
  )
}

export default ProductCard