// server.js (Express backend)

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Allow Cross-Origin requests
app.use(cors());

// Sample data for portfolio
const sampleData = [
  {
    id: 1,
    title: "Saher\'s Portfolio",
    description: 'Senior computer science student.',
    cvFile: 'CV_Saher.pdf'
  },
  {
    id: 2,
    title: 'Kareem\'s Portfolio',
    description: 'Senior computer science student.',
    cvFile: 'CV_Kareem.pdf'
  }
];


// Route to fetch sample portfolio data
app.get('/api/projects', (req, res) => {
  res.json(sampleData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

