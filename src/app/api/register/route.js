import connectMongoDB from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    // Connect to MongoDB
    await connectMongoDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    // Create and save the user
    const newUser = new User({ email, password, role });
    await newUser.save();

    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
