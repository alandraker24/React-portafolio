import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

  
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName='alandraker24'>
        Alan Ramos
      </TwitterFollowCard>  
      <TwitterFollowCard isFollowing userName='ramos_yobani'> 
        Yobani Ramos
      </TwitterFollowCard >
      <TwitterFollowCard isFollowing userName='raulgarciadevop'>
        Raul Garcia
      </TwitterFollowCard> 
      <TwitterFollowCard isFollowing={false} userName='brandonblain'>
        Brando Martinez
      </TwitterFollowCard> 
      
    </section>
  )
}


