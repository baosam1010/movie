const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    content:{
        type: String,

    },
    url:{
        type: String,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})


module.exports = mongoose.model('posts',PostSchema)





