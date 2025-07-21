const { default: conn } = require("../configs/db.js")

exports.registerUser = (request,response) => {
    const { username, email,password } = request.body
    
    if (!username || !email || !password) {
        return response.json({Status: false, message: "all fields are required"})
    }

    try {
          const  sqlQuery = "INSERT INTO register(username,email,password) VALUES(?,?,?)"
          conn.query(sqlQuery,[username,email,password], (error,result) => {
            if(error) return response.json({Status: false, Error:"Querry error"})
            return response.status(201).json({Status: true, message:"account registered successfully"})
          })
    } catch (error) {
        console.log(error)
        return response.json({message: "an error occured"})
    }
}

exports.loginUser = (request,response) => {
    const {email,password} = request.body
    if(!email || !password)  {
        return response.status(200).json({Status: true, message:"All fields are required"})
    }

    try {
         const sqlQuery = "SELECT * FROM register WHERE email = ? AND password = ?"
         conn.query(sqlQuery,[email,password], (error,result) => {
            if (error) return response.status(200).json({Status: false, Error: "Querry error"})
            if (result.length > 0) {
                request.session.user = result[0].username
                return response.status(200).json({Status: true, message:"logged in successfully"})
            } else{
                return response.json({Status: false, message:"wrong email or password"})
            }
         })
    } catch (error) {
        console.log(error)
        return response.json({message: "an error occured try again later"})
    } 

}

exports.homepage = (request,response) => {
    request.session.visited = true
    if (request.session.user){
        return response.status(200).json({valid:true, username: request.session.user})
    } else{
        return response.json({valid: false})
    }
}

exports.logoutuser = (request,response) => {
    if (request.session.user !== undefined) {
        request.session = null
        response.clearCookie('connect.sid')
    }
    response.json({status: true})
}