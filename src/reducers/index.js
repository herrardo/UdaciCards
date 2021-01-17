import { GET_DECKS, SAVE_CARD_TO_DECK, SAVE_DECK, CLEAR_DECKS } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case SAVE_DECK:
      const { deck } = action;
      return {
        ...state,
        ...deck,
      };
    case SAVE_CARD_TO_DECK:
      const { title, card } = action;
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat([card]),
        },
      };
    case CLEAR_DECKS:
      delete state[action.title];
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default decks;
