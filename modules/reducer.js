import {combineReducers} from 'redux'

const hello = (state = 'world') => state

export default combineReducers({
  hello,
})
