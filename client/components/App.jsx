import React from 'react'

import Header from './Header'
import Meteo from './Meteo'
import Mars from './Mars'
import Footer from './Footer'

const App = () => (
  <div className='app-container'>
    <Header />
    <Meteo />
    <Mars />
    <Footer />
  </div>
)

export default App