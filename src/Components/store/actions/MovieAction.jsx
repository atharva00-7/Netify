export { removeMovieDetails } from '../reducers/MovieReducer';
import axios from '../../../../Utils/axios';
import { getMovieDetails } from '../reducers/MovieReducer';

export const asyncLoadMovies = (id) => async(dispatch, getState) => {
    try {
        const details = await axios.get(`/movie/${id}`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const externalIds = await axios.get(`/movie/${id}/external_ids`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
        let allMovieData = {
            details:details.data,
            recommendations:recommendations.data.results,
            externalIds:externalIds.data,
            similar:similar.data.results,
            videos:videos.data.results.find(item => item.type === "Trailer"),
            watchProviders:watchProviders.data.results.IN,
        }
        dispatch(getMovieDetails(allMovieData));
    } catch (error) {
        console.error(error);
    }
}