import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  String,
  phoneNumber: String,
  emailAddress:   String,
  password:   String,
  gender: String,
  religion: String
}, {timestamps: true});

export default mongoose.model('User', userSchema);