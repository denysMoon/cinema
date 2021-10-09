import { GET_RANDOM_MOVIES, GET_MOVIE_FOR_TITLE } from './types'
import Axios from 'axios'
import { API_LINK } from '../utils/const'

export const getMoviesForNameAction = (name) =>{
    return async(dispatch)=>{
        try{
          const result = await Axios.get(`${API_LINK}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`)
      
          dispatch({
            type: GET_MOVIE_FOR_TITLE,
            payload: result.data
          })
      
        } catch (err){

        }
      }
}