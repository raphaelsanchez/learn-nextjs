import styles from './Alert.module.css'
import { clsx } from 'clsx'
import { AlertTriangle, CheckCircle, Info, XOctagon } from 'react-feather'

export default function Alert({ children, type }) {
  const icon = {
    success: <CheckCircle />,
    error: <XOctagon />,
    info: <Info />,
    warning: <AlertTriangle />,
  }

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
      {icon[type]}
      {children}
    </div>
  )
}
