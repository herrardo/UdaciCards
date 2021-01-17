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

export function handleSaveDeck(title) {
  return dispatch => {
    return saveStorageDeck(title).then(deck => dispatch(addDeck(deck)));
  };
}

export function handleSaveCardToDeck(title, card) {
  return dispatch => {
    return saveStorageCardToDeck(title, card).then(() => dispatch(addCardToDeck(title, card)));
  };
}

export function handleClearDecks(title) {
  return dispatch => {
    return clearStorageDecks(title).then(() => dispatch(deleteDeck(title)));
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

export function addCardToDeck(title, card) {
  return {
    type: SAVE_CARD_TO_DECK,
    title,
    card,
  };
}

export function deleteDeck(title) {
  return {
    type: CLEAR_DECKS,
    title,
  };
}

export function resetNewDeckId() {
  return {
    type: RESET_NEW_DECK_ID,
  };
}
