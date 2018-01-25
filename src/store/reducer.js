import {
  INCREMENT_REQUESTED,
  INCREMENT,
  DECREMENT_REQUESTED,
  DECREMENT,
} from './types';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {};

    case INCREMENT:
      return {};

    case DECREMENT_REQUESTED:
      return {};

    case DECREMENT:
      return {};

    default:
      return state
  }
}
