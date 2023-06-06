import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskInput.module.css'

export function TaskInput() {
  return (
    <form className={styles.taskInput}>
      <input
        placeholder="Adicione uma nova tarefa"
        className={styles.taskInputText}
        type="text"
      />

      <button className={styles.taskInputSubmit} type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}
