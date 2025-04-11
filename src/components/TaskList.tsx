import { useTask } from "../hooks/useTask"

const TaskList = () => {
  const context = useTask()
  const { tasks, handleToggle } = context
  return (
    <>
      <h2>List of items</h2>
      <div>
        {tasks.length ?
            tasks.map(({ title, createdAt, id, completed }) => (
                <div style={{ border: '1px solid gray', textAlign: 'center' }} >
                    <p>{title}</p>
                    <label htmlFor="complete">Is it done: </label>
                    <input type="checkbox" name="completed" id="complete" onChange={() => handleToggle(id)} checked={completed} />
                    <p>Date: {createdAt.toString()}</p>
                </div>
            )) : <p>No items yet</p>
        }
      </div>
    </>
  )
}

export default TaskList