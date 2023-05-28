import { Link } from 'gatsby'
import React, { useState } from 'react'
import {
  Box,
  Container,
  Flex,
  Image,
  MenuButton,
  Divider,
  Close
} from 'theme-ui'
import logo from '../../img/logo.svg'
import NavLinks from '../NavLinks'
import * as styles from './NavBar.module.scss'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsActive(true)
  }

  const handleCloseBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsActive(false)
  }

  return (
    <>
      <Container
        as="aside"
        className={`${styles.sideNav} ${
          isActive ? styles.sideNavShow : styles.sideNavNone
        }`}
        sx={{
          bg: 'primary'
        }}>
        <Flex
          css={{
            justifyContent: 'space-between'
          }}
          pt={4}
          mx={3}>
          <div>
            <Image src={logo} className="title" variant="avatar" />
          </div>
          <button className={styles.closeBtn} onClick={handleCloseBtnClick}>
            <Close pt={4} mr={3} mt={3} />
          </button>
        </Flex>
        <Divider />
        <Flex
          sx={{
            flexDirection: 'column'
          }}>
          <NavLinks />
        </Flex>
      </Container>
      <Container as="nav">
        <Flex
          css={{
            justifyContent: 'space-between'
          }}>
          <Link to={`/`}>
            <Box>
              <Image src={logo} variant="avatar" />
            </Box>
          </Link>

          {/* Mobile Nav Button */}
          <Box onClick={handleMenuClick}>
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
            <NavLinks />
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Navbar
