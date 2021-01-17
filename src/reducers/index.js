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
        [deck.id]: deck,
      };
    case SAVE_CARD_TO_DECK:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat([card]),
        },
      };
    case CLEAR_DECKS:
      delete state[action.deckId];
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default decks;
