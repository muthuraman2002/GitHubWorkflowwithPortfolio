
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically handle the form data (e.g., send an email, save to database)
  // console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Message received!' });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

// Only start the server if this file is run directly
if (import.meta.url === `file://${__filename}`) {
  app.listen(port, () => {
    // console.log(`Server running on http://localhost:${port}`);
  });
}