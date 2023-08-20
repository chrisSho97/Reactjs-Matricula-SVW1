const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect } = require('react');
const client = require('../client');

const VerCursoPage = () => {

    let { id } = useParams();
    const [curso, setCurso] = useState({});
    const [matriculas, setMatriculas] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/cursos/' + id
        }).done(response=>setCurso(response.entity))
        client({
            method: 'GET',
            path: '/api/matriculas/' + id + '/datos'
        }).done(response => setMatriculas(response.entity))
    }, [])

    return (
        <>
            <h1>Ver Curso</h1>
            <hr />

            <table border="1">
            <tbody>
                <tr>
                    <th>Nombre</th>
                    <td>{curso.nombre}</td>
                </tr>
            </tbody>
            </table>
            <hr />

            <h2>Datos</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Alumno</th>
                        <th>Curso</th>
                        <th>AÑO</th>
                    </tr>
                </thead>
                <tbody>

                    {matriculas.map(matricula=>{
                        return(
                            <tr key={matricula.ID}>
                                <td>{matricula.ALUMNO}</td>
                                <td>{matricula.CURSO}</td>
                                <td>{matricula.ANIO}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={'/ver-curso/${id}/nueva-matricula'}>Nueva Matricula</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerCursoPage;