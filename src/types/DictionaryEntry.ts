export interface DictionaryEntry {
  id: string;
  gaelic: string;
  definition: string;
  pronunciation: string;
  grammarNotes: string;
  audioUrl?: string;
  translations: {
    gaeilge: string;
    gaidhligMhanainn: string;
    beurla: string;
  };
  createdAt: Date;
  updatedAt: Date;
} 