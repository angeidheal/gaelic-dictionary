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

  console.log('Search term:', searchTerm);

  // First try to find matches in the Gaelic term
  const gaelicMatches = dictionaryData.filter(entry => {
    const normalizedGaelic = normalizeText(entry.gaelic);
    const isMatch = normalizedGaelic.includes(searchTerm);
    if (entry.gaelic === 'ait' && searchTerm === 'achd') {
      console.log('Checking ait entry:');
      console.log('Normalized Gaelic:', normalizedGaelic);
      console.log('Is match:', isMatch);
      console.log('Entry:', entry);
    }
    return isMatch;
  });

  // If we found matches in Gaelic terms, return those
  if (gaelicMatches.length > 0) {
    console.log('Gaelic matches:', gaelicMatches.map(m => m.gaelic));
    return gaelicMatches;
  }

  // Otherwise, search in translations
  const translationMatches = dictionaryData.filter(entry => {
    const normalizedGaeilge = normalizeText(entry.translations.gaeilge);
    const normalizedGaidhligMhanainn = normalizeText(entry.translations.gaidhligMhanainn);
    const normalizedBeurla = normalizeText(entry.translations.beurla);

    const isMatch = (
      normalizedGaeilge.includes(searchTerm) ||
      normalizedGaidhligMhanainn.includes(searchTerm) ||
      normalizedBeurla.includes(searchTerm)
    );

    if (entry.gaelic === 'ait' && searchTerm === 'achd') {
      console.log('Checking ait entry translations:');
      console.log('Normalized Gaeilge:', normalizedGaeilge);
      console.log('Normalized Gàidhlig Mhanainn:', normalizedGaidhligMhanainn);
      console.log('Normalized Beurla:', normalizedBeurla);
      console.log('Is match:', isMatch);
    }

    return isMatch;
  });

  // If we found matches in translations, return those
  if (translationMatches.length > 0) {
    console.log('Translation matches:', translationMatches.map(m => m.gaelic));
    return translationMatches;
  }

  // Finally, search in definition and grammar notes
  const definitionMatches = dictionaryData.filter(entry => {
    const normalizedDefinition = normalizeText(entry.definition);
    const normalizedGrammarNotes = normalizeText(entry.grammarNotes);

    const isMatch = (
      normalizedDefinition.includes(searchTerm) ||
      normalizedGrammarNotes.includes(searchTerm)
    );

    if (entry.gaelic === 'ait' && searchTerm === 'achd') {
      console.log('Checking ait entry definition/grammar:');
      console.log('Normalized Definition:', normalizedDefinition);
      console.log('Normalized Grammar Notes:', normalizedGrammarNotes);
      console.log('Is match:', isMatch);
    }

    return isMatch;
  });

  console.log('Definition matches:', definitionMatches.map(m => m.gaelic));
  return definitionMatches;
};

export const getEntryById = async (id: string): Promise<DictionaryEntry | undefined> => {
  return dictionaryData.find(entry => entry.id === id);
};

export const getAllEntries = async (): Promise<DictionaryEntry[]> => {
  return dictionaryData;
}; 