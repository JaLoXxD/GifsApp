import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
	return (
		<>
			<img src={url.url} alt={title} />
			<h2>{title}</h2>
		</>
	);
};

GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
