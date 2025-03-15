import { DictionaryEntry } from '../types/DictionaryEntry';

export const dictionaryData: DictionaryEntry[] = [
  {
    id: 'halo',
    gaelic: 'Halò',
    definition: 'Fàilte no beannachd a chleachdar airson cainnt a thòiseachadh',
    pronunciation: 'ha-LO',
    grammarNotes: 'Beannachd cumanta ann an Gàidhlig',
    translations: {
      gaeilge: 'Dia duit',
      gaidhligMhanainn: 'Moghrey mie',
      beurla: 'Hello'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mar-sin-leat',
    gaelic: 'Mar sin leat',
    definition: 'Beannachd a chleachdar nuair a tha thu a\' falbh',
    pronunciation: 'mar shin leat',
    grammarNotes: 'Cleachdar nuair a tha thu a\' bruidhinn ri aon duine',
    translations: {
      gaeilge: 'Slán leat',
      gaidhligMhanainn: 'Slane lhiat',
      beurla: 'Goodbye'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'tapadh-leat',
    gaelic: 'Tapadh leat',
    definition: 'Beannachd a chleachdar airson taing a thoirt do dhuine',
    pronunciation: 'TAH-puh let',
    grammarNotes: 'Cleachdar nuair a tha thu a\' bruidhinn ri aon duine',
    translations: {
      gaeilge: 'Go raibh maith agat',
      gaidhligMhanainn: 'Gura mie ayd',
      beurla: 'Thank you'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'madainn-mhath',
    gaelic: 'Madainn mhath',
    definition: 'Beannachd a chleachdar sa mhadainn',
    pronunciation: 'MAH-din vah',
    grammarNotes: 'Beannachd cumanta a chleachdar sa mhadainn',
    translations: {
      gaeilge: 'Maidin mhaith',
      gaidhligMhanainn: 'Moghrey mie',
      beurla: 'Good morning'
    },
    audioUrl: '/audio/madainn-mhath.mp3',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'oidhche-mhath',
    gaelic: 'Oidhche mhath',
    definition: 'Beannachd a chleachdar airson oidhche mhath a chur air duine',
    pronunciation: 'OY-chuh vah',
    grammarNotes: 'Cleachdar nuair a tha thu a\' sgrìobhadh oidhche mhath no nuair a tha thu a\' falbh feasgar',
    translations: {
      gaeilge: 'Oíche mhaith',
      gaidhligMhanainn: 'Oie vie',
      beurla: 'Good night'
    },
    audioUrl: '/audio/oidhche-mhath.mp3',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'slainte-mhath',
    gaelic: 'Slàinte mhath',
    definition: 'Beannachd a chleachdar airson slàinte mhath a chur air duine, gu h-àraidh nuair a tha thu a\' òl',
    pronunciation: 'SLAAN-chuh vah',
    grammarNotes: 'Beannachd traidiseanta a chiallaicheas "slàinte mhath", gu h-àraidh nuair a tha thu a\' òl',
    translations: {
      gaeilge: 'Sláinte mhaith',
      gaidhligMhanainn: 'Slaynt vie',
      beurla: 'Good health'
    },
    audioUrl: '/audio/slainte-mhath.mp3',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ciamar-a-tha-thu',
    gaelic: 'Ciamar a tha thu?',
    definition: 'Ceist a chleachdar airson faighinn a-mach ciamar a tha duine',
    pronunciation: 'KIM-ar uh HA oo',
    grammarNotes: 'Dòigh neo-fhoirmeil air faighneachd ciamar a tha duine',
    translations: {
      gaeilge: 'Conas atá tú?',
      gaidhligMhanainn: 'Kys t\'ou?',
      beurla: 'How are you?'
    },
    audioUrl: '/audio/ciamar-a-tha-thu.mp3',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'failte',
    gaelic: 'Fàilte',
    definition: 'Beannachd a chleachdar airson duine fhàilteachadh',
    pronunciation: 'FAL-chuh',
    grammarNotes: 'Cleachdar airson duine fhàilteachadh',
    translations: {
      gaeilge: 'Fáilte',
      gaidhligMhanainn: 'Failt',
      beurla: 'Welcome'
    },
    audioUrl: '/audio/failte.mp3',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mas-e-do-thoil-e',
    gaelic: 'Mas e do thoil e',
    definition: 'Beannachd a chleachdar airson iarrtas a dhèanamh gu modhail',
    pronunciation: 'mas eh do HOL eh',
    grammarNotes: 'Dòigh modhail air iarrtas a dhèanamh',
    translations: {
      gaeilge: 'Más é do thoil é',
      gaidhligMhanainn: 'My saillt',
      beurla: 'Please'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'gabh-mo-leisgeul',
    gaelic: 'Gabh mo leisgeul',
    definition: 'Beannachd a chleachdar airson aire dhuine fhaighinn no airson dìreachadh',
    pronunciation: 'gav mo LESH-kul',
    grammarNotes: 'Cleachdar airson aire dhuine fhaighinn no airson dìreachadh',
    translations: {
      gaeilge: 'Gabh mo leithscéal',
      gaidhligMhanainn: 'Gow my leshkil',
      beurla: 'Excuse me'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'feasgar-math',
    gaelic: 'Feasgar math',
    definition: 'Beannachd a chleachdar feasgar',
    pronunciation: 'FES-kar mah',
    grammarNotes: 'Beannachd a chleachdar feasgar',
    translations: {
      gaeilge: 'Tráthnóna maith',
      gaidhligMhanainn: 'Fastyr mie',
      beurla: 'Good afternoon'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mar-sin-leibh',
    gaelic: 'Mar sin leibh',
    definition: 'Beannachd a chleachdar nuair a tha thu a\' falbh, a\' bruidhinn ri iomadh duine',
    pronunciation: 'mar shin layv',
    grammarNotes: 'Cleachdar nuair a tha thu a\' bruidhinn ri iomadh duine',
    translations: {
      gaeilge: 'Slán libh',
      gaidhligMhanainn: 'Slane lhiu',
      beurla: 'Goodbye (plural)'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'slainte',
    gaelic: 'Slàinte',
    definition: 'Beannachd a chleachdar nuair a tha thu a\' òl',
    pronunciation: 'SLAAN-chuh',
    grammarNotes: 'Cleachdar nuair a tha thu a\' òl no a\' togail slàinte',
    translations: {
      gaeilge: 'Sláinte',
      gaidhligMhanainn: 'Slaynt',
      beurla: 'Cheers'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'beannachd-leat',
    gaelic: 'Beannachd leat',
    definition: 'Beannachd a chleachdar airson fortan mhath a chur air duine',
    pronunciation: 'BYAN-achk leat',
    grammarNotes: 'Cleachdar airson fortan mhath a chur air duine',
    translations: {
      gaeilge: 'Ádh mór ort',
      gaidhligMhanainn: 'Lhuck yee',
      beurla: 'Good luck'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'chi-mi-a-rithist-thu',
    gaelic: 'Chì mi a-rithist thu',
    definition: 'Beannachd a chleachdar nuair a tha thu a\' falbh ach a\' ciallachadh gun coinnich thu ris a-rithist',
    pronunciation: 'chee mee uh-REE-sht oo',
    grammarNotes: 'Dòigh neo-fhoirmeil air sgrìobhadh tìoraidh',
    translations: {
      gaeilge: 'Feicfidh mé arís thú',
      gaidhligMhanainn: 'Fakin\' ort reesht',
      beurla: 'See you later'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'oidhche-mhath-cadal-math',
    gaelic: 'Oidhche mhath, cadal math',
    definition: 'Beannachd a chleachdar nuair a tha thu a\' falbh airson cadal',
    pronunciation: 'OY-chuh vah, KA-tal mah',
    grammarNotes: 'Cleachdar nuair a tha thu a\' sgrìobhadh oidhche mhath agus cadal math',
    translations: {
      gaeilge: 'Oíche mhaith, codladh sámh',
      gaidhligMhanainn: 'Oie vie, cadley mie',
      beurla: 'Good night, sleep well'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'latha-math-dhuibh',
    gaelic: 'Latha math dhuibh',
    definition: 'Beannachd a chleachdar airson latha math a chur air duine no dhaoine',
    pronunciation: 'LAH mah ghoo-eev',
    grammarNotes: 'Cleachdar airson latha math a chur air duine no dhaoine',
    translations: {
      gaeilge: 'Lá maith agat',
      gaidhligMhanainn: 'La mie diu',
      beurla: 'Have a good day'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 's-e-do-bheatha',
    gaelic: '\'S e do bheatha',
    definition: 'Freagairt a chleachdar nuair a tha duine a\' toirt taing dhut',
    pronunciation: 'shay do VEH-huh',
    grammarNotes: 'Freagairt air "tapadh leat"',
    translations: {
      gaeilge: 'Tá fáilte romhat',
      gaidhligMhanainn: 'Gura mie ayd',
      beurla: 'You\'re welcome'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]; 