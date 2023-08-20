package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity 
public class Alumno {

	private @Id @GeneratedValue Long id; 
	private String nombre;
	private String apellido;
	private String turno;

	private Alumno() {}

	public Alumno(String nombre, String apellido, String turno) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.turno = turno;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Alumno alumno = (Alumno) o;
		return Objects.equals(id, alumno.id) &&
			Objects.equals(nombre, alumno.nombre) &&
			Objects.equals(apellido, alumno.apellido) &&
			Objects.equals(turno, alumno.turno);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, apellido, turno);
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getTurno() {
		return turno;
	}

	public void setTurno(String turno) {
		this.turno = turno;
	}


	@Override
	public String toString() {
		return "Alumno{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", apellido='" + apellido + '\'' +
			", turno='" + turno + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

}