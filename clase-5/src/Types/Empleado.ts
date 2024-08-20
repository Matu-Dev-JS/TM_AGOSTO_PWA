type Puesto = 'Developer' | 'Project Manager' | 'Marketing' | 'Desinger'


class Empleado {
    
    nombre: string
    sueldo: number
    fecha_de_contratacion: string
    id_empleado: number
    puesto: Puesto
    constructor(
        nombre: string, 
        sueldo: number, 
        fecha_de_contratacion: string, 
        puesto: Puesto, 
        id_empleado: number
    ) {
        this.nombre = nombre
        this.sueldo = sueldo
        this.fecha_de_contratacion = fecha_de_contratacion
        this.id_empleado = id_empleado
        this.puesto = puesto
    }
}

export {Empleado, Puesto}