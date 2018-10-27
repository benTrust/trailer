import { combineReducers } from 'redux'
import ReducerUser from './reducerUser'
import ReducerUserFailed from './reducerUserFailed'
import ReducerDiscoveryMovie from './reducerDiscoveryMovie'
import ReducerTrailer from './reducerTrailer'
import ReducerSearchMovies from './reducerSearchMovies'
import {reducer as ReducerForm} from 'redux-form'

const rootReducer = combineReducers({
  user : ReducerUser,
  userFailed : ReducerUserFailed,
  form : ReducerForm,
  discoveryMovie : ReducerDiscoveryMovie,
  trailer : ReducerTrailer,
  searchMovies : ReducerSearchMovies
});

export default rootReducer;
