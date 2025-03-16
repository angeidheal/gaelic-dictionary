# Faclair nan Gèidheal

A dictionary of Scottish Gaelic LGBTQIA+ vocabulary, with Irish, Manx and English translations.

Visit the dictionary at [faclair.lgbt](https://faclair.lgbt)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/angeidheal/faclair-nan-geidheal.git
cd faclair-nan-geidheal
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm start
```

This will start the React development server at http://localhost:3000

## Deployment

The site is deployed to GitHub Pages with a custom domain. To deploy new changes:

```bash
npm run deploy
```

This will:
1. Build the project
2. Deploy to the gh-pages branch
3. Serve the site at [faclair.lgbt](https://faclair.lgbt)

## Project Structure

- `/src` - React source code
  - `/components` - Reusable React components
  - `/pages` - Page components
  - `/services` - Data and API services
  - `/types` - TypeScript type definitions
- `/public` - Static assets and HTML template
  - `CNAME` - Custom domain configuration
  - `assets/` - Images and other static files

## Technologies Used

- React with TypeScript
- Material-UI (MUI) for components and theming
- React Router for navigation
- Howler.js for audio playback
- GitHub Pages for hosting

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
- React for the framework
- GitHub Pages for hosting
