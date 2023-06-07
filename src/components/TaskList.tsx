import styles from './TaskList.module.css'

import clipboard from '../assets/clipboard.svg'

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

      <div className={styles.taskList}>
        <img
          src={clipboard}
          alt="Imagem para quando não houver nenhuma tarefa criada"
        />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  )
}
