import express from 'express'
import productRouter from './routes/products.routes.js'

const app = express()
const PORT = 3000

//Middleware para habilitar que nuesta aplicacion reciba JSON en el body
app.use(express.json())

//Este endpoint es como un hola mundo en server http
app.get('/ping', (req, res) => {
    res.json({
        ok: true,
        status: 200,
        payload: {
            message: 'pong'
        }
    })
})

/* 
Armar un endpoint con metodo POST /ping que reciba un objeto que tenga message y mostrarlo por consola
Responder:
{
    ok: true,
    status: 200,
    payload: {
        message: 'Ping recibido'
    }
}
*/

app.post('/ping', (req, res) => {
    console.log(req.body.payload.message)
    res.json(
        {
            ok: true,
            status: 200,
            payload: {
                message: 'Ping recibido'
            }
        })
})

/* 
CRUD DE PRODUCTOS

ROUTE: /api/products

Method: GET
Endpoint: / 
Accion: obtenerProductos
Buscar en products.json el array de productos y devolverlo

Response:
{
    ok: true,
    status: 200,
    payload: {
        products: [Lista De Productos]
    }
}


Method: GET
Endpoint: /:product_id
obtenerProductoPorId
Buscar en products.json el producto con id igual al id recibido por parametro de busqueda y devolverlo

Response:
{
    ok: true,
    status: 200,
    payload: {
        product: {producto}
    }
}

Method: POST
Endpoint: /
crearProducto
Van a recibir por body:
{
    title: 'nuevo tv',
    price: 3000,
    categoria: 'TECNOLOGIA',
    stock: 2
}
y deberar agregarlo a products.json y devolver la lista de productos actualizada

posibles errores:
- El producto ya existe, ya existe un proyecto con el mismo title STATUS: 400
- El enviado no tiene los campos necesarios STATUS: 400 (opcional: especificar los campos faltantes)
- El stock es negativo STATUS: 400
- El stock no es un numero STATUS: 400
- El precio no es un numero STATUS: 400
- El precio es negativo STATUS: 400
- El title no es un string STATUS: 400
- El title es vacio STATUS: 400
- La categoria no es un string valido o no es una de las categorias existentes STATUS: 400 (OPCIONAL categorias_existentes: 'ropa', 'electrodomestico', 'jugueteria')        
- Error de lectura de archivo STATUS: 500

Si todo esta bien responder:
Response:
{
    ok: true,
    status: 201,
    payload: {
        products: [nueva lista con el producto agregado]
    }
}

Method: PUT
Endpoint: /:product_id
actualizarProductoPorId

Van a recibir por body:
{
    title: 'nuevo nombre tv',
    price: 2000,
    stock: 2,
    propiedad_falsa = true,
    nombre = 'pepe'
}


y deberar modificarlo en products.json y devolver la lista de productos actualizada

POSIBLES ERRORES:
- El producto ya existe, ya existe un proyecto con el mismo title STATUS: 400
- El enviado no tiene los campos necesarios STATUS: 400 (opcional: especificar los campos faltantes)
- El stock es negativo STATUS: 400
- El stock no es un numero STATUS: 400
- El precio no es un numero STATUS: 400
- El precio es negativo STATUS: 400
- El title no es un string STATUS: 400
- El title es vacio STATUS: 400
- La categoria no es un string valido o no es una de las categorias existentes STATUS: 400 (OPCIONAL categorias_existentes: 'ropa', 'electrodomestico', 'jugueteria')        
- Error de lectura de archivo STATUS: 500
- Las propiedades recibidas deben ser validas, significa que no podemos recibir una propiedad que no existe Status: 400 (opcional: especificar las propiedades validas y la que esta/an mal)


Response:
{
    ok: true,
    status: 201,
    payload: {
        product: {producto modificado}
    }
}

Method: DELETE
Endpoint: /:product_id
eliminarProducto
Response:
{
    ok: true,
    status: 200,
    payload: {
        message: 'Producto eliminado'
    }
}
*/

app.use('/api/products', productRouter)


app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})

const producto = {
    title: 'nuevo nombre tv',
    price: 2000,
    stock: 2,
    propiedad_falsa: true,
    nombre: 'pepe',
    teclado: true
}

const PROPIEDADES_VALIDAS = ['title', 'price', 'stock']
const propiedades_invalidas = []

for(let propiedad in producto){
    if(!PROPIEDADES_VALIDAS.includes(propiedad)){
        propiedades_invalidas.push(propiedad)
    }
}

console.log(propiedades_invalidas)