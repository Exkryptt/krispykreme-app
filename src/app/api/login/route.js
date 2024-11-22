import connectMongoDB from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectMongoDB();

    // Find the user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    // Check if the password matches
    if (user.password !== password) {
      return new Response(JSON.stringify({ message: 'Invalid password' }), { status: 401 });
    }

    // Authentication success
    return new Response(JSON.stringify({ message: 'Login successful', role: user.role }), { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}

