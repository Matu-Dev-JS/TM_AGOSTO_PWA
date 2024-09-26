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
