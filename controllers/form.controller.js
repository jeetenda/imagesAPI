
import { getFormModel, editFormModel, createFormModel, deleteFormModel } from '../models/form.model.js'

export function addForm(req, res) {
    console.log("addForm called")
    const {data} = req.body;
    const jsonData = JSON.stringify(data)
    createFormModel(jsonData, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({error: "Error while creating"})
        }
        else {
            console.log("data =", data);
            res.status(200).json({ data: data });
        }
    })
}


export function editForm(req, res) {
    const {id} = req.query;
    const {data} = req.body;
    const jsonData = JSON.stringify(data)
    console.log("editForm called", id, data)
    editFormModel(id, jsonData, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({error: "Error while editing"})
        }
        else {
            console.log("data =", data);
            res.status(200).json({ data: data });
        }
    })
}




export function getForm(req, res) {
    const {id} = req.query;
    console.log("getForm route", id);
    getFormModel(id, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error while getting' });
        } else {
            console.log("data =", data);
            res.status(200).json({ data: data });
        }
    });
}




export function deleteForm(req, res) {
    console.log("deleteForm called");
    const {id} = req.query;
    deleteFormModel(id, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error while deleting' });
        } else {
            console.log("data =", data);
            res.status(200).json({ data: data });
        }
    });
}



