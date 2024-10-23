import mongoose, { Document, Schema } from 'mongoose';



export interface IUser extends Document {
  email: string;
  password: string;
  refreshToken?: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  refreshToken: { type: String },
});

const User = mongoose.model<IUser>('User', userSchema);



export default User;