type StateValue = {
  emailChecked: boolean;
};

interface actiontype {
  type: string;
  payload: boolean;
}

const INITIAL_VALUE: StateValue = {
  emailChecked: true,
};

export const KakaoEmailCheckReducer = (
  state = INITIAL_VALUE,
  action: actiontype
): StateValue => {
  const { type, payload } = action;
  switch (type) {
    case "EMAIL_NOT_CHECKED":
      return { ...state, emailChecked: false };
    case "EMAIL_CHECKED":
      return { ...state, emailChecked: true };
    default:
      return state;
  }
};

export const selectKakaoEmailCheck = (state: any) =>
  state.emailCheck.emailChecked;
