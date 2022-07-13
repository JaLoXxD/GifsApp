import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
	const [gifts, setGifts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchGifts = async () => {
		const newGifts = await getGifs(category);
		setGifts(newGifts);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchGifts();
	}, []);

	return {
		gifts,
		isLoading,
	};
};
