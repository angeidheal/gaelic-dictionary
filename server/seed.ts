import mongoose from 'mongoose';
import { DictionaryEntry } from '../src/types/DictionaryEntry';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gaelic-dictionary';

const EntrySchema = new mongoose.Schema<DictionaryEntry>({
  gaelic: { type: String, required: true },
  definition: { type: String, required: true },
  grammarNotes: { type: String, required: true },
  audioUrl: { type: String, required: true },
  translations: {
    gaeilge: { type: String, required: true },
    gaidhligMhanainn: { type: String, required: true },
    beurla: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Entry = mongoose.model<DictionaryEntry>('Entry', EntrySchema);

const sampleEntries: Omit<DictionaryEntry, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    gaelic: "madainn mhath",
    definition: "Good morning",
    grammarNotes: "A common greeting used in the morning. Literally means 'good morning'.",
    audioUrl: "/audio/madainn-mhath.mp3",
    translations: {
      gaeilge: "maidin mhaith",
      gaidhligMhanainn: "moghrey mie",
      beurla: "good morning"
    }
  },
  {
    gaelic: "slàinte mhath",
    definition: "Good health",
    grammarNotes: "A traditional toast meaning 'good health'. Often used when drinking.",
    audioUrl: "/audio/slante-mhath.mp3",
    translations: {
      gaeilge: "sláinte mhaith",
      gaidhligMhanainn: "slaynt vie",
      beurla: "good health"
    }
  },
  {
    gaelic: "tapadh leat",
    definition: "Thank you",
    grammarNotes: "Used when thanking one person. For multiple people, use 'tapadh leibh'.",
    audioUrl: "/audio/tapadh-leat.mp3",
    translations: {
      gaeilge: "go raibh maith agat",
      gaidhligMhanainn: "gura mie ayd",
      beurla: "thank you"
    }
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing entries
    await Entry.deleteMany({});
    console.log('Cleared existing entries');

    // Insert sample entries
    await Entry.insertMany(sampleEntries);
    console.log('Added sample entries');

    console.log('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 