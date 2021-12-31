import { format, fromUnixTime } from 'date-fns'

const formatDate = (timestamp: Maybe<string>): string => {
  if (!timestamp) return 'N/A'
  return format(fromUnixTime(+timestamp / 1000), 'MMMM do y')
}

export default formatDate
