import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("tests on AddCategory component", () => {
	test("should change the value in the input", () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole("textbox");
		fireEvent.input(input, { target: { value: "Dragon Ball" } });
		screen.debug();
		expect(input.value).toBe("Dragon Ball");
	});
	test("should call onNewCategory if the input has a value", () => {
		const inputValue = "Goku";
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: inputValue } });
		screen.debug();
		fireEvent.submit(form);
		expect(input.value).toBe("");
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1); //check if the function was called only 1 time
		expect(onNewCategory).toHaveBeenCalledWith(inputValue );
	});
	test("should do nothing if the input doesn't have a value", () => {
		const inputValue = "";
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");
		screen.debug();
		fireEvent.submit(form);
		expect(input.value).toBe("");
		expect(onNewCategory).not.toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(0);
	});
});
