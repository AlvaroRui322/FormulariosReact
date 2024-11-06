import React, {useRef} from 'react';

const FormularioNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        const datos = new FormData(formulario.current)
        const objetoDatos = Object.entries(...datos.entries())
        const {todoName, todoDescripcion, todoEstado} = objetoDatos

        if (!todoName.trim() || !todoDescripcion.trim() || !todoEstado.trim()) {
            console.log("error")
            return
        }
        console.log("Todo ok")
    }

    return (
        <div>
            <h2>Formulario No Controlado</h2>
            <form ref = {formulario} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todoName"
                    placeholder='Introduce la tarea'
                    className='form-control mb-2'
                />
                <textarea
                    name="toDoDescription"
                    placeholder="Introduce la descripción"
                    className='form-control mb-2'
                    />
                <select
                    name="todoEstado"
                    className="form-control mb-2"
                    >
                    <option value="pendiente">pendiente</option>
                    <option value="completada">completada</option>
                </select>
                <button
                    type="submit"
                    className="btn btn-primary"
                    >Añadir</button>
            </form>
        </div>
    );
};

export default FormularioNoControlado;