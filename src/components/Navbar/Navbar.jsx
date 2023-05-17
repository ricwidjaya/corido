import React from 'react'
import { Box, Container, Flex, Image, MenuButton, NavLink } from 'theme-ui'
import logo from '../../img/logo.svg'

const Navbar = () => {
  // For the hamburger
  // const [isActive, setIsActive] = useState(false)

  return (
    <Container as="nav">
      <Flex
        css={{
          justifyContent: 'space-between'
        }}>
        <Box>
          <Image src={logo} variant="avatar" />
        </Box>

        {/* Mobile Nav Button */}
        <Box>
          <MenuButton
            aria-label="Toggle Menu"
            sx={{
              display: 'block',
              '@media (min-width: 768px)': {
                display: 'none'
              }
            }}
            py={4}
            mr={3}
          />
        </Box>

        {/* Desktop Nav */}
        <Flex
          sx={{
            display: 'none',
            '@media (min-width: 768px)': {
              display: 'block'
            }
          }}>
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
