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
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const MyTaskContext: FC<Props> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [task, setTask] = useState<Task>({ id: '', title: '', completed: false, createdAt: new Date().toLocaleDateString() })
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target
        setTask(prevState => ({ ...prevState, id: '', [name]: type !== 'checkbox' ? value : checked }))
    }

    const handleAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!task?.title) {
          alert('Title must be filled !!!')
          return
        }
        setTasks(prevState => ([...prevState, task]))
        setTask({ id: new Date() ,title: '', completed: false, createdAt: new Date().toLocaleDateString() })
    }

    return (
        <TaskContext.Provider value={{ task, tasks, handleAdd, handleChange }}>
            {children}
        </TaskContext.Provider>
    )
}
