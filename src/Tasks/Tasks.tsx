import { Trash } from 'phosphor-react'
import { TasksProps } from '../ContenTodo/ContentTodo'
import completed from '../assets/completed.svg'
import styles from './Tasks.module.css'

interface Props {
  task: TasksProps
  onCompleted: (taskId: string) => void
  onDelete: (taskId: string) => void 
}

export function Tasks({ task, onDelete, onCompleted }: Props) {
  
  return(
    <li className={styles.list}>
      <div className={styles.listContent}>
        <button
          className={
            task.isComplete === true 
            ? styles.listCheckBoxTrue 
            : styles.listCheckBox
          }
          onClick={() => onCompleted(task.id)}
        >
          {task.isComplete &&
            <img src={completed}/> 
          }
        </button>
        <p 
          className={
            task.isComplete === true 
            ? styles.listTextTrue 
            : styles.listText}>
              {task.title}
        </p>
      </div>
      <div 
        className={styles.listTrash}
        onClick={() => onDelete(task.id)}
      >
        <Trash size={16} />
      </div>
    </li>
  )
}