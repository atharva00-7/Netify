import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from './reducers/MovieReducer'
import TvReducer from './reducers/TvReducer'
import PeopleReducer from './reducers/PeopleReducer'

export default configureStore({
    reducer: {
        movie: MovieReducer,
        tv: TvReducer,
        people: PeopleReducer,
    }
  })