import React from "react";

export const GiftItem = ({title, url}) => {
	return (
		<>
			<img src={url.url} alt={title} />
			<h2>{title}</h2>
		</>
	);
};
