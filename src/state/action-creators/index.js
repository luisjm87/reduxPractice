export const actionsCreators = {
  depositMoney: (ammount) => {
    return (dispatch) => {
      dispatch({
        type: "deposit",
        payload: ammount
      })
    }
  },
  withdrawMoney: (ammount) => {
    return (dispatch) => {
      dispatch({
        type: "withdraw",
        payload: ammount
      })
    }
  }
};