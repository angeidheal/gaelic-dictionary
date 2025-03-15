# Faclair na Gàidhlig - Scottish Gaelic Dictionary

A modern, responsive web application for searching and exploring Scottish Gaelic words, with translations in Irish Gaelic (Gaeilge), Manx Gaelic (Gàidhlig Mhanainn), and English (Beurla).

## Features

- Search Scottish Gaelic words
- View detailed entries with:
  - Word definition
  - Grammar notes
  - Translations in multiple languages
- Responsive design for all devices
- Accessible interface
- Modern Material UI design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/faclair-nan-geidheal.git
cd faclair-nan-geidheal
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following content:
```
MONGODB_URI=mongodb://localhost:27017/faclair-nan-geidheal
PORT=3001
```

## Running the Application

1. Start MongoDB:
```bash
mongod
```

2. Start the development server:
```bash
npm run dev
```

This will start both the frontend (React) and backend (Express) servers concurrently:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `build` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- Howler.js for audio playback
- MongoDB for the database
- React and Express for the framework
