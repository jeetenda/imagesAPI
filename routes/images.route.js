import express from 'express'
import { ImageController } from '../controllers/image.controller.js'

const router = express.Router()

router.get('/', ImageController.getImagesAll)
router.post('/', ImageController.postImagesAll)


export default router;

