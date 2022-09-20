import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true},
  phoneNumber: { type: String, required: true, unique: true },
  emailAddress: { type: String, required: true, unique: true },
  password: String,
  gender: String,
  religion: String
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;