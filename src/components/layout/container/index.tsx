import React, { ReactNode } from 'react'
import styles from './style.module.css'

interface ContainerProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid'
  children?: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ maxWidth = 'fluid', children }) => {
  const containerClass = maxWidth ? styles[maxWidth] : styles.fluid

  return <div className={`${styles.container} ${containerClass}`}>{children}</div>
}
