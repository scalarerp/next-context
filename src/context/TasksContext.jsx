import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'

const TaskContext = createContext()

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const router = useRouter()

    const goto = {
        home() {
            router.push('/')
        },
        new() {
            router.push('/new')
        },
        carousel() {
            router.push('/carousel')
        },
        editTaskById(taskId) {
            router.push('/edit/' + taskId)
        },
    }

    const createTask = (title, description) => {
        setTasks([...tasks, { id: uuid(), title, description }])
    }

    const updateTask = (id, updatedTask) => {
        setTasks([
            ...tasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            ),
        ])
    }

    const deleteTask = (id) => {
        setTasks([...tasks.filter((task) => task.id !== id)])
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                goto,
                createTask,
                updateTask,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => {
    return useContext(TaskContext)
}
