import React from 'react'
import Hero from './searchComponents/hero/Hero'
import Most from './searchComponents/most/Most'


export default function Search() {
  return (
    <div className='search'>
    <Hero height={"40rem"} BannersImg={true}/>
    <Most/>
    </div>
  )
}
