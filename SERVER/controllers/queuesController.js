const model= require('../model/queuesModel')

async function getQueues() {
    try {
        return model.getQueues();
    } catch (err) {
        throw err;
    }
}
async function getQueue(id) {
    try {
        return model.getQueue(id);
    } catch (err) {
        throw err;
    }
}
async function getQueuesOfClient(userId) {
    try {
        return model.getQueuesOfClient(userId);
    } catch (err) {
        throw err;
    }
}
async function updateQueue(id, date, hour, minutes, userId, typeId) {
    try {
        return model.updateQueue(id, date, hour, minutes, userId, typeId);
    } catch (err) {
        throw err;
    }
}async function deleteQueue(id) {
    try {
        return model.deleteQueue(id);
    } catch (err) {
        throw err;
    }
}
async function creatQueue( date, hour, minutes, userId, typeId){
    try {
        return model.creatQueue(date, hour, minutes, userId, typeId);
    } catch (err) {
        throw err;
    }
}

module.exports ={getQueues,getQueue, getQueuesOfClient,updateQueue,deleteQueue,creatQueue}