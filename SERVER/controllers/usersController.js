
const model = require('../model/usersModel');
const model2 = require('../model/clientsModel');
const bcrypt = require('bcrypt');


async function getUserById(idUser) {
    try {
        return model.getUser(idUser);
    }
    catch (err) {
        throw err;
    }
}

async function loginController(email, password) {
   try {
        const userToLogIn = await model.loginModel(email);
        console.log('User to log in:', userToLogIn);

        if (!userToLogIn) {
            throw new Error('Unauthorized: User not found');
        }
        console.log('User to log in:', userToLogIn);
 return userToLogIn;
        // const passwordMatch = await bcrypt.compare(password, userToLogIn.password);
        // console.log('Password match:', passwordMatch);

        // if (!passwordMatch) {
        //     throw new Error('Unauthorized: Incorrect password');
        // }
    } catch (err) {
        throw err;
    }
}

async function registerControllerGET(username) {
    try {
        const userToRegister = await model.registerModelGET(username);
        if (userToRegister.length != 0) {
            console.log(" username already exist")
        }
        return (userToRegister)
    }
    catch (err) {
        throw err;
    }
}

async function postUserController(name, email, phone1, password, type) {
    try {
        const userToRegister = await model.registerModelGET(email);
        if (userToRegister.length != 0) {
            console.log(" username already exist")
        }
        else {
            if (type == 'employee') {

            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const response = await model.createUser(name, email, phone1, hashedPassword, roleId);
            return response;
        }
    }
    catch (err) {
        throw err;
    }
}

async function deleteUser() {
    try {
        return model.deleteUser(idUser);
    }
    catch (err) {
        throw err;
    }
}

// async function updateUserController(idUser,firstName, username,email,phone,street,city,zipcode) {
//     try {
//         return model.updateUserModel( idUser,firstName, username,email,phone,street,city,zipcode); 
//     } 
//     catch (err) {
//         throw err;
//     }
// }


module.exports = { getUserById, loginController, postUserController, deleteUser, registerControllerGET }


