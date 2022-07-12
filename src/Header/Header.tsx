import styles from './Header.module.css'
import logoTodo from '../assets/logoTodo.svg'
 
export function Header() {
  return(
    
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <img src={logoTodo} alt="logo da empresa" />
        <strong className={styles.title}>
          to<span>do</span>
        </strong>
      </div>
    </header>
  )
}