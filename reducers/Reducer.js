/**
 * @flow
 */

import { Record, List } from 'immutable';

type Item = {
  text: string,
  isEditable: boolean,
  isHidden: boolean
};

type Data = {
  disableRemove: boolean,
  completedItems: List<Item>,
  items: List<Item>
};

const actionTypes = {
    UPDATE: 'u',
};

type ActionType = $Keys<typeof actionTypes>;

type Action = {
  type: ActionType,
  payload: {}
};

const initialState = {
    data: new (Record({
        disableRemove: false,
        completedItems: List([]),
        items: List([])
    }))()
};

// we need this key-value data wrapper around our Record because React expects an object for it's state
const reducer = (state: { data: Record<Data> } = initialState, action: Action) => {
    const { data } = state;
    const disableRemove = data.get('disableRemove')
    const items = data.get('items')
    const completedItems = data.get('completedItems')
    const { type, payload } = action;

    if (type == actionTypes.UPDATE) {
        // $FlowFixMe - flow thinks that Record does not have a merge property
        return { data: state.data.merge(payload.updateObj) }
    } else {
      return state;
    }
};

export { reducer, actionTypes };
export default reducer;