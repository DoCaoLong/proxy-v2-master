import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './style.module.css'

interface IProps {
  text?: string
  width?: string | number
  color?: Color
  variant?: Variant
  disabled?: boolean
  loading?: boolean
  children?: ReactNode
}

type Variant = 'contained' | 'outlined' | 'text'
type Color = 'primary' | 'secondary'

export function Button(props: IProps) {
  const { text, width, color = 'primary', variant = 'contained', disabled = false, loading = false, children } = props

  return (
    <button
      className={classNames(styles.button, {
        [styles.contained]: variant === 'contained',
        [styles.outlined]: variant === 'outlined',
        [styles.text]: variant === 'text',
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary'
      })}
      style={width ? { width } : { width: 'max-content' }}
      disabled={loading === true || disabled === true}
    >
      {loading ? 'Loading...' : children || text}
    </button>
  )
}
