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
  details: List(),
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['input', name], value);
  },
  [INSERT]: (state) => {
    const tag = state.getIn(['input', 'tag'])
    const memo = state.getIn(['input', 'memo'])
    const amount = state.getIn(['input', 'amount'])
    const item = Map({ id: id++, checked: false, tag: tag, memo: memo, amount: amount });
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