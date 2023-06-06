import styles from './Header.module.css'

import todoLogo from '../assets/logo.svg'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={todoLogo} alt="Logo aplicação Todo" />
      </header>
    </>
  )
}
