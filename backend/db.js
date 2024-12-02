
const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
  try {
    // Define the MongoDB URI and connect
    const mongoURI = 'mongodb+srv://101399114:Peter@cluster0.myl9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); 
  }
};
module.exports = connectDB;
