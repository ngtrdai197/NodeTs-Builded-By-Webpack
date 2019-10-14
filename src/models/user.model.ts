import mongoose from "mongoose";

export interface IUser {
  username: string;
  password: string;
  fullName: string;
}

export interface IUserModel extends IUser, mongoose.Document {
  id: string;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 16
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 24
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 8
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id, delete ret.__v;
      }
    }
  }
);

export const userModel = mongoose.model<IUserModel>("user", userSchema);
