import React from 'react'
import { Box, Container, Flex, Image, NavLink } from 'theme-ui'
import logo from '../../img/logo.svg'

const Navbar = () => {
  // For the hamburger
  // const [isActive, setIsActive] = useState(false)

  return (
    <Container p={2} as="nav">
      <Flex>
        <Box sx={{ flex: '1 1 auto' }}>
          <Image src={logo} variant="avatar" />
        </Box>
        <Flex>
          <NavLink href="/" p={4}>
            Home
          </NavLink>
          <NavLink href="/blog" p={4}>
            Blog
          </NavLink>
          <NavLink href="/about" p={4}>
            About
          </NavLink>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Navbar
