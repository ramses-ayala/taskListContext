
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { MyTaskContext } from "./context/MyTaskContext";

function App() {
  return (
    <>
      <h1>hello</h1>
      <MyTaskContext>
        <TaskForm />
        <hr />
        <TaskList />
      </MyTaskContext>
    </>
  )
}

export default App
