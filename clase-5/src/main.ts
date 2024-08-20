import { Empleado, Puesto} from "./Types/Empleado"


/* CORRECTO */


class ManejadorEmpleados {
    id_empleados: number
    empleados: Empleado[]
    empresa : string
    constructor( empresa : string ) {
        this.id_empleados = 0
        this.empleados = []
        this.empresa = empresa
    }
    
    agregar_empleado(
        nombre: string, 
        sueldo: number, 
        fecha_de_contratacion: string, 
        puesto: Puesto
    ) : Empleado[] {
        const nuevoEmpleado : Empleado = new Empleado(nombre, sueldo, fecha_de_contratacion, puesto, this.id_empleados++)
        this.empleados.push(nuevoEmpleado)
        return this.empleados
    }
    obtener_empleado_por_id(id : number) : Empleado | undefined {
        return this.empleados.find((empleado : Empleado) : boolean => { 
            return empleado.id_empleado === id 
        })
    }
    obtener_empleados_por_puesto(puesto : Puesto) : Empleado[] {
        return this.empleados.filter((empleado : Empleado ) : boolean => (empleado.puesto === puesto))
    }
}


const manejadorEmpleados : ManejadorEmpleados = new ManejadorEmpleados('Banco de la pampa');  

manejadorEmpleados.agregar_empleado('Martin Gubler', 1800000, '20/08/2024', 'Developer')
manejadorEmpleados.agregar_empleado('Guillermo Eduardo', 2000000, '20/08/2024', 'Project Manager')

const guille : Empleado | undefined = manejadorEmpleados.obtener_empleado_por_id(20)

const developersBancoDeLaPampa : Empleado[] = manejadorEmpleados.obtener_empleados_por_puesto('Developer')

console.log(developersBancoDeLaPampa)
