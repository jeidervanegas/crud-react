import { TodoList } from "./components/TodoList"



function App() {


  return (
    <div className="bg-gray-50 min-h-screen">
     <h1 className="text-4xl text-center py-10 text-indigo-600 font-semibold">Crud Lista de Tareas</h1>
     <TodoList/>
    </div>
  )
}

export default App
