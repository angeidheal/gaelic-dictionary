import { DictionaryEntry } from '../types/DictionaryEntry';

export const dictionaryData: DictionaryEntry[] = [
  {
    id: 'geidh',
    gaelic: 'gèidh',
    definition: 'Fireannach aig a bheil tàladh romansach no feiseil air fireannach eile.',
    grammarNotes: 'bua. coi. -e',
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
    grammarNotes: '1. fir. gin. ⁊ iol. -aich\n2. bua. coi. -aiche',
    translations: {
      gaeilge: 'leispiach',
      gaidhligMhanainn: 'lesbeeagh',
      beurla: 'lesbian'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]; 