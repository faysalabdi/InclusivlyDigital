// This file serves as a Vercel-compatible entry point
import express from 'express';
import { registerRoutes } from './server/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static file serving for the Vite build output
app.use(express.static(path.join(__dirname, 'dist', 'client')));

// Setup API routes
registerRoutes(app);

// Serve the SPA for client-side routing
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api')) return;
  res.sendFile(path.join(__dirname, 'dist', 'client', 'index.html'));
});

// Export for Vercel serverless use
export default app; 