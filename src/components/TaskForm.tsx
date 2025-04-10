import { useTask } from "../hooks/useTask"

const TaskForm = () => {
  const { handleChange, handleAdd, task } = useTask()
  return (
    <form onSubmit={handleAdd}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={task.title} onChange={handleChange} />
        <button>Add</button>
    </form>
  )
}

export default TaskForm
