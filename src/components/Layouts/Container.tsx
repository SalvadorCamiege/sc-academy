import type { ReactNode } from 'react';
import styles from './Conteiner.module.css';

interface ContainerProps {
  children: ReactNode
  customclass?: string
}

function Container({ children, customclass }: ContainerProps) {
  return (
    <div className={`${styles.Container} ${customclass ? styles[customclass] : ''}`}>
      {children}
    </div>
  )
}

export default Container;