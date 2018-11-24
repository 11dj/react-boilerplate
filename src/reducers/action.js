const initialState = {
  valueA: ''
}

const action = (state = initialState, action) => {
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case 'ACTION_A':
      nextState.valueA = action.payload
      return nextState
    case 'ACTION_INITIAL':
      return initialState
    default:
      return state
  }
}

export default action
