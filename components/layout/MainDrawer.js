import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import HomeMenu from './HomeMenu'

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
        anchor='left'
        variant='temporary'
        open={openDrawer}
        onClose={toggleShowDrawer()}>
        <div
          className={classes.list}
          role='presentation'
          onClick={toggleShowDrawer()}
          onKeyDown={toggleShowDrawer()}>
          <HomeMenu />
        </div>
      </Drawer>
    </>
  )
}
