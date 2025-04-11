import { ChangeEvent, createContext, FC, FormEvent, ReactNode, useState } from "react";
import { Task } from "../types/task";


interface Props {
  children: ReactNode
}

interface TaskContextType {
  task: Task;
  tasks: Task[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (e: FormEvent<HTMLFormElement>) => void;
  handleToggle: (id: string) => void
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const MyTaskContext: FC<Props> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [task, setTask] = useState<Task>({ id: '', title: '', completed: false, createdAt: '' })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target
        setTask(prevState => ({ ...prevState, id: '', [name]: type !== 'checkbox' ? value : checked }))
    }

    const handleToggle = (id: string) => {
      setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task ))
    }

    const handleAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!task?.title) {
          alert('Title must be filled !!!')
          return
        }
        const myItem = { ...task, id: new Date().getTime().toString(), createdAt: new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) }
        setTasks(prevState => ([...prevState, myItem]))
        setTask({ id: '', title: '', completed: false, createdAt: '' })
    }

    return (
        <TaskContext.Provider value={{ task, tasks, handleAdd, handleChange, handleToggle }}>
            {children}
        </TaskContext.Provider>
    )
}
