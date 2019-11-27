
import  { get } from "./Fetch";

const GET_MOVIES_URL = 'https://facebook.github.io/react-native/movies.json';

export const getMovies = async function(){
    const  resJson = await get(GET_MOVIES_URL);
    console.log('fadfadsfasdf:' + JSON.stringify(resJson));
    return resJson.movies;
}
