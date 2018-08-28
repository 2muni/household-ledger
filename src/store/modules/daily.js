import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'daily/CHANGE_INPUT';
const INSERT = 'daily/INSERT';
const TOGGLE = 'daily/TOGGLE';
const REMOVE = 'daily/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, amount => amount);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Map({
  input: Map({
    tag: '',
    memo: '',
    amount: ''
  }),
  details: List()
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => state.setIn(['input', 'amount'], action.payload),
  [INSERT]: (state, { payload: input }) => {
    const item = Map({ id: id++, checked: false, input });
    return state.update('details', details => details.push(item));
  },
  [TOGGLE]: (state, { payload: id }) => {
    const index = state.get('details').findIndex(item => item.get('id') === id);
    return state.updateIn(['details', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    const index = state.get('details').findIndex(item => item.get('id') === id);
    return state.deleteIn(['details', index]);
  }
}, initialState);