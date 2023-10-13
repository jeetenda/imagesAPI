import express from 'express'
import { addForm, deleteForm, editForm, getForm } from '../controllers/form.controller.js'

const router = express.Router()

router.get('/', getForm)
router.post('/', addForm)
router.put('/', editForm)
router.delete('/', deleteForm)

export default router;

