import { DictionaryEntry } from '../types/DictionaryEntry';
import { dictionaryData } from '../data/dictionaryData';

export const searchDictionary = async (query: string): Promise<DictionaryEntry[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    return [];
  }

  return dictionaryData.filter(entry => 
    entry.gaelic.toLowerCase().includes(searchTerm) ||
    entry.definition.toLowerCase().includes(searchTerm) ||
    entry.pronunciation.toLowerCase().includes(searchTerm) ||
    entry.grammarNotes.toLowerCase().includes(searchTerm) ||
    entry.translations.gaeilge.toLowerCase().includes(searchTerm) ||
    entry.translations.gaidhligMhanainn.toLowerCase().includes(searchTerm) ||
    entry.translations.beurla.toLowerCase().includes(searchTerm)
  );
};

export const getEntryById = async (id: string): Promise<DictionaryEntry | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return dictionaryData.find(entry => entry.id === id);
};

export const getAllEntries = async (): Promise<DictionaryEntry[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return dictionaryData;
}; 