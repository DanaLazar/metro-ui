import type { ReactNode } from 'react'
import styles from './button.module.sass'

type ButtonSize = 'small' | 'medium' | 'large'

type ButtonProps = Readonly<{
  primary?: boolean
  size?: ButtonSize
  label: string
  onClick?: () => void
  children?: ReactNode
}> 

export const Button = (props: ButtonProps) => {
  const className = [styles.button, props.primary ? styles.primary : '', props.size ? styles[props.size] : '']
    .filter(Boolean)
    .join(' ')

  return (
    <button className={className} onClick={props.onClick}>
      {props.label ?? props.children}
    </button>
  )
}