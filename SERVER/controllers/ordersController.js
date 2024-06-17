const model= require('../model/ordersModel')

async function getAllOrdrers() {
    try {
        return model.getOrders();
    } catch (err) {
        throw err;
    }
}
async function getOrdrer(id) {
    try {
        return model.getOrder(id);
    } catch (err) {
        throw err;
    }
}

async function updateOrder(id,date, returnDate, clientId, dressId, repairs, paidInAdvance, accessoriesId) {
    try {
        return model.updateOrder(id,date, returnDate, clientId, dressId, repairs, paidInAdvance, accessoriesId);
    } catch (err) {
        throw err;
    }
}async function deleteOrder(id) {
    try {
        return model.deleteAccessory(id);
    } catch (err) {
        throw err;
    }
}
async function createOrder( date, returnDate, clientId, dressId, repairs, paidInAdvance, accessoriesId){
    try {
        return model.createAccessory(date, returnDate, clientId, dressId, repairs, paidInAdvance, accessoriesId);
    } catch (err) {
        throw err;
    }
}

module.exports ={getAllOrdrers,getOrdrer,updateOrder,deleteOrder,createOrder}