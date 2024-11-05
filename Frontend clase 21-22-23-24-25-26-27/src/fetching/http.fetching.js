

export const POST = async (URL_API, params) => {
	try{
		const response = await fetch(URL_API, {
			method: 'POST',
			...params
		})
		return response.json()
	}
	catch(error){
		console.log(error)
		throw error
		
	}
	
}


const unnauthenticatedHeaders = new Headers()
unnauthenticatedHeaders.set('Content-Type', 'application/json')
unnauthenticatedHeaders.set('x-api-key', '8e849ec1-2977-404c-88c0-c8d2246d498f')


const authenticatedHeaders = new Headers()
authenticatedHeaders.set('Content-Type', 'application/json')
authenticatedHeaders.set('x-api-key', '8e849ec1-2977-404c-88c0-c8d2246d498f')
authenticatedHeaders.set('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'))


export {authenticatedHeaders, unnauthenticatedHeaders}
//Crear GET, PUT, DELETE


