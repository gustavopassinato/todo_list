import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'

import styles from './App.module.css'
import { TaskList } from './components/TaskList'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TaskInput />

        <TaskList />
      </main>
    </>
  )
}
