const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarCursoPage = ()=>{

    let { id } = useParams();
    const [curso, setCurso] = useState({})
    

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/cursos/'+id
        }).done((response)=>setCurso(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/cursos/'+id,
            entity: curso,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Curso</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br/>
                <input type="text" id="nombre" name="nombre" value={curso.nombre} onChange={(e)=>setCurso({...curso, nombre: e.target.value})} /> <br/>
        
                <input type="submit" value="Editar Curso" /> <br/>
                <Link to="/">Volver</Link>
            </form>

        </>
    )
}

module.exports = EditarCursoPage