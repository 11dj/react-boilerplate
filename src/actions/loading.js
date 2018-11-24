export const enableLoading = () => {
  return function (dispatch) {
    dispatch({
      type: 'LOADING_ON'
    })
  }
}

export const disableLoading = () => {
  return function (dispatch) {
    dispatch({
      type: 'LOADING_OFF'
    })
  }
}