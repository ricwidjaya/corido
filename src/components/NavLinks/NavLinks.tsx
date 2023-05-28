import React from 'react'
import { NavLink } from 'theme-ui'

const NavLinks = () => {
  return (
    <>
      <NavLink href="/" p={4}>
        Home
      </NavLink>
      <NavLink href="/blog" p={4}>
        Blog
      </NavLink>
      <NavLink href="/about" p={4}>
        About
      </NavLink>
    </>
  )
}

export default NavLinks
