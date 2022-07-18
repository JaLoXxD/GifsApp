import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("tests on GifItem component", () => {
	const gif = {
		title: "test",
		url: { url: "https://www.asdf.com/index.js" },
	};
	test("should make match with the snapshot", () => {
		const { container } = render(<GifItem {...gif} />);
		expect(container).toMatchSnapshot();
	});

	test("should show the image with the URL and ALT text sended", () => {
		render(<GifItem {...gif} />);
		screen.debug();
		console.log(screen.getByRole("img").src);
		const { src, alt } = screen.getByRole("img");
		expect(src).toBe(gif.url.url);
		expect(alt).toBe(gif.title);
	});

	test("should show the title in a paragraph", () => {
		render(<GifItem {...gif} />);
		expect(screen.findByText(gif.title)).toBeTruthy();
	});
});
