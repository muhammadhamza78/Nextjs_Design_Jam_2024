import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProduct"
import LatestProducts from "../components/LatestProducts"
import Trendingproducts from "../components/TrendingProduct"
import DiscountItem from "../components/DiscountItem"
import Banner from "../components/Banner"
import Cont from "../components/Cont"
import Shopex from "../components/Shopex"
import Banner2 from "../components/Banner2"
import Blogspost from "../components/BlogsPost"
import Footer from "../components/Footer"
import TopCategory from "../components/TopCategory"


const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <Shopex />
      <Banner2 />
      <Trendingproducts />
      <DiscountItem />
      <TopCategory />
      <Banner />
      <Cont />
      <Blogspost />
      <Footer />
    </div>
  )
}

export default page
