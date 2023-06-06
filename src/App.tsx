import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TaskInput />
      </main>
    </>
  )
}
