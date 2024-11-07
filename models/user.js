const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin:Mayank%402104@cluster0.qqkx1.mongodb.net/social');

const userSchema= mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
});

module.exports=mongoose.model('user',userSchema);