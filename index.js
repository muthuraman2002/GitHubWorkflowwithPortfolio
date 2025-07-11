import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('home', { 
    title: 'Portfolio - Home',
    content: 'Welcome to my portfolio'
  });
});

app.get('/projects', (req, res) => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      technologies: ['React', 'Firebase', 'Tailwind CSS']
    }
  ];
  res.render('projects', { 
    title: 'Portfolio - Projects', 
    projects,
    content: 'My Projects'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'Portfolio - About',
    content: 'About Me'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Portfolio - Contact',
    content: 'Contact Me'
  });
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically handle the form data (e.g., send an email, save to database)
  console.log('Contact form submission:', { name, email, message });
  res.redirect('/?message=Thank you for your message!');
});

// Only start the server if this file is run directly
if (import.meta.url === `file://${__filename}`) {
  app.listen(port, () => {
    console.log(`Portfolio website is running on http://localhost:${port}`);
  });
}