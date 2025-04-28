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

// Ensure assets directory exists in public
const assetsDir = path.join(__dirname, 'dist', 'client', 'assets');
try {
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  
  // Copy any assets from attached_assets to the public directory
  const sourceDir = path.join(__dirname, 'attached_assets');
  if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);
    files.forEach(file => {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(assetsDir, file);
      if (fs.statSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, destPath);
      }
    });
  }
} catch (err) {
  console.error('Error handling assets:', err);
}

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