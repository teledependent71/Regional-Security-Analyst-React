import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Security Analyst</title>
        <meta property="og:title" content="Regional Security Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
