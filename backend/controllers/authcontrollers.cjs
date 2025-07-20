const { default: conn } = require("../configs/db.js")

exports.registerUser = (request,response) => {
    const { username, email,password } = request.body
    
    if (!username || !email || !password) {
        return response.json({message: "all fields are required"})
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