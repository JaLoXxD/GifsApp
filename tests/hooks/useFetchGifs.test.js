import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("test in useFetchGifs hook", () => {
	const category = "Dragon Ball Z";
	test("should return the initial state", () => {
		const { result } = renderHook(() => useFetchGifs(category));
		console.log(result);
		const { gifts, isLoading } = result.current;
		expect(gifts.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test("should return an array of images and isLoading should be false", async () => {
		const { result } = renderHook(() => useFetchGifs(category));

		await waitFor(() => expect(result.current.gifts.length).toBeGreaterThan(0));

		const { gifts, isLoading } = result.current;

		expect(gifts.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
