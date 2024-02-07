import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  imageUrl:{type:String},
  title : {type:String},
  description:{type:String}
})

const ImageModel = mongoose.model('image', ImageSchema)

export { ImageModel };