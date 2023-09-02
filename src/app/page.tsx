'use client'

import {useEffect, useState} from 'react'
import Counter from '@/components/Counter'

export default function Home() {
  const [show, setShow] = useState(false)
  const [someText, setSomeText] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setSomeText('Some text!!')
    }, 5000)
  }, [])

  return (
    <div>
      <p>Keksik</p>
      {show && <p>Pidor</p>}
      {someText}
      <Counter />
      <button onClick={() => setShow(prev => !prev)}>Click me</button>
    </div>
  )
}
