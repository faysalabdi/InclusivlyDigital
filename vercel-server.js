// This file serves as a Vercel-compatible entry point
import express from 'express';
import { registerRoutes } from './server/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Log the directory structure for debugging
console.log('Current directory structure:');
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  console.log('Dist directory exists');
  const distContents = fs.readdirSync(path.join(__dirname, 'dist'));
  console.log('Dist contents:', distContents);
  
  if (distContents.includes('client')) {
    console.log('Client directory exists');
    const clientContents = fs.readdirSync(path.join(__dirname, 'dist', 'client'));
    console.log('Client contents:', clientContents);
  }
}

// Static file serving for the Vite build output
app.use(express.static(path.join(__dirname, 'dist', 'client')));

// Setup API routes
registerRoutes(app);

// For any other GET request, send back the index.html file to support SPA routing
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api')) return;
  
  const indexHtml = path.join(__dirname, 'dist', 'client', 'index.html');
  if (fs.existsSync(indexHtml)) {
    res.sendFile(indexHtml);
  } else {
    res.status(404).send('Not found: index.html is missing');
  }
});

// Export for Vercel serverless use
export default app; 