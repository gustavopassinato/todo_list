import { Task } from './Task'
import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskList.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { TaskListEmpty } from './TaskListEmpty'

export interface TaskInterface {
  id: number
  content: string
  status: boolean
}

interface TaskListInterface {
  tasks: TaskInterface[]
  totalDoneTasks: number
}

const initialTaskList: TaskListInterface = {
  tasks: [],
  totalDoneTasks: 0,
}

export function TaskList() {
  const [taskList, setTaskList] = useState(initialTaskList)

  const [taskTextInput, setTaskTextInput] = useState('')

  const [totalCreatedTasks, setTotalCreatedTask] = useState(
    taskList.tasks.length,
  )

  const [totalDoneTasks, setTotalDoneTasks] = useState(
    taskList.totalDoneTasks.toString(),
  )

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask: TaskInterface = {
      id: taskList.tasks.length + 1,
      content: taskTextInput,
      status: false,
    }
    const newTaskList: TaskListInterface = {
      tasks: [newTask, ...taskList.tasks],
      totalDoneTasks: taskList.totalDoneTasks,
    }

    setTaskList(newTaskList)
    setTaskTextInput('')
    setTotalCreatedTask(newTaskList.tasks.length)
    changeTotalDoneTasks(newTaskList.totalDoneTasks, newTaskList.tasks.length)
  }

  function handleTaskTextInput(event: ChangeEvent<HTMLInputElement>) {
    const newTaskContent = event.target.value
    setTaskTextInput(newTaskContent)
    event.target.setCustomValidity('')
  }

  function changeTaskStatus(taskToChange: TaskInterface) {
    const newTasks = taskList.tasks.map((task: TaskInterface) => {
      if (task.id === taskToChange.id) {
        task.status = taskToChange.status
      }
      return task
    })
    let newTotalOfDoneTasks: number = taskList.totalDoneTasks
    if (taskToChange.status) {
      newTotalOfDoneTasks = taskList.totalDoneTasks + 1
    } else if (taskList.totalDoneTasks >= 1) {
      newTotalOfDoneTasks = taskList.totalDoneTasks - 1
    }
    setTaskList({
      tasks: newTasks,
      totalDoneTasks: newTotalOfDoneTasks,
    })

    changeTotalDoneTasks(newTotalOfDoneTasks, taskList.tasks.length)
  }

  function changeTotalDoneTasks(totalTasksDone: number, totalTasks: number) {
    setTotalDoneTasks(`${totalTasksDone} de ${totalTasks}`)
  }

  function deleteTask(taskToDelete: TaskInterface) {
    let newTotalDoneTasks = taskList.totalDoneTasks
    const newTaskListWithountDeletedOne = taskList.tasks.filter((task) => {
      if (task.id !== taskToDelete.id) {
        return true
      }
      return false
    })
    if (taskList.totalDoneTasks >= 1 && taskToDelete.status === true) {
      newTotalDoneTasks = taskList.totalDoneTasks - 1
    }

    setTaskList({
      tasks: newTaskListWithountDeletedOne,
      totalDoneTasks: newTotalDoneTasks,
    })

    setTotalCreatedTask(newTaskListWithountDeletedOne.length)

    changeTotalDoneTasks(
      newTotalDoneTasks,
      newTaskListWithountDeletedOne.length,
    )
  }

  function handleInvalidInput(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  return (
    <section>
      <form onSubmit={handleNewTask} className={styles.taskInput}>
        <input
          required
          onInvalid={handleInvalidInput}
          value={taskTextInput}
          onChange={handleTaskTextInput}
          placeholder="Adicione uma nova tarefa"
          className={styles.taskInputText}
          type="text"
        />

        <button className={styles.taskInputSubmit} type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>

      <header className={styles.taskListHeader}>
        <div className={styles.taskListCreated}>
          Tarefas criadas
          <span>{totalCreatedTasks}</span>
        </div>

        <div className={styles.taskListDone}>
          Tarefas concluídas
          <span>{totalDoneTasks}</span>
        </div>
      </header>

      <div className={styles.taskListContent}>
        {taskList.tasks.length === 0 ? (
          <TaskListEmpty />
        ) : (
          taskList.tasks.map((task: TaskInterface) => {
            return (
              <Task
                key={task.id}
                task={task}
                changeTaskStatus={changeTaskStatus}
                deleteTask={deleteTask}
              />
            )
          })
        )}
      </div>
    </section>
  )
}
