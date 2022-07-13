import { GiftItem } from "./GiftItem";

import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({ category }) => {
	const { gifts, isLoading } = useFetchGifts(category);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h2>Loading...</h2>}

			<div className="gifsGrid">
				{gifts.map((gift) => {
					return (
						<div className="gifCard" key={gift.id}>
							<GiftItem {...gift} />
						</div>
					);
				})}
			</div>
		</>
	);
};
