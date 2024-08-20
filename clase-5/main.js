"use strict";
class TiposDeEmpleados {
    constructor(project, developers, disigners, marketing) {
        this.project = project;
        this.developers = developers;
        this.disigners = disigners;
        this.marketing = marketing;
    }
}
/* CORRECTO */
class Empleado {
    constructor(nombre, sueldo, fecha_de_contratacion, tipo, id_empleado) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.id_empleado = id_empleado;
        this.tipo = tipo;
    }
}
class ManejadorEmpleados {
    constructor(empresa) {
        this.id_empleados = 0;
        this.empleados = [];
        this.empresa = empresa;
    }
    agregar_empleado(nombre, sueldo, fecha_de_contratacion, tipo) {
        const nuevoEmpleado = new Empleado(nombre, sueldo, fecha_de_contratacion, tipo, this.id_empleados++);
        this.empleados.push(nuevoEmpleado);
        return this.empleados;
    }
    obtener_empleado_por_id(id) {
        return this.empleados.find((empleado) => (empleado.id_empleado === id));
    }
    obtener_empleados_por_tipo(tipo) {
        return this.empleados.filter((empleado) => (empleado.tipo === tipo));
    }
}
const manejadorEmpleados = new ManejadorEmpleados('Banco de la pampa');
manejadorEmpleados.agregar_empleado('Martin Gubler', 1800000, '20/08/2024', 'Developer');
manejadorEmpleados.agregar_empleado('Guillermo Eduardo', 2000000, '20/08/2024', 'Project Manager');
console.log(manejadorEmpleados);
