import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: { main: '#144d53' },
  secondary: { main: '#ff9100' },
}
const typography = {
  body2: {
    fontFamily: '"Roboto Slab", "Courier New", "serif"',
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: "0.00938em",
    lineHeight: 1.5,
  },
}
const themeName = 'greenOrange'

export default createMuiTheme({ palette, themeName, typography })
