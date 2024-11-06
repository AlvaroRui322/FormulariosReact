import React, {useState} from 'react';

const FormularioControlado = () => {
    const [todo, seTodo] = useState(
        {
            title: "",
            description: "Description 1",
            state: "completada",
            priority: false
        }
    )
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Enviando...")
        console.log(`Enviando ${todo.title}, ${todo.description}, ${todo.state}`)
    }

    const handleChange = e => {
        const {name, value, checked, type} = e.target
        seTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }

    return (
        <div>
            <h2>Formulario No Controlado</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder='Introduce la tarea'
                    className='form-control mb-2'
                    value = {todo.title}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Introduce la descripción"
                    className='form-control mb-2'
                    value = {todo.description}
                    onChange={handleChange}
                />
                <select
                    name="state"
                    className="form-control mb-2"
                    value = {todo.state}
                    onChange={handleChange}
                >
                    <option value="pendiente">pendiente</option>
                    <option value="completada">completada</option>
                </select>
                <div className="form-check mb2">
                    <input
                        className="form-check mb2"
                        type="checkbox"
                        name="priority"
                        id="inputCheck"
                        checked={todo.priority}
                        onChange={handleChange}/>
                    <label
                        className="form-check mb2"
                        htmlFor="inputCheck"
                        >Prioridad</label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Añadir</button>
            </form>
        </div>
    );
};

export default FormularioControlado;