import {
  getStorageDecks,
  saveStorageDeck,
  saveStorageCardToDeck,
  clearStorageDecks,
} from '../utils/storage';

export const GET_DECKS = 'GET_DECKS';
export const SAVE_DECK = 'SAVE_DECK';
export const SAVE_CARD_TO_DECK = 'SAVE_CARD_TO_DECK';
export const CLEAR_DECKS = 'DELETE_DECK';
export const RESET_NEW_DECK_ID = 'RESET_NEW_DECK_ID';

export function handleGetDecks() {
  return dispatch => {
    return getStorageDecks().then(decks => {
      dispatch(getAllDecks(decks));
    });
  };
}

export function handleSaveDeck(deckTitle) {
  return dispatch => {
    return saveStorageDeck(deckTitle).then(deck => {
      dispatch(addDeck(deck));
    });
  };
}

export function handleSaveCardToDeck(deckId, card) {
  return dispatch => {
    return saveStorageCardToDeck(deckId, card).then(() => {
      dispatch(addCardToDeck(deckId, card));
    });
  };
}

export function handleClearDecks(deckId) {
  return dispatch => {
    return clearStorageDecks(deckId).then(() => {
      dispatch(deleteDeck(deckId));
    });
  };
}

export function getAllDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: SAVE_DECK,
    deck,
  };
}

export function addCardToDeck(deckId, card) {
  return {
    type: SAVE_CARD_TO_DECK,
    deckId,
    card,
  };
}

export function deleteDeck(deckId) {
  return {
    type: CLEAR_DECKS,
    deckId,
  };
}

export function resetNewDeckId() {
  return {
    type: RESET_NEW_DECK_ID,
  };
}
