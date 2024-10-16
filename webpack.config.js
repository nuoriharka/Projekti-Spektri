module.exports = {
  mode: 'production', // tai 'development' riippuen tarpeestasi
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },
  // Voit lisätä muita asetuksia tarvittaessa...
};


