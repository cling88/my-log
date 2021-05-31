import { combineReducers } from 'redux'
// redux
import theme from './theme'
import history from './history'

const rootReducer = combineReducers({
    theme,
    history
})

export default rootReducer