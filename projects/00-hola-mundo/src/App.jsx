import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'alandraker24',
    name: 'Alan Rammos',
    isFolowing: true
  },
  {
    userName: 'ramos_yobani',
    name: 'Yobani Ramos',
    isFolowing: true
  },
  {
    userName: 'raulgarciadevop',
    name: 'Raul Garcia',
    isFolowing: false
  },
  {
    userName: 'brandonblain',
    name: 'Brandon Martinez',
    isFolowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFolowing }) => (
          <TwitterFollowCard
            key={userName}
            userName = {userName}
            initialIsFollowing = {isFolowing}
          >
            {name}
          </TwitterFollowCard> 
        ))
      }
    </section>
  )
}


