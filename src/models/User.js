// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'manager'], required: true },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
