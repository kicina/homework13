import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate()

  return (
    <div className='header'>
        <button className='btn' onClick={() => {navigate('/')}}>blogs</button>
        <button className='btn' onClick={() => {navigate('/create')}}>create</button>
    </div>
  )
}
