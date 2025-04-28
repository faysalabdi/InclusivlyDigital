// Debug script to run during Vercel build
import fs from 'fs';
import path from 'path';

console.log('=== DEBUG BUILD INFORMATION ===');
console.log('Current directory:', process.cwd());
console.log('Files in current directory:', fs.readdirSync('.'));

// Check client directory
if (fs.existsSync('./client')) {
  console.log('Client directory exists');
  console.log('Files in client directory:', fs.readdirSync('./client'));

  // Check client/src directory
  if (fs.existsSync('./client/src')) {
    console.log('Client/src directory exists');
    console.log('Files in client/src directory:', fs.readdirSync('./client/src'));

    // Check client/src/components directory
    if (fs.existsSync('./client/src/components')) {
      console.log('Components directory exists');
      console.log('Files in components directory:', fs.readdirSync('./client/src/components'));

      // Check logo.tsx
      if (fs.existsSync('./client/src/components/logo.tsx')) {
        console.log('Logo.tsx exists');
        console.log('Logo.tsx content:');
        console.log(fs.readFileSync('./client/src/components/logo.tsx', 'utf8'));
      } else {
        console.log('Logo.tsx does not exist');
      }
    }
  }
}

// Check if client/public exists
if (fs.existsSync('./client/public')) {
  console.log('Client/public directory exists');
  console.log('Files in public directory:', fs.readdirSync('./client/public'));
} else {
  console.log('Client/public directory does not exist');
}

console.log('=== END DEBUG INFORMATION ==='); 