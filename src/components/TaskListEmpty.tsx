import styles from './TaskListEmpty.module.css'

import clipboard from '../assets/clipboard.svg'

export function TaskListEmpty() {
  return (
    <div className={styles.taskList}>
      <img
        src={clipboard}
        alt="Imagem para quando não houver nenhuma tarefa criada"
      />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
