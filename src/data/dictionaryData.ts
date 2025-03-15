import { DictionaryEntry } from '../types/DictionaryEntry';

export const dictionaryData: DictionaryEntry[] = [
  {
    id: 'geidh',
    gaelic: 'gèidh',
    definition: 'Fireannach aig a bheil tàladh romansach no feiseil air fireannach eile.',
    pronunciation: '',
    grammarNotes: '',
    translations: {
      gaeilge: 'aerach',
      gaidhligMhanainn: 'aeragh',
      beurla: 'gay'
    },
    createdAt: new Date('2008-01-01'),
    updatedAt: new Date('2008-01-01')
  },
  {
    id: 'leasbach',
    gaelic: 'leasbach',
    definition: 'Boireannach aig a bheil tàladh romansach no feiseil air boireannaich eile.',
    pronunciation: '',
    grammarNotes: '',
    translations: {
      gaeilge: 'leispiach',
      gaidhligMhanainn: 'lesbeeagh',
      beurla: 'lesbian'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]; 