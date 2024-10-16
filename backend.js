const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let environmentData = {
  lampotila: 22.5,
  kosteus: 55,
  valoisuus: 800,
  ph: 6.5,
  ec: 1.8,
  vpd: 1.2,
};

app.get('/hae-ymparistodata', (req, res) => {
  res.json(environmentData);
});

app.post('/paivita-ph', (req, res) => {
  const { ph } = req.body;
  environmentData.ph = ph;
  res.json({ viesti: 'pH-arvo päivitetty' });
});

app.post('/paivita-ec', (req, res) => {
  const { ec } = req.body;
  environmentData.ec = ec;
  res.json({ viesti: 'EC-arvo päivitetty' });
});

app.post('/ohjaa-kastelu', (req, res) => {
  const { tila } = req.body;
  res.json({ tila });
});

app.post('/ohjaa-ravinteet', (req, res) => {
  const { tila } = req.body;
  res.json({ tila });
});

app.listen(5000, () => {
  console.log('Palvelin käynnissä portissa 5000');
});
