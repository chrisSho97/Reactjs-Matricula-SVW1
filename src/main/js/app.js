const React = require('react'); 
const ReactDOM = require('react-dom'); 
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
 const NuevoCursoPage = require('./pages/nuevo-curso');
 const VerAlumnoPage = require('./pages/ver-alumno');
const NuevoAlumnoPage = require('./pages/nuevo-alumno');
const VerCursoPage = require('./pages/ver-curso');
const EditarCursoPage = require('./pages/editar-curso');
const NuevaMatriculaPage = require('./pages/nueva-matricula');
const EditarAlumnoPage = require('./pages/editar-alumno');



const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-alumno/:id', element: <VerAlumnoPage /> },
	{ path: '/nuevo-alumno', element: <NuevoAlumnoPage /> },
	 { path: '/ver-curso/:id', element: <VerCursoPage /> },
	 { path: '/nuevo-curso', element: <NuevoCursoPage /> },
     { path: '/editar-curso/:id', element: <EditarCursoPage /> },
	 { path: '/ver-curso/:id/nueva-matricula', element: <NuevaMatriculaPage /> },
	 { path: '/nueva-matricula', element: <NuevaMatriculaPage /> },
	 { path: '/editar-alumno/:id', element: <EditarAlumnoPage /> },

])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))