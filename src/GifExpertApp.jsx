import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["Dragon Ball", "GOW"]);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};
	return (
		<>
			<h1>Gift App</h1>
			<AddCategory
				onNewCategory={(val) => {
					onAddCategory(val);
				}}
			/>
			{/* <button onClick={onAddCategory}>Add</button> */}
			{categories.map((el) => {
				return <GifGrid key={el} category={el} />;
			})}
		</>
	);
};
