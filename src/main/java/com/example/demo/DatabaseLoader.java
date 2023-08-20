package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component 
public class DatabaseLoader implements CommandLineRunner { 

	private final AlumnoRepository repositoryA;
	private final CursoRepository repositoryC;
		private final MatriculaRepository repositoryM;

	@Autowired 
	public DatabaseLoader(AlumnoRepository repositoryA, CursoRepository repositoryC,MatriculaRepository repositoryM) {
		this.repositoryA = repositoryA;
		this.repositoryC = repositoryC;
		this.repositoryM = repositoryM;
	}

	@Override
	public void run(String... strings) throws Exception { 
		this.repositoryA.save(new Alumno("Roberto", "Gonzales Salazar", "Dia"));
		this.repositoryA.save(new Alumno("Nena", "Gonzales Salazae", "Dia"));
		this.repositoryA.save(new Alumno("Eduardo", "Gonzales Salazar", "Dia"));
		this.repositoryA.save(new Alumno("Matious", "Gonzales Salazar", "Dia"));
       
		Alumno a1=new Alumno("Roberto", "Gonzales Salazar", "Dia");
		this.repositoryA.save(a1);
		Alumno a2=new Alumno("Eduardo", "Gonzales Salazar", "Dia");
		this.repositoryA.save(a2);


       Curso c1=new Curso("Base de Datos");
	   this.repositoryC.save(c1);

	   this.repositoryM.save(new Matricula(a1,c1,2023));
	   this.repositoryM.save(new Matricula(a2,c1 ,2023));


	}
}