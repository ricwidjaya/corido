import carbonplan from '@carbonplan/theme'

const theme = {
  ...carbonplan,
  colors: {
    text: '#1b1e23',
    background: 'fff'
  },
  config: {
    initialColorModeName: 'light'
  },
  images: {
    avatar: {
      width: 68,
      height: 68,
      borderRadius: 99999
    }
  }
}

export default theme
