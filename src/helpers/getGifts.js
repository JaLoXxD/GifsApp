const apiKey = "BwRrfatle0towJ6b77BL61moagJHRyha";
const url = "https://api.giphy.com/v1/gifs/search";

const getGifs = async (category) => {
	const request = await fetch(`${url}?api_key=${apiKey}&q=${category}&limit=10`);
	const { data } = await request.json();
	const gifs = data.map((gif) => {
		return { id: gif.id, title: gif.title, url: gif.images.downsized_medium };
	});
	return gifs;
};

export { getGifs };
