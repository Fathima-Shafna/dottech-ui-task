import React from 'react'
import FlashSale from '../../components/FlashSale/FlashSale'
import './WomensClothing.css'

const WomensClothing = () => {
  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Women's Clothing</h1>
        <p>Discover the latest trends in women's fashion</p>
      </div>
      
      <FlashSale 
        category="women's clothing" 
        title="Women's Collection" 
        limit={20}
      />
    </div>
  )
}

export default WomensClothing