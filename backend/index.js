const express = require('express');
const cors = require('cors');



const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});
app.get('/health', (req, res) => res.json({ status: 'ok' }));
const contactRoutes = require('./routes/contact');
app.use('/contact', contactRoutes);

const scrapeRoutes = require('./routes/scrape')
app.use('/scrape', scrapeRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});