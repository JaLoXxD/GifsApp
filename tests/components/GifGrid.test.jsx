import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("tests on GifGrid component", () => {
	const category = "Dragon Ball Z";

	const gifs = [
		{
			id: "1234",
			title: "Goku",
			url: {
				url: "https://test.com",
			},
		},
		{
			id: "1233",
			title: "Vegeta",
			url: {
				url: "https://test2.com",
			},
		},
	];

	test("should show the loading", () => {
		useFetchGifs.mockReturnValue({
			gifts: [],
			isLoading: true,
		});
		render(<GifGrid category={category} />);
		expect(screen.getByText("Loading..."));
	});
	test("should show the gifs", () => {
		useFetchGifs.mockReturnValue({
			gifts: gifs,
			isLoading: false,
		});
		render(<GifGrid category={category} />);
		screen.debug();
		expect(screen.getAllByRole("img").length).toBe(2);
	});
});
