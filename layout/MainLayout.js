import React, { useState } from 'react'

import Large from '../components/Nav/Large'
import Search from '../components/Menus/Search'
import SideCart from '../components/Menus/SideCart'
import SideMenu from '../components/Menus/SideMenu'
import TopCart from '../components/Menus/TopCart'
import Small from '../components/Nav/Small'
import Footer from '../components/Footer'
import DMenu from '../components/Menus/DMenu'

const MainLayout = ({ children }) => {
  const [openSideC, setOpenSideC] = useState(false)
  const [openTopC, setOpenTopC] = useState(false)
  const [openSideM, setOpenSideM] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openDmenu, setOpenDmenu] = useState(false)

  return (
    <div className='app-wrapper'>
      <Small
        openSideM={openSideM}
        setOpenSideM={setOpenSideM}
        openTopC={openTopC}
        setOpenTopC={setOpenTopC}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />

      <Large
        open={openSideC}
        setOpen={setOpenSideC}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        openDMenu={openDmenu}
        setOpenDmenu={setOpenDmenu}
      />

      <SideCart open={openSideC} setOpen={setOpenSideC} />
      <Search open={openSearch} setOpen={setOpenSearch} />
      <DMenu open={openDmenu} setOpen={setOpenDmenu} />

      {/* MOBILE MENU */}
      <SideMenu open={openSideM} setOpen={setOpenSideM} />
      {/* MOBILE CART */}
      <TopCart open={openTopC} setOpen={setOpenTopC} />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
