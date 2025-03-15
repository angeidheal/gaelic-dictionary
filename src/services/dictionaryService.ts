import { DictionaryEntry } from '../types/DictionaryEntry';
import { dictionaryData } from '../data/dictionaryData';

// Helper function to normalize text by removing accents
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .trim();
};

export const searchDictionary = async (query: string): Promise<DictionaryEntry[]> => {
  const searchTerm = normalizeText(query);
  
  if (!searchTerm) {
    return [];
  }

  return dictionaryData.filter(entry => {
    const normalizedGaelic = normalizeText(entry.gaelic);
    const normalizedDefinition = normalizeText(entry.definition);
    const normalizedGrammarNotes = normalizeText(entry.grammarNotes);
    const normalizedGaeilge = normalizeText(entry.translations.gaeilge);
    const normalizedGaidhligMhanainn = normalizeText(entry.translations.gaidhligMhanainn);
    const normalizedBeurla = normalizeText(entry.translations.beurla);

    return (
      normalizedGaelic.includes(searchTerm) ||
      normalizedDefinition.includes(searchTerm) ||
      normalizedGrammarNotes.includes(searchTerm) ||
      normalizedGaeilge.includes(searchTerm) ||
      normalizedGaidhligMhanainn.includes(searchTerm) ||
      normalizedBeurla.includes(searchTerm)
    );
  });
};

export const getEntryById = async (id: string): Promise<DictionaryEntry | undefined> => {
  return dictionaryData.find(entry => entry.id === id);
};

export const getAllEntries = async (): Promise<DictionaryEntry[]> => {
  return dictionaryData;
}; 