import { Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { TaskInterface } from './TaskList'
import { useState } from 'react'

interface TaskPropsInterface {
  task: TaskInterface
  changeTaskStatus: (task: TaskInterface) => void
}

export function Task({ task, changeTaskStatus }: TaskPropsInterface) {
  const [taskStatus, setTaskStatus] = useState(task.status)

  function handleTaskStatusChange() {
    const updatedTask: TaskInterface = {
      content: task.content,
      id: task.id,
      status: !task.status,
    }
    setTaskStatus(updatedTask.status)
    changeTaskStatus(updatedTask)
  }

  return (
    <div className={styles.taskContainer}>
      <button
        onClick={handleTaskStatusChange}
        className={taskStatus ? styles.radioChecked : styles.radio}
      ></button>

      <div className={styles.taskTextWrapper}>
        <p className={taskStatus ? styles.taskTextDone : styles.taskText}>
          {task.content}
        </p>
      </div>
      <button className={styles.taskDelete}>
        <Trash size={20} />
      </button>
    </div>
  )
}
