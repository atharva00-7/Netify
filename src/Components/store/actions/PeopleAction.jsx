export { removePersonDetails } from '../reducers/PeopleReducer';
import axios from '../../../../Utils/axios';
import { getPersonDetails } from '../reducers/PeopleReducer';

export const asyncLoadPerson = (id) => async(dispatch, getState) => {
    try {
        const details = await axios.get(`/person/${id}`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const externalIds = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        
        let allPersonData = {
            details:details.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data,
            externalIds: externalIds.data,
            combinedCredits: combinedCredits.data,
        }
        dispatch(getPersonDetails(allPersonData));
    } catch (error) {
        console.error(error);
    }
}