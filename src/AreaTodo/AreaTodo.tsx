import { ClipboardText } from 'phosphor-react'
import styles from './AreaTodo.module.css'
import { TasksProps } from '../ContenTodo/ContentTodo'
import { Tasks } from '../Tasks/Tasks'

interface Props {
  tasks: TasksProps[]
  onCompleted: (taskId: string) => void
  onDelete: (taskId: string) => void
}
export function AreaTodo({tasks, onDelete, onCompleted}: Props) {
  const taskCompleted = tasks.filter(task => task.isComplete === true)
  
  return(
    <div className={styles.areaTodo}>
      <section className={styles.areaTodoContent}>
        <div className={styles.areaTodoContainer}>
          <div className={styles.areaTodoCreate}>
            <h2 className={styles.textCreate}>Tarefas criadas</h2>
            <span className={styles.counter}>{tasks.length}</span>
          </div>
        </div>

        <div className={styles.areaTodoContainer}>
          <div className={styles.areaTodoDone}>
            <h2 className={styles.textDone}>Concluídas</h2>
            <span className={styles.counter}>
            {taskCompleted.length} de {tasks.length}
            </span>
          </div>
        </div>
      </section>

      <section className={styles.areaTodoList}>
        <ul className={styles.areaList}>
          {tasks.map(( task ) => (
            <Tasks 
              key={task.id} 
              task={task} 
              onCompleted={onCompleted}
              onDelete={onDelete}
            />
          ))}

        </ul>
      </section>

      {tasks.length <= 0 && (
        <section className={styles.areaEmpty}>
          <div className={styles.areaEmptyContent}>
            <ClipboardText size={56} />
            <div className={styles.areaEmptyText}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </section>
      )}
    </div>

  )
}