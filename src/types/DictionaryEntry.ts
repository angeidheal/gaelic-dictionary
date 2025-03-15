export interface DictionaryEntry {
  id: string;
  gaelic: string;
  definition: string;
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