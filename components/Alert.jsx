import styles from './Alert.module.css'
import { clsx } from 'clsx'
import { AlertTriangle, CheckCircle, Info, XOctagon } from 'react-feather'

function AlertIcon({ icon }) {
  console.log('AlertIcon : ', icon)
  switch (icon) {
    case 'success':
      return <CheckCircle />
    case 'error':
      return <XOctagon />
    case 'info':
      return <Info />
    case 'warning':
      return <AlertTriangle />
    default:
      return null
  }
}

export default function Alert({ children, type }) {
  console.log('Alert : ', type)
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.info]: type === 'info',
        [styles.warning]: type === 'warning',
        [styles.container]: true,
      })}
    >
      <AlertIcon icon={type} />
      {children}
    </div>
  )
}
