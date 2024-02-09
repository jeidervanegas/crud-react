import { useState } from 'react'
import { Todo } from './Todo'

export const TodoList = () => {
  const [title, setTitle] = useState('')
  const [desp, setDesp] = useState('')
  const [tareas, setTareas] = useState([])
  const [isCheck, setIsCheck] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTarea = {
      id: Date.now(),
      title,
      desp
    }
    setTareas([...tareas, newTarea])
    setTitle('')
    setDesp('')
    // console.log(tareas);
  }

  const onUpdate = (id, value, value2) => {
    const temp = [...tareas]
    const item = temp.find((item) => item.id === id)
    item.title = value
    item.desp = value2
    setTareas(temp)
  }

  const onDelete = (id) => {
    const preguntar = confirm('¿Desea eliminar esta tarea?')
    if (preguntar) {
      const temp = tareas.filter((item) => item.id !== id)
      setTareas(temp)
    }
  }

  function handleCheckboxChange(id, status) {
    const temp = [...tareas];
    const item = temp.find((item) => item.id === id);
    item.completed = status;

    console.log("Holis");
    setTareas([...temp]);
    setIsCheck(!isCheck)
  }

  return (
    <div className=" w-[90%] md:w-[60%] m-auto shadow-xl">
      <form
        className="bg-indigo-400  flex gap-4  px-4 py-6 "
        onSubmit={handleSubmit}
      >
        <div className=''>
          <input
          required
            className=" mb-3 rounded-xl w-[75%] md:w-[70%] lg:w-[80%] py-3 px-10"
            placeholder="Tarea"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
          required
            className=" rounded-xl w-[75%] md:w-[70%] lg:w-[80%] py-3 px-10"
            placeholder="Descripción"
            type="text"
            value={desp}
            onChange={(e) => setDesp(e.target.value)}
          />
        </div>
        <button
          className="h-12 w-[25%] md:w-[30%] lg:w-[20%]  border-2 border-white  rounded-lg font-bold text-white text-sm md:text-md"
          type="submit"
        >
          Crear
        </button>
      </form>
      <div className=" h-96 bg-white overflow-y-scroll">
        <div className="w-11/12 m-auto  bg-white">
          {tareas.map((item) => (
            <Todo
              key={item.id}
              item={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onComplete={handleCheckboxChange}
              isCheck={isCheck}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
