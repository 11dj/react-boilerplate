export const actionA = () => {
  return function (dispatch) {
    dispatch({
      type: 'ACTION_A',
      payload: 'got it from Action A'
    })
  }
}