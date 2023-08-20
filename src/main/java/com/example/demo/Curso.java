package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity 
public class Curso {

	private @Id @GeneratedValue Long id; 
	private String nombre;
	

	private Curso() {}

	public Curso(String nombre) {
		this.nombre = nombre;
		
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Curso curso = (Curso) o;
		return Objects.equals(id, curso.id) &&
			Objects.equals(nombre, curso.nombre);
			
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, nombre);
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



	@Override
	public String toString() {
		return "Curso{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

}