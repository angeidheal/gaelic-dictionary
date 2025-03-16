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

  // First try to find matches in the Gaelic term
  const gaelicMatches = dictionaryData.filter(entry => {
    const normalizedGaelic = normalizeText(entry.gaelic);
    return normalizedGaelic.includes(searchTerm);
  });

  // If we found matches in Gaelic terms, return those
  if (gaelicMatches.length > 0) {
    return gaelicMatches;
  }

  // Otherwise, search in translations
  const translationMatches = dictionaryData.filter(entry => {
    const normalizedGaeilge = normalizeText(entry.translations.gaeilge);
    const normalizedGaidhligMhanainn = normalizeText(entry.translations.gaidhligMhanainn);
    const normalizedBeurla = normalizeText(entry.translations.beurla);

    return (
      normalizedGaeilge.includes(searchTerm) ||
      normalizedGaidhligMhanainn.includes(searchTerm) ||
      normalizedBeurla.includes(searchTerm)
    );
  });

  // If we found matches in translations, return those
  if (translationMatches.length > 0) {
    return translationMatches;
  }

  // Finally, search in definition and grammar notes
  const definitionMatches = dictionaryData.filter(entry => {
    const normalizedDefinition = normalizeText(entry.definition);
    const normalizedGrammarNotes = normalizeText(entry.grammarNotes);

    return (
      normalizedDefinition.includes(searchTerm) ||
      normalizedGrammarNotes.includes(searchTerm)
    );
  });

  return definitionMatches;
};

export const getEntryById = async (id: string): Promise<DictionaryEntry | undefined> => {
  return dictionaryData.find(entry => entry.id === id);
};

export const getAllEntries = async (): Promise<DictionaryEntry[]> => {
  return dictionaryData;
}; 