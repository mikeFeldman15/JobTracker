import mongoose from 'mongoose';

// Can put MongoDB URI here for ease of use during development
const myURI = '';

const URI = process.env['MONGO_URI'] || myURI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Successfully connected to MongoDB');
  } catch(error) {
    console.error('Failed to connect to MongoDB');
    process.exit(1); // is this necessary? -BH
  }
}

// Which fields should be required?
const questionSchema = new mongoose.Schema({
  label: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String },
  user_id: { type: Number },
  status: { type: String },
});

const Question = mongoose.model('question', questionSchema);

module.exports = { Question, connectDB };