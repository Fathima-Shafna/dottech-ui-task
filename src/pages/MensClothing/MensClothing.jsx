import React from 'react'
import FlashSale from '../../components/FlashSale/FlashSale'
import './MensClothing.css'

const MensClothing = () => {
  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Men's Clothing</h1>
        <p>Discover the latest trends in men's fashion</p>
      </div>
      
      <FlashSale 
        category="men's clothing" 
        title="Men's Collection" 
        limit={20}
      />
    </div>
  )
}

export default MensClothing