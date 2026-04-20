import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Specialities from '../components/Specialities'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Specialities></Specialities>
      <About></About>
    </div>
  )
}
