import express from 'express'
import { FormController } from '../controllers/form.controller.js'

const router = express.Router()

router.get('/:id', FormController.getForm)
router.post('/', FormController.createForm)
router.put('/:id', FormController.updateForm)
router.delete('/:id', FormController.deleteForm)
router.get('/', FormController.getFormAll)


export default router;

