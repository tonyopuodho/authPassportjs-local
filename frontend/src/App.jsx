import { Route, Routes } from "react-router-dom"
import RegisterPage from "../components/register"

function App() {
 

  return (
    <Routes>
      <Route path="/registerPage" element={<RegisterPage/>}/>
    </Routes>
  )
}

export default App
