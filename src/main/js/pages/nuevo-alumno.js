const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoAlumnoPage = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [turno, setTurno] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/alumnos',
            entity: {nombre: nombre, apellido: apellido, turno: turno},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Alumno</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />
            <label>Apellido</label> <br />
            <input type="text" id='apellido' name='apellido' onChange={e=>setApellido(e.target.value)} /> <br />
            <label>Turno</label> <br />
            <input type="text" id='turno' name='turno' onChange={e=>setTurno(e.target.value)} /> <br />
            <input type="submit" value="Nuevo Alumno" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoAlumnoPage;