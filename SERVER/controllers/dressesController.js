const modelDresses= require('../model/dressesModel')

async function getAllDresses() {
    try {
        return modelDresses.getDresses();
    } catch (err) {
        throw err;
    }
}
async function getDress(id) {
    try {
        return modelDresses.getDress(id);
    } catch (err) {
        throw err;
    }
}
async function updateDress(id, model, price, uses, advancePayment) {
    try {
        return modelDresses.updateDress(id, model, price, uses, advancePayment);
    } catch (err) {
        throw err;
    }
}
async function deleteDress(id) {
    try {
        return modelDresses.deleteDress(id);
    } catch (err) {
        throw err;
    }
}
async function createDress(model, price, uses, advancePayment) {
    try {
        return modelDresses.createDress(model, price, uses, advancePayment);
    } catch (err) {
        throw err;
    }
}

module.exports = { getAllDresses, getDress, updateDress, deleteDress, createDress };