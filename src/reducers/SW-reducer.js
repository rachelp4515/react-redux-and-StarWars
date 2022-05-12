import { SEARCH, ADD_CHAR } from '../actions'

const defaultState = () => {
  return {
    data: {},
    savedChars: []
  }
}

const starwarsReducer = (state = defaultState(), action) => {
  switch(action.type) {
    case SEARCH:
      let tempState = {...state}
      tempState.data = action.payload
      return tempState 
    case ADD_CHAR:
      return {...state, savedChars: [...state.savedChars, action.payload]}
    default: 
      return state
  }
}

export default starwarsReducer;