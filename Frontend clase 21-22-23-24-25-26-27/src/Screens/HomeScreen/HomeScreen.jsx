import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { authenticatedHeaders, GET, unnauthenticatedHeaders } from '../../fetching/http.fetching'
import useProducts from '../../Hooks/useProducts'




const HomeScreen = () => {
	const user_info = JSON.parse(sessionStorage.getItem('user_info'))
	const {products} = useProducts()
	
	console.log(products)

	return (
		<div>
			<h1>Bienvenido {user_info.name}</h1>
			<Link to={'/product/new'}>Crear producto</Link>
		</div>
	)
}

export default HomeScreen