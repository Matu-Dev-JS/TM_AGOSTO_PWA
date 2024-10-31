import React, { useState } from 'react'

const CreateProductScreen = () => {

    const [image, setImage] = useState('')
    const handleSubmitNewProduct = async (e) => {
        try{
			e.preventDefault()
			const form_HTML = e.target
			const form_Values = new FormData(form_HTML)
			const form_fields = {
				'email': '',
				'password': ''
			}
			const form_values_object = extractFormData(form_fields, form_Values)
			const response = await POST('http://localhost:3000/api/products', form_values_object)
			console.log({response})
		}
		catch(error){
			//manejan sus errores
		}
    }

    const handleChangeFile = (evento) => {
        //Buscar el archivo que fue subido por ese input
        const file_found = evento.target.files[0]
        const lector_archivos = new FileReader()

        //Le decimos al lector de archivos que cuando termine de cargar nos ejecute x callback
        lector_archivos.onloadend = () => {
                console.log('carga finalizada')
                console.log(lector_archivos.result)
                setImage(lector_archivos.result)
            }
        

        //Si hay archivo leelo
        if(file_found){
            lector_archivos.readAsDataURL(file_found)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmitNewProduct}>
                <div>
					<label htmlFor='titulo'>Ingrese el titulo:</label>
					<input name='titulo' id='titulo' placeholder='pepe@gmail.com' />
				</div>
				<div>
					<label htmlFor='precio'>Ingrese el precio:</label>
					<input name='precio' id='precio' />
				</div>
                <div>
					<label htmlFor='stock'>Ingrese el stock:</label>
					<input name='stock' id='stock'  />
				</div>
                <div>
					<label htmlFor='descripcion'>Ingrese la descripcion:</label>
					<textarea name="descripcion" id="descripcion"></textarea>
				</div>
                <div>
					<label htmlFor='category'>Ingrese la categoria:</label>
					<input name='category' id='category'  />
				</div>
                <div>
                    {
                        image && <img src={image} />
                    }
					<label htmlFor='imagen'>Seleccione una imagen:</label>
					<input name='imagen' id='imagen' type='file' onChange={handleChangeFile} accept='image/*'/>
				</div>

				<button type='submit'>Crear producto</button>
        </form>
    </div>
  )
}

export default CreateProductScreen