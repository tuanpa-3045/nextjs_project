const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://phananhtuan:tztA1ktjEdxKq1kT@cluster1.u4hj54i.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connect successfully!');
  } catch (error) {
    console.log(error);
    console.log('Connect failure!');
  }
}

connect();