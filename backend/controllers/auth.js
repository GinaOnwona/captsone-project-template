const User = require('../models/user');


/**
 * A typical signup controller
 *  1. Get the user request body (firstName, lastName, email, password)
 *  2. Create a new user instance 
 *  3. Save the user instance
 *  4. Return a response
 * 
 *  {
 *      firstName: "skajf",
 *      lastName: "jakdsj",
 *      email: "jdsjakfds",
 *      password: "jkajdsf"
 *  }
 */

const signup = async (request, response) => {
    const {firstName, lastName, email, password} = request.body;
    const user = User({firstName, lastName, email, password})
    const new_user = await user.save()
    response.send(new_user)
}


/**
 * typical login
 * 1. Get the user request body
 * 2. 
 */
const login = async (request, response) => {
    // Login user
}


const getUserDetails = async (request, response) => {
    // Get user details
}


module.exports = {
    signup,
    login,
    getUserDetails
}