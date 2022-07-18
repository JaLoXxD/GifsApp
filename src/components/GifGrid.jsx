import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
	const { gifts, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h2>Loading...</h2>}

			<div className="gifsGrid">
				{gifts.map((gif) => {
					return (
						<div className="gifCard" key={gif.id}>
							<GifItem {...gif} />
						</div>
					);
				})}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
