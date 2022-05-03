
export const handle = async ({ event, resolve }) => {
	let response
	try {
		response = await resolve(event);
	} catch (err) {
		console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
		console.log(err)
		throw err
	}
	return response;
};
