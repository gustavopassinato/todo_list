import { Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { RadioButton } from './RadioButton'

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <RadioButton />
      {/* <button className={styles.taskCheck}></button> */}
      <p className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.{' '}
      </p>
      <button className={styles.taskDelete}>
        <Trash size={20} />
      </button>
    </div>
  )
}
