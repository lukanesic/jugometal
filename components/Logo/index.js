import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import logo from './../../public/images/jugometal-logo.png'

const Logo = ({ cls }) => {
  const router = useRouter()

  return (
    <div className={`logo ${cls && cls}`} onClick={() => router.replace('/')}>
      <Image
        src={logo}
        alt={'Jugometal Logo'}
        layout={'fill'}
        objectFit={'contain'}
        objectPosition='center'
        style={{ zIndex: '-10' }}
      />
    </div>
  )
}

export default Logo
