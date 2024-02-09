import { useState } from "react"


export const Todo = ({ item, onUpdate, onDelete, onComplete, isCheck }) => {

    const [isEdit, setIsEdit] = useState(false)
    const [newValue, setNewValue] = useState(item.title)
    const [newDesp, setNewDesp] = useState(item.desp)

    const handleSubmitEdit = e => {
        e.preventDefault()
        onUpdate(item.id, newValue, newDesp)
        setIsEdit(false)
    }

    function handleCheckboxChange(e) {
        onComplete(item.id, e.target.checked);
    }

    return (
        <div>
            {isEdit ? (
                <form className="my-4 shadow-md p-4 flex" onSubmit={handleSubmitEdit}>
                    <div>
                        <input
                            className="bg-gray-50 w-3/4 mx-5 py-1 px-3   text-lg"
                            type="text"
                            value={newValue}
                            onChange={e => setNewValue(e.target.value)}
                        />
                        <input
                            className="bg-gray-50 w-3/4 mx-5 py-1 px-3   text-lg"
                            type="text"
                            value={newDesp}
                            onChange={e => setNewDesp(e.target.value)}
                        />
                    </div>
                    <button className="bg-indigo-500 py-2 px-4 mx-2 text-white font-bold " type="submit">Actualizar</button>

                </form>
            ) : (
                <div className=" my-4 shadow-md p-4 flex flex-wrap ">
                    <div className="flex w-full items-center">

                        {/* <div className="w-[10%]  md:w-[20%]">
                            <input className=""
                                type={"checkbox"}
                                onChange={handleCheckboxChange}
                                checked={item.checked}
                            />
                            <span
                                className="text-xs md:text-sm"
                            >
                                <div>
                         
                                    {isCheck ? 'Falta' : 'Hecho'}
                                </div>
                            </span>
                        </div> */}



                        <label 
                            className="relative inline-flex items-center  cursor-pointer w-[25%]  md:w-[20%]">
                            <input 
                                onChange={handleCheckboxChange}
                                checked={item.checked}
                                type="checkbox" defaultValue="" className="sr-only peer" />
                            <div className="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            <span
                                className="text-xs md:text-sm"
                            >
                            {isCheck ? 'Hecho' : 'Falta'}
                            </span>
                            </span>
                        </label>




                        <div className="w-[70%]  md:w-[60%]">
                            <p className="  flex font-bold md:text-lg text-gray-800  items-center mx-5 text-xs   uppercase ">{item.title} </p>
                            <p className="flex  items-center mx-5 text-xs md:text-lg  ">{item.desp} </p>
                        </div>
                        <div className="  flex flex-col w-[25%]  md:w-[20%] gap-2 ">
                            <button className="bg-orange-400 text-xs md:text-lg text-white md:px-6 py-1 md:py-2 flex justify-center " onClick={() => setIsEdit(true)}
                            >Editar</button>
                            <button className="bg-red-500 text-white font-bold md: md:px-6 py-1 md:py-2 text-xs md:text-lg  flex justify-center " onClick={(e) => onDelete(item.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
