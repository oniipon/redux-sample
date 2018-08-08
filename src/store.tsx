import {combineReducers, createStore} from 'redux';
import {reducer, State} from './states/sampleState';

// tslint:disable-next-line:interface-name
export interface AppState {
    state: State
}

const store = createStore(
    combineReducers<AppState>({
        state: reducer
    })
);

export default store;