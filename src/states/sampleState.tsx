import { reducerWithInitialState } from "typescript-fsa-reducers";
import { actions } from "../actions/sampleAction";

// tslint:disable-next-line:interface-name
export interface State {
  value: string;
}

const initialState: State = {
  value: ""
};

export const reducer = reducerWithInitialState(initialState).case(
  actions.updateValue,
  (state, value) => {
    return Object.assign({}, state, { value });
  }
);
