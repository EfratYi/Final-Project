const model= require('../model/accessoriesModel')

async function getAllAccessories() {
    try {
        return model.getAccessories();
    } catch (err) {
        throw err;
    }
}
async function getAccessory(id) {
    try {
        return model.getAccessory(id);
    } catch (err) {
        throw err;
    }
}

async function getAccessoriesOfOrder( orderId){
    try {
        return model.getAccessoriesOfOrder(orderId);
    } catch (err) {
        throw err;
    }
}

async function updateAccessory(id, type) {
    try {
        return model.updateAccessory(id, type);
    } catch (err) {
        throw err;
    }
}async function deleteAccessory(id) {
    try {
        return model.deleteAccessory(id);
    } catch (err) {
        throw err;
    }
}
async function createAccessory( type){
    try {
        return model.createAccessory(type);
    } catch (err) {
        throw err;
    }
}

module.exports ={getAllAccessories,getAccessory,updateAccessory,deleteAccessory,createAccessory, getAccessoriesOfOrder}