

export const POST = async (URL_API, body) => {
	try{
		const response = await fetch(URL_API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', //Aca le indicamos al back que lo que enviamos es un JSON
				'x-api-key': '8e849ec1-2977-404c-88c0-c8d2246d498f'
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


