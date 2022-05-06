import React from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
// import Hero from 'parts/Hero'
import ProductDetails from 'parts/Details/ProductDetails'
import Suggestion from 'parts/Details/Suggestion'
// import BrowseRoom from 'parts/HomePage/BrowseRoom'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'


function HomePage() {
  return (
    <>
    <Header theme="black"/>
    <Breadcrumb List={[
        {url: "/", name: "Home"},
        {url: "/categories/91231", name: "Office Room"},
        {url: "/categories/91231/products/7888", name: "Details"},
    ]}/>
    <ProductDetails/>
    <Suggestion/>
    {/* <Hero/>
    <BrowseRoom/>
     */}
    <Clients/>
    <Sitemap/>
    <Footer/>
    </>
    )
}

export default HomePage