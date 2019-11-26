
import { updateBalanceInfo } from '../../actions/Account';

import  { getMethod } from "./Fetch";


const GET_MOVIES_URL = 'https://facebook.github.io/react-native/movies.json';

export const getMovies = () => dispatch => async function getMoviesFromApi() {
    const  resJson = await getMethod(GET_MOVIES_URL);
    return dispatch(updateBalanceInfo(resJson.movies));
}
