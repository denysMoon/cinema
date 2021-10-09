import { GET_MOVIE_FOR_TITLE } from '../types'

const initialState = {
  search: []
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
      case GET_MOVIE_FOR_TITLE:
        return { ...state, search: action.payload };
      default: return state
    }
  }