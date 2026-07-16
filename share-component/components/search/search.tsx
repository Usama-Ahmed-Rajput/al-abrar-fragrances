'use client'
import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import style from './search.module.scss'
import { all_products } from "@/share-component/api/all_products.json"
import Link from 'next/link';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)

    if (term.trim() === '') {
      setResults([])
      setShowResults(false)
      return
    }

    const filtered = all_products.filter((product: any) =>
      product.name.toLowerCase().includes(term) ||
      product.description?.toLowerCase().includes(term)
    )
    setResults(filtered.slice(0, 8))
    setShowResults(true)
  }

  const handleClear = () => {
    setSearchTerm('')
    setResults([])
    setShowResults(false)
  }

  return (
    <>
      <div className={style.search_container}>
        <div className={style.search_input}>
          <input 
            type="text" 
            placeholder='Search fragrances...'
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => searchTerm && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {searchTerm && (
            <button className={style.clear_btn} onClick={handleClear}>×</button>
          )}
          <span className={style.icon}><CiSearch /></span>
        </div>

        {showResults && results.length > 0 && (
          <div className={style.search_results}>
            {results.map((product: any) => (
              <Link key={product.slug} href={`/product_detail/${product.slug}`} onClick={handleClear}>
                <div className={style.result_item}>
                  <img src={product.src} alt={product.name} />
                  <div className={style.result_content}>
                    <h4>{product.name}</h4>
                    <p className={style.result_price}>Rs. {product.real_price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {showResults && searchTerm && results.length === 0 && (
          <div className={style.no_results}>
            No products found for "{searchTerm}"
          </div>
        )}
      </div>
    </>
  )
}

export default Search
