// ...existing code...
import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './FlashSale.css'

const FlashSale = ({ category = '', title = 'Flash Sale', limit = 4 }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const fetchProducts = async () => {
      try {
        setLoading(true)

        if (!category) {
          // homepage: combine men's + women's clothing and limit total
          const [menRes, womenRes] = await Promise.all([
            fetch("https://fakestoreapi.com/products/category/men's clothing"),
            fetch("https://fakestoreapi.com/products/category/women's clothing")
          ])
          const [menData, womenData] = await Promise.all([menRes.json(), womenRes.json()])
          const combined = [...(menData || []), ...(womenData || [])]
          const sorted = combined.sort((a, b) => b.id - a.id).slice(0, limit)
          if (mounted) setProducts(sorted)
          return
        }

        // category page: fetch that category and slice to limit
        const safeCategory = encodeURIComponent(category)
        const url = `https://fakestoreapi.com/products/category/${safeCategory}`
        const res = await fetch(url)
        const data = await res.json()
        const items = Array.isArray(data) ? data.slice(0, limit) : []
        const sorted = items.sort((a, b) => b.id - a.id)
        if (mounted) setProducts(sorted)
      } catch (error) {
        console.error('Error fetching products:', error)
        if (mounted) setProducts([])
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchProducts()
    return () => { mounted = false }
  }, [category, limit])

  if (loading) return <div className="flash-sale-loading">Loading products...</div>

  return (
    <section className="flash-sale">
      <h2 className="flash-sale-title">{title}</h2>
      <div className="flash-sale-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FlashSale
// ...existing code...