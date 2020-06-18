import NextLink from 'next/link'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../Logo'

const useStyles = makeStyles(theme => ({
  listItem: {
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
  drawerLogo: {
    marginBottom: '-64px',
  },
}))

const logoColor = '#144d53'

function HomeMenu() {
  const classes = useStyles()
  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item className={classes.drawerLogo}>
          <NextLink href='/'>
            <ButtonBase component='a' disableRipple>
              <Logo height='30px' width='30px' color={logoColor} />
            </ButtonBase>
          </NextLink>
        </Grid>
      </Grid>
      <div className={classes.toolbar} />
      <List>
        <NextLink href='/work'>
          <ListItem
            className={classes.listItem}
            component='a'
            button
            key='Work'>
            <ListItemText primary='Work' />
          </ListItem>
        </NextLink>

        <NextLink href='/blog'>
          <ListItem
            className={classes.listItem}
            component='a'
            button
            key='Blog'>
            <ListItemText primary='Blog' />
          </ListItem>
        </NextLink>

        <NextLink href='/self'>
          <ListItem
            className={classes.listItem}
            component='a'
            button
            key='Self'>
            <ListItemText primary='Self' />
          </ListItem>
        </NextLink>

        <NextLink href='/mail'>
          <ListItem
            className={classes.listItem}
            component='a'
            button
            key='Mail'>
            <ListItemText primary='Mail' />
          </ListItem>
        </NextLink>
      </List>
    </>
  )
}

export default HomeMenu

// <ListItem className={classes.listItem} button key='Github'>
// <ListItemText primary='Github' />
// </ListItem>
// <ListItem className={classes.listItem} button key='NextLinkedIn'>
// <ListItemText primary='NextLinkedIn' />
// </ListItem>
// <ListItem className={classes.listItem} button key='Resume'>
// <ListItemText primary='Resume' />
// </ListItem>
