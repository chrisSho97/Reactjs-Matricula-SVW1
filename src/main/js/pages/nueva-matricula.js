const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevaMatriculaPage = () => {

    let { id } = useParams();

    const [cursos, setCursos] = useState([])
    const [alumnos, setAlumnos] = useState([])

    const [idCurso, setIdCurso] = useState('')
    const [idAlumno, setIdAlumno] = useState('')
    const [anio, setAnio] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/matriculas',
            entity: {
                curso: 'http://localhost:8080/api/cursos/'+idCurso,
                alumno: 'http://localhost:8080/api/alumnos/'+idAlumno,
                anio: anio},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/cursos'
        }).done(response=>{
            setCursos(response.entity._embedded.cursos)
        })
        client({
            method: 'GET',
            path: '/api/alumnos'
        }).done(response=>{
            setAlumnos(response.entity._embedded.alumnos)
        })

    },[])

    return (
        <>
            <h1>Nueva Matricula</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='curso'>Curso </label>
                <select name="curso" id="curso" onChange={(e)=>{setIdCurso(e.target.value)}}>
                    {cursos.map(curso => {	
                        const value = curso._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{curso.nombre}]</option>
                        )
                    })}
                </select><br />
                
                <label>Alumnos </label>
                <select name="alumno" id="alumno" onChange={(e)=>{setIdAlumno(e.target.value)}}>
                    {alumnos.map(alumno => {	
                        const value = alumno._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({alumno.nombre})</option>
                        )
                    })}
                </select><br />
                <label>AÑO</label>
                <input type="number" id='anio' name='anio' onChange={e=>setAnio(e.target.value)} /> <br />
                <input type="submit" value="Nueva Matricula" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevaMatriculaPage;