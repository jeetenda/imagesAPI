import { ImageModel } from '../models/image.model.js'

class ImageController {

    static async getImagesAll(req, res) {
        try {
            const result = await ImageModel.find();
          console.log("hit")
            res.status(200).json({ status: "SUCCESS", message: "Fetched successfully", data: result })
        }
        catch (err) {
            res.status(500).json({ status: "FAILED", message: "Unable to fetch form DB" })
        }
    }

    //  //postImagesAll for testing only 

    static async postImagesAll(req, res) {
        console.log(req.body,"--")
        try {
            const result = await ImageModel.insertMany(req.body.images);
            res.status(200).json({ status: "SUCCESS", message: "Fetched successfully", data: result })
        }
        catch (err) {
            res.status(500).json({ status: "FAILED", message: "Unable to fetch form DB" })
        }
    }
    
}






export { ImageController }
