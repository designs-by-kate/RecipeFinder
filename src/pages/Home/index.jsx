import React from 'react'
import RecipeSearch from '../../components/RecipeSearch'
import Header from '../../components/Header'
import './style.css'

const Home = () => {
  return (
    <div className="customHome">
        <Header />
        <RecipeSearch />
    </div>
  )
}

export default Home