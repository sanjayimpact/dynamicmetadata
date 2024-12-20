import express from 'express';
import path from 'path';
import prerender from 'prerender-node';

const app = express();

// Set up Prerender.io middleware (replace with your token)
prerender.set('prerenderToken', 'EvccVKLZQ4bBwXK7RYkQ');

// Apply the Prerender middleware to the server
app.use(prerender);

// Serve the static files from the React app build folder
app.use(express.static(path.join(process.cwd(), './build')));

// Handle all routes by serving the React app index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), './build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
