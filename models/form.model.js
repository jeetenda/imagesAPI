import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  data: { type: Object, required: true }
})

const FormModel = mongoose.model('form', FormSchema)

export { FormModel };