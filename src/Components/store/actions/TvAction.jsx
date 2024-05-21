export { removeTvDetails } from '../reducers/TvReducer';
import axios from '../../../../Utils/axios';
import { getTvDetails } from '../reducers/TvReducer';

export const asyncLoadTv = (id) => async(dispatch, getState) => {
    try {
        const details = await axios.get(`/tv/${id}`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const externalIds = await axios.get(`/tv/${id}/external_ids`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
        let allTvData = {
            details:details.data,
            recommendations:recommendations.data.results,
            externalIds:externalIds.data,
            similar:similar.data.results,
            videos:videos.data.results.find(item => item.type === "Trailer"),
            watchProviders:watchProviders.data.results.IN,
        }
        dispatch(getTvDetails(allTvData));
    } catch (error) {
        console.error(error);
    }
}