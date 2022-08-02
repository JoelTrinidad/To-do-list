import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import InputTask from "./components/InputTask";

function App() {

  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    localStorage.setItem("tasks", JSON.stringify([]));
  }, [initialTasks, tasks]);
  
  const createTask = (task) => {
    setTasks([...tasks, task])
  }

  return (
    <Container>
      <Header></Header>      
      <InputTask createTask={createTask}></InputTask>
    </Container>
  );
}

export default App;
