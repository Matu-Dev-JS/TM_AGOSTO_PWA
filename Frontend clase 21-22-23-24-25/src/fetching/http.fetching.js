

export const POST = async (URL_API, body) => {
	try{
		const response = await fetch(URL_API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json' //Aca le indicamos al back que lo que enviamos es un JSON
			},
			body: JSON.stringify(body)
		})
		return response.json()
	}
	catch(error){
		
		throw error
	}
	
}

//Crear GET, PUT, DELETE


