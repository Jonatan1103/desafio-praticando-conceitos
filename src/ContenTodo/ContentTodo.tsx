import styles from './ContentTodo.module.css'
import plus from '../assets/plus.svg'

import { v4 as uuidv4 } from 'uuid' 

import { AreaTodo } from '../AreaTodo/AreaTodo'
import { ChangeEvent, useState } from 'react'

export interface TasksProps {
  id: string
  title: string
  isComplete: boolean
}

export function ContentTodo() {
  const [tasks, setTask] = useState<TasksProps[]>([])

  const [inputTask, setInputTask] = useState('')

  function handleNewTask(event: ChangeEvent<HTMLInputElement>)  {
    setInputTask(event.target.value)
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => taskId !== task.id)
    setTask(newTasks)
  }

  function taskCompleteById(taskId: string) {
    const newTasks = tasks.map(task => {
      if( task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task
    })
    setTask(newTasks)
  }

  function handleAddNewTask() {
    setTask([
      ...tasks,
      {
        id: uuidv4(),
        title: inputTask,
        isComplete: false
      }
    ])

    setInputTask('')
  }

  const isNewTaskEmpty = inputTask.length === 0

  return(
    
      <main className={styles.main}>
        <div className={styles.inputArea}>
          <input
            className={styles.textInput}
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTask}
            value={inputTask}
            required
          />
          <button
            type='submit' disabled={isNewTaskEmpty}
            className={styles.button}
            onClick={handleAddNewTask}
          >
            Criar
            <img src={plus} />
          </button>
        </div>

        <AreaTodo 
          tasks={tasks}
          onCompleted={taskCompleteById}
          onDelete={deleteTaskById} 
        />
      </main>
  )
}