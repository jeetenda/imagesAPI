import { FormModel } from '../models/form.model.js'

class FormController {

    static async createForm(req, res) {
        const { data } = req.body;

        if (!data) {
            res.status(500).json({ status: "FAILED", message: "All fields are required" })
        }

        try {
            const doc = new FormModel({ data: data })
            const result = await doc.save()
            res.status(200).json({ status: "SUCCESS", message: "New form created successfully", data: result })
        }
        catch (err) {
            res.status(500).json({ status: "FAILED", message: "Unable to create form" })
        }
    }


    static async updateForm(req, res) {
        const { id } = req.params;
        const { data } = req.body;

        if (!data) {
            res.status(500).json({ status: "FAILED", message: "All fields are required" })
        }

        try {
            const result = await FormModel.updateOne({ _id: id }, { data: data })
            res.status(200).json({ status: "SUCCESS", message: "Form updated successfully", data: result })
        }
        catch (err) {
            res.status(500).json({ status: "FAILED", message: "Unable to update form" })
        }
    }


    static async getForm(req, res) {
        const { id } = req.params;

        try {
            const result = await FormModel.findById(id);
            res.status(200).json({ status: "SUCCESS", message: "Fetched successfully", data: result })
        }
        catch (err) {
            res.status(500).json({ status: "FAILED", message: "Unable to fetch form data" })
        }
    }

    static async getFormAll(req, res) {
        try {
            const result = await FormModel.find();
          
            res.status(200).json({ status: "SUCCESS", message: "Fetched successfully", data: result })
        }
        catch (err) {
            res.status(500).json({ status: "FAILED", message: "Unable to fetch form data" })
        }
    }
    

    static async deleteForm(req, res) {
        const { id } = req.params;

        try {
            await FormModel.deleteOne({ _id: id });
            res.status(200).json({ status: "SUCCESS", message: "Form deleted successfully" })
        }
        catch (err) {
            res.status(500).json({ status: "FAILED", message: "Unable to delete form data" })
        }
    }

}


export { FormController }
