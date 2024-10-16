import express from 'express'
import { Upload } from './uploadModel.js'

const uploadRouter = express.Router()


uploadRouter.post('/upload/', async (request, response) => {

    const new_image = new Upload(request.body)

    await new_image.save()

    response.json(new_image)
})
uploadRouter.get('/all/',async(request,response)=>{
    const data=await Upload.find({})
        response.json(data)
    
})

uploadRouter.get('/:id/', async (request, response) => {

    const image = await Upload.findById(request.params.id);

    response.json(image)

})

export default uploadRouter