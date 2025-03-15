import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { DictionaryEntry } from '../src/types/DictionaryEntry';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gaelic-dictionary';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Create Mongoose schema
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

// API endpoints
app.get('/api/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.json([]);
    }

    const entries = await Entry.find({
      $or: [
        { gaelic: { $regex: q, $options: 'i' } },
        { definition: { $regex: q, $options: 'i' } },
        { 'translations.beurla': { $regex: q, $options: 'i' } },
      ],
    }).limit(20);

    res.json(entries);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/entries/:id', async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.json(entry);
  } catch (error) {
    console.error('Get entry error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 