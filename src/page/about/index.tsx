import React from 'react'
import { AboutUs, Leading, Mission, Strengths, Value } from './components'
import { Contact } from '../home/components'

export default function About() {
  return (
    <>
      <AboutUs />
      <Strengths />
      <Mission />
      <Value />
      <Leading />
      <Contact />
    </>
  )
}
