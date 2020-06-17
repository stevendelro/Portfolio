import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  listItem: {
    textAlign: 'center',
  },
}))

function HomeList() {
  const classes = useStyles()
  return (
    <>
      <List>
        <ListItem className={classes.listItem} button key='Projects'>
          <ListItemText primary='Projects' />
        </ListItem>
        <ListItem className={classes.listItem} button key='Contact'>
          <ListItemText primary='Contact' />
        </ListItem>
        <ListItem className={classes.listItem} button key='About'>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem className={classes.listItem} button key='Blog'>
          <ListItemText primary='Blog' />
        </ListItem>
      </List>
    </>
  )
}

export default HomeList

// <ListItem className={classes.listItem} button key='Github'>
// <ListItemText primary='Github' />
// </ListItem>
// <ListItem className={classes.listItem} button key='LinkedIn'>
// <ListItemText primary='LinkedIn' />
// </ListItem>
// <ListItem className={classes.listItem} button key='Resume'>
// <ListItemText primary='Resume' />
// </ListItem>
