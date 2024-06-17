const model= require('../model/disabledQueuasModel')

async function getDisabledQueuas() {
    try {
        return model.getDisabledQueuas();
    } catch (err) {
        throw err;
    }
}
async function deleteDisabledQueuas(id) {
    try {
        return model.deleteDisabledQueuas(id);
    } catch (err) {
        throw err;
    }
}
async function createDisabledQueuas( date,hour){
    try {
        return model.createDisabledQueuas(date,hour);
    } catch (err) {
        throw err;
    }
}
module.exports ={ createDisabledQueuas, getDisabledQueuas, deleteDisabledQueuas}