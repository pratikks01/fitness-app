export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": "421e9275c9msh5baf9a1d32a5f84p1cf120jsnf910762d0c17",
	},
};

export const youtubeOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
		"X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
	},
};
export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};
