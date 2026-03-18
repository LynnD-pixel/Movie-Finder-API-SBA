import axios from "axios";

const OMDB_BASE_URL = "https://wwww.omdbapi.com/";

async function searchMovies(req, res) {
    const {title} = req.query;
    //validation
    if (!title) {
        return res.status(400).json({
            error: "Title query parameter is required",
        });
    }
    try {
        const response = await axios.get(OMDB_BASE_URL, {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error searching movies:", error.message);

        res.status(500).json({
            error: "Failed to fetch movies from OMDb API",
        });
    }
}

async function getMovieDetails(req, res) {
    const { id } = req.params;

    try {
        const response = await axios.get(OMDB_BASE_URL, {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY,
            }
        });
        res.json(response.data);
    }   catch (error) {
        console.error("Error fetching movie details:", error.message);

        res.status(500).json({
            error: "Failed to fetch movie details from OMDb API",
        });
    }
}

export default {searchMovies, getMovieDetails};