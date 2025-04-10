import { useTask } from "../hooks/useTask"

const TaskList = () => {
  const context = useTask()
  const { tasks, task, handleChange } = context
  return (
    <>
      <h2>List of items</h2>
      <div>
        {tasks.length ?
            tasks.map(({ title, createdAt, id }) => (
                <div style={{ border: '1px solid gray', textAlign: 'center' }} key={id ? '' : 'ds'}>
                    <p>{title}</p>
                    <label htmlFor="complete">Is it done: </label>
                    <input type="checkbox" name="completed" id="complete" onChange={handleChange} checked={task.completed} />
                    <p>Date: {createdAt}</p>
                </div>
            )) : <p>No items yet</p>
        }
      </div>
    </>
  )
}

export default TaskList