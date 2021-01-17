import AsyncStorage from '@react-native-async-storage/async-storage';
import { _defaultData } from './_DATA';

const STORAGE_KEY = 'udacity_flash_cards';

export function getStorageDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(parseDecks);
}

const parseDecks = decks => (decks ? JSON.parse(decks) : _defaultData);

export async function saveStorageDeck(title) {
  const deck = {
    [title]: {
      title,
      questions: [],
    },
  };
  console.log(deck);
  await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck));
  return deck;
}

export function saveStorageCardToDeck(title, card) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(parseDecks)
    .then(decks => {
      return {
        ...decks,
        [title]: {
          ...decks[title],
          questions: [...decks[title].questions, card],
        },
      };
    })
    .then(decks => AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks)));
}

export function clearStorageDecks() {
  return AsyncStorage.removeItem(STORAGE_KEY);
}
