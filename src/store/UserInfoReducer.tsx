type StateValue ={
    isLoggedin: boolean;
}

interface actiontype {
    type:string,
    payload: boolean;
}

const INITIAL_VALUE:StateValue ={
    isLoggedin : false,
}

export const UserInfoReducer = (
  state = INITIAL_VALUE,
  action: actiontype
): StateValue => {
  const { type, payload } = action;
  switch (type) {
    case "USER_LOG_IN":
        return { ...state, isLoggedin: true };
    case "USER_LOG_OUT":
        return { ...state, isLoggedin: false};
    default:
      return state;
  }
};


export const selectIsLoggedIn = (state:any) => state.user.isLoggedin;