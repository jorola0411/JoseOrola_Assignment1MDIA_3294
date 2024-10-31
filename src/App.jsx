import React, { useState } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <List/>
    <Footer />
    </>
  )
}

export default App
