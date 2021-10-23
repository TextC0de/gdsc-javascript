import mongoose, { Schema } from 'mongoose';

export type UserType = {
    _id: string;
    name: string;
};

const User = new Schema<UserType>({
    name: {
        type: String
    },
});

const UserModel = mongoose.model<UserType>('User', User);

export default UserModel;
