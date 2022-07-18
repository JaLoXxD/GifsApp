import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
	const [inputVal, setInputVal] = useState("");

	const onInputChange = (e) => {
		setInputVal(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const newCategory = inputVal.trim();
		if (newCategory.length <= 1) return;
		//setCategories((categories) => [...categories, inputVal]);
		onNewCategory(newCategory);
		setInputVal("");
	};

	return (
		<form onSubmit={(e) => onSubmit(e)} aria-label="form" >
			<input
				type="text"
				placeholder="Search gifs..."
				value={inputVal}
				onChange={(e) => {
					onInputChange(e);
				}}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};
