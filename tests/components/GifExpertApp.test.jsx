import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe("tests on GifExpertApp component", () => {
	test("should return 3 categories titles", () => {
		const newCategory = "Skingeki";
		render(<GifExpertApp />);

		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);

		expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(3);
	});
	test("should return 2 categories if I add an existing category", () => {
		const newCategory = "GOW";
		render(<GifExpertApp />);

		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);
		screen.debug();

		expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
	});
});
