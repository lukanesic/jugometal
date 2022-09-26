import React from 'react'
import { useRouter } from 'next/router'

const Logo = ({ cls }) => {
  const router = useRouter()

  return (
    <div className={`logo ${cls && cls}`} onClick={() => router.replace('/')} />
  )
}

export default Logo
