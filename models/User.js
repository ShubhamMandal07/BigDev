import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            unique: true,
            required: true,
        },
        password:{
            type: String,
            required: false,

        },

},
{ timestamps: true }
);

export default mongoose.model.User || mongoose.model("User", userSchema);