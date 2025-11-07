import React from 'react'
import FlashSale from '../../components/FlashSale/FlashSale'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Modern Walk</h1>
        <p>Discover the latest trends in fashion</p>
      </div>
      
      <FlashSale 
        title="Flash Sale" 
        limit={4}
      />
      
      <div className="categories-section">
        <div className="category-links">
          <a href="/mens-clothing" className="category-link men">
            <h3>Men's Clothing</h3>
            <p>Shop Now</p>
          </a>
          <a href="/womens-clothing" className="category-link women">
            <h3>Women's Clothing</h3>
            <p>Shop Now</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home