import { actionType } from "../store/tags/TagReducer";

const createAction = (type: string, payload?: actionType) => ({
  type,
  payload,
});
export default createAction;