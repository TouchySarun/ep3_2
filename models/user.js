var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            require: true
        },
        password:{
            type:String,
            require: true
        },
        role:{
            type:String,
            require:false,
            default:"user"
        }
    },
    {timestamps: true}
)

const User = mongoose.model.User ?? mongoose.model("User", userSchema);
export default User;