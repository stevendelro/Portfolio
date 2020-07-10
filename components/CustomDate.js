import { format } from 'date-fns'

export default function CustomDate(props) {
  return (
    <time id='CustomDate' dateTime={props.dateString}>
      {format(new Date(props.dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
