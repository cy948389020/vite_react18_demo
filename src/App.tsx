import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DatePicker } from 'antd'

function Home() {
  return <p>Home</p>
}
function Login() {
  return <p>Login</p>
}
function Register() {
  return <p>Register</p>
}

function App() {
  return (
    <div className="App">
      <DatePicker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
