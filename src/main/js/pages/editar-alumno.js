const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarAlumnoPage = ()=>{

    let { id } = useParams();
    const [alumno, setAlumno] = useState({})
    

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/alumnos/'+id
        }).done((response)=>setAlumno(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/alumnos/'+id,
            entity: alumno,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Alunmo</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br/>
                <input type="text" id="nombre" name="nombre" value={alumno.nombre} onChange={(e)=>setAlunmo({...alumno, nombre: e.target.value})} /> <br/>
                <label>Apellido</label> <br/>
                <input type="text" id="apellido" name="apellido" value={alumno.apellido} onChange={(e)=>setAlunmo({...alumno, apellido: e.target.value})} /> <br/>
                <label>Turno</label> <br/>
                <input type="text" id="turno" name="turno" value={alumno.turno} onChange={(e)=>setAlunmo({...alumno, turno: e.target.value})} /> <br/>
        
                <input type="submit" value="Editar Alumno" /> <br/>
                <Link to="/">Volver</Link>
            </form>

        </>
    )
}

module.exports = EditarAlumnoPage