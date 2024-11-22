import connectMongoDB from '../../../lib/mongodb'; // Use your mongodb.js utility file
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Test the connection
    if (mongoose.connection.readyState === 1) {
      return new Response(JSON.stringify({ message: 'MongoDB connected successfully!' }), {
        status: 200,
      });
    } else {
      throw new Error('MongoDB connection failed');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return new Response(JSON.stringify({ message: 'Failed to connect to MongoDB', error: error.message }), {
      status: 500,
    });
  }
}
