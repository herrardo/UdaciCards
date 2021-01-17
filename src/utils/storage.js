import AsyncStorage from '@react-native-async-storage/async-storage';
import { _defaultData } from './_DATA';
import { v4 as uuidV4 } from 'uuid';

const STORAGE_KEY = 'udacity_flash_cards';

export function getStorageDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(parseDecks);
}

const parseDecks = decks => (decks ? JSON.parse(decks) : _defaultData);

export function saveStorageDeck(title) {
  const id = uuidV4();
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [id]: {
        title,
        questions: [],
      },
    }),
  );
}

export function saveStorageCardToDeck(deckId, card) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(parseDecks)
    .then(decks => {
      return {
        ...decks,
        [deckId]: {
          ...decks[deckId],
          questions: [...decks[deckId].questions, card],
        },
      };
    })
    .then(decks => AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks)));
}

export function clearStorageDecks() {
  return AsyncStorage.removeItem(STORAGE_KEY);
}
