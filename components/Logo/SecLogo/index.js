import React from 'react'
import { useRouter } from 'next/router'

const SecLogo = () => {
  const router = useRouter()

  return <div className='sec-logo' onClick={() => router.replace('/')} />
}

export default SecLogo
