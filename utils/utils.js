import axios from "axios"

export const uploadImageCloudinary = async (selectedImage, folder) => {
    let newImgUrl

    //upload image to cloudinary
    if (selectedImage) {
    
        const formData = new FormData()
        formData.append('file', selectedImage)
        formData.append('upload_preset', "hyki21aw")
        formData.append('folder', folder)


        try {
            const imgUploadResponse = await axios.post(process.env.cloudinaryUrl, formData)
            newImgUrl = imgUploadResponse.data.url
            return newImgUrl
        } catch (e) {
           return message.error('Ocorreu em erro no carregamento da imagem', e.message)
        }

    } else return false
}