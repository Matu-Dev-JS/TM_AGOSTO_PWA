import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { authenticatedHeaders, GET, unnauthenticatedHeaders } from '../../fetching/http.fetching'
import useProducts from '../../Hooks/useProducts'




const HomeScreen = () => {
	const user_info = JSON.parse(sessionStorage.getItem('user_info'))
	const {products, isLoadingProducts} = useProducts()
	console.log(products)

	return (
		<div>
			<h1>Bienvenido {user_info.name}</h1>
			<Link to={'/product/new'}>Crear producto</Link>
			{
				isLoadingProducts 
				? <span>Cargando....</span>
				: <ProductsList products={products}/>
			}
		</div>
	)
}

const ProductsList = ({products}) => {

	return (
		products.map(product => {
			return <Product 
				key={product.id} 
				{...product}
			/>
		})
	)
}

const Product = ({title, price, stock, description, image, id}) => {
	return (
		<div>
			<h2>{title}</h2>
			<img  src={image} width={'200'}/>
			<span>Precio: ${price}</span>
			<Link>Ir a detalle</Link>
		</div>
	)
}

export default HomeScreen