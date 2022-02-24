const mongoose = require('mongoose');
require('./env');

mongoose.connect(process.env.MONGODB_URL)
.catch(error => {
  console.error(error.message);
  console.error('Terminating application');
  process.exit(0);
});

module.exports = mongoose;
