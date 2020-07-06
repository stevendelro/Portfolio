import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  listItem: {
    textAlign: 'center',
  },
})

export default function TemporaryDrawer({ toggleShowDrawer, openDrawer }) {
  const classes = useStyles()
  return (
    <>
      <Drawer
        anchor='top'
        variant='temporary'
        open={openDrawer}
        onClose={toggleShowDrawer()}>
        <div
          className={classes.list}
          role='presentation'
          onClick={toggleShowDrawer()}
          onKeyDown={toggleShowDrawer()}>
          <List>
            {['HOME', 'WORK', 'BLOG', 'MAIL'].map((text, index) => (
              <ListItem key={index} className={classes.listItem} button>
                <Link href={`/${text === 'HOME' ? '' : text.toLowerCase()}`}>
                  <ListItemText primary={text} component='a' />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  )
}
