import React from 'react'
import { useRouter } from 'next/router'

const Logo = () => {
  const router = useRouter()

  return <div className='logo' onClick={() => router.replace('/')} />
}

export default Logo
