import { Task } from './Task'
import styles from './TaskList.module.css'
// import { TaskListEmpty } from './TaskListEmpty'

export function TaskList() {
  return (
    <section>
      <header className={styles.taskListHeader}>
        <div className={styles.taskListCreated}>
          Tarefas criadas
          <span>0</span>
        </div>

        <div className={styles.taskListDone}>
          Tarefas concluídas
          <span>0</span>
        </div>
      </header>

      <div className={styles.taskListContent}>
        {/* <TaskListEmpty /> */}
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  )
}
