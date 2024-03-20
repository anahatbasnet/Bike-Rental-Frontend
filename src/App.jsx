import { useState } from 'react'

import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Carousel from './components/Carousel'

function App() {


  return (
    <>
<Navbar/>
<div className="screensize max-w-7xl mx-28 px-4">
  <Carousel/>

<Cards/>
</div>
    </>
  )
}

export default App
