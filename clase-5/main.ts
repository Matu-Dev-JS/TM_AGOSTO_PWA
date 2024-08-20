class TiposDeEmpleados {
    project: string
    developers: string
    disigners: string
    marketing: string
    constructor(project: string, developers: string, disigners: string, marketing: string) {
        this.project = project
        this.developers = developers
        this.disigners = disigners
        this.marketing = marketing
    }
}

/* CORRECTO */
class Empleado {
    nombre: string
    sueldo: number
    fecha_de_contratacion: string
    id_empleado: number
    tipo: string
    constructor(nombre: string, sueldo: number, fecha_de_contratacion: string, tipo: string, id_empleado: number,) {
        this.nombre = nombre
        this.sueldo = sueldo
        this.fecha_de_contratacion = fecha_de_contratacion
        this.id_empleado = id_empleado
        this.tipo = tipo
    }
}

class ManejadorEmpleados {
    id_empleados: number
    empleados: Empleado[]
    empresa : string
    constructor( empresa : string ) {
        this.id_empleados = 0
        this.empleados = []
        this.empresa = empresa
    }
    
    agregar_empleado(nombre: string, sueldo: number, fecha_de_contratacion: string, tipo: string) : Empleado[] {
        const nuevoEmpleado : Empleado = new Empleado(nombre, sueldo, fecha_de_contratacion, tipo, this.id_empleados++)
        this.empleados.push(nuevoEmpleado)
        return this.empleados
    }
    obtener_empleado_por_id(id : number) : Empleado | undefined {
        return this.empleados.find((empleado) => (empleado.id_empleado === id))
    }
    obtener_empleados_por_tipo(tipo : string) : Empleado[] {
        return this.empleados.filter((empleado) => (empleado.tipo === tipo))
    }
}


const manejadorEmpleados : ManejadorEmpleados = new ManejadorEmpleados('Banco de la pampa');  

manejadorEmpleados.agregar_empleado('Martin Gubler', 1800000, '20/08/2024', 'Developer')
manejadorEmpleados.agregar_empleado('Guillermo Eduardo', 2000000, '20/08/2024', 'Project Manager')

console.log(manejadorEmpleados)