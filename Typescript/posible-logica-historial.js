/* Antes de todo esto debemos localizar los cambios entre el form nuevo y el form viejo */

class ListaCambios {
    cambios = []
    contador_id = 1
    constructor(formNuevo, formViejo){
        const formNuevoJson = {}
        for(const propiedad in formNuevo){
            formNuevoJson[propiedad] = formNuevo.get(propiedad)
            this.agregarCambio(propiedad )
        }
        
    }
    
    agregarCambio(campo, valor_viejo, valor_actual){
        this.cambios.push(new Cambio(this.contador_id++, valor_viejo, valor_actual, campo))
    }
    obtenerCambios(){
        return this.cambios
    }
}


const registrarCambios = (formViejo, formNuevo) => {
    /* Deberian llamar al formulario 2 */
    const formData = new FormData(formulario)
    const listaCambios = new ListaCambios(formData)
}