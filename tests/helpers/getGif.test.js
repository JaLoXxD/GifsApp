import { getGifs } from "../../src/helpers/getGif";

describe("tests on getGif.js", () => {
	const category = "dragon ball";
	test("should return a gifs array", async () => {
		const gifs = await getGifs(category);
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(Object),
		});
	});
});
