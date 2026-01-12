import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      day: "12 de janeiro de 2026 às 10:00",
      description: "Ler a documentação oficial e fazer exercícios práticos.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      day: "13 de janeiro de 2026 às 15:00",
      description: "Comprar mantimentos para a semana.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ir ao médico",
      day: "14 de janeiro de 2026 às 09:00",
      description: "Consulta anual de rotina.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
