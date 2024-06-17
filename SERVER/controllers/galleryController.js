const model= require('../model/galleryModel')

async function createPhoto(imageUrl) {
    try {
        return model.createPhoto(imageUrl);
    } catch (err) {
        throw err;
    }
}

async function getGallery() {
    try {
        return model.getGallry(); 
    } catch (err) {
        throw err;
    }
}

async function deletePhoto(id) {
    try {
        return model.deletePhoto(id); 
    } catch (err) {
        throw err;
    }
}


module.exports = { createPhoto, getGallery, deletePhoto}