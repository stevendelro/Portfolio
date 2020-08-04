import { format } from 'date-fns'

export default function CustomDate({ dateString }) {
  return (
    <time id='CustomDate' dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
