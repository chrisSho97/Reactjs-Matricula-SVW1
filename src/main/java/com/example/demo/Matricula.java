package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "matricula")
public class Matricula {


        private @Id @GeneratedValue Long id;

         @ManyToOne()
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    @ManyToOne()
    @JoinColumn(name = "id_curso")
    private Curso curso;
    private Integer anio;

    public Matricula() {}

    public Matricula(Alumno alumno, Curso curso, Integer anio) {
        this.alumno = alumno;
        this.curso = curso;
        this.anio = anio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Alumno getAlumno() {
        return alumno;
    }

    public void setAlumno(Alumno alumno) {
        this.alumno = alumno;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    

}
