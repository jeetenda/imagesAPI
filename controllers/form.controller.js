
import {getFormModel} from '../models/form.model.js'

function addForm(req, res) {
   res.json({data: 'add form'})
}


function editForm(req, res) {
    res.json({data: 'edit form'})
}

async function getForm(req, res) {
    const data = await getFormModel(1)
    res.status(200).json({data: data})
}


function deleteForm(req, res) {
    res.json({data: 'delete form'})
}

export {addForm, editForm, getForm, deleteForm}

