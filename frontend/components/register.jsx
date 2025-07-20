import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const RegisterPage = () => {
    const [register,setRegister] = useState([])
    const [error, setError] = useState('')

    return (
        <div className="flex items-center justify-center mt-8 flex-col">
            <h1 className="text-xl font-bold mt-6">Register an Account</h1>
            <form className="p-4 shadow-md mt-8 w-[35%] bg-white rounded-sm">
                <label>Username</label>
                <input type="text" onChange={(event) => setRegister({...register, username: event.target.value})}  name="username" required className="w-full outline-none border p-2 mb-2 mt-1 rounded-sm" placeholder="Enter username"/>
                <label>Email</label>
                <input type="email" onChange={(event) => setRegister({...register, email: event.target.value})}  name="email" required className="w-full outline-none border p-2 mb-2 mt-1 rounded-sm" placeholder="Enter email"/>
                <label>Password</label>
                <input type="password" onChange={(event) => setRegister({...register, password: event.target.value})}  name="password" required className="w-full outline-none border p-2 mb-2 mt-1 rounded-sm" placeholder="Enter password"/>
                <button type="submit" className="font-bold w-full bg-black text-white py-3 mt-2 mb-2 rounded-sm cursor-pointer">Register</button>
                <p className="text-sm">Already have an account <Link to={'/loginPage'} className="text-md font-bold">click to Login</Link> </p>
            </form>
        </div>
    )
}

export default RegisterPage