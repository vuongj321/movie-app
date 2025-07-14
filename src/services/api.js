const TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};
