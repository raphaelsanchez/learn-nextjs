import styles from './Alert.module.css'
import { clsx } from 'clsx'

function AlertIcon({ icon }) {
  console.log('AlertIcon : ', icon)
  switch (icon) {
    case 'success':
      return <i data-feather="check-circle"></i>
    case 'error':
      return <i data-feather="x-octagon"></i>
    case 'info':
      return <i data-feather="info"></i>
    case 'warning':
      return <i data-feather="alert-triangle"></i>
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
