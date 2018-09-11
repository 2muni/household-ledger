import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'daily/CHANGE_INPUT';
const INSERT = 'daily/INSERT';
const TOGGLE = 'daily/TOGGLE';
const REMOVE = 'daily/REMOVE';
const TOGGLE_EXPEND = 'daily/TOGGLE_EXPEND';


export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const toggleExpend = createAction(TOGGLE_EXPEND, id => id);

let id = 0;

const initialState = Map({
  input: Map({
    tag: '',
    memo: '',
    amount: ''
  }),
  details: List(),
  status: Map({
    expenditure: true,
  })
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['input', name], value);
  },
  [INSERT]: (state) => {
    let tag = state.getIn(['input', 'tag']);
    let memo = state.getIn(['input', 'memo']);
    let amount = state.getIn(['input', 'amount']);
    amount || (amount = '0');
    const expenditure = state.getIn(['status', 'expenditure']);
    const item = Map({ id: id++, checked: false, tag: tag, memo: memo, amount: (expenditure ? '-'+amount : amount ) });
    return state.update('details', details => details.push(item));
  },
  [TOGGLE]: (state, { payload: id }) => {
    const index = state.get('details').findIndex(item => item.get('id') === id);
    return state.updateIn(['details', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    const index = state.get('details').findIndex(item => item.get('id') === id);
    return state.deleteIn(['details', index]);
  },
  [TOGGLE_EXPEND]: (state, action) => {
    const { id } = action.payload;
    return state.setIn(['status', 'expenditure'], id === 'expenditure' ? true : false);
  }
}, initialState);