
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import Form from './pages/form'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ForgetPWPage from './pages/forget'
import PolicyPage from './pages/policy'

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='w-full h-[100vh] flex justify-center items-center'>
          <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/forget' element={<ForgetPWPage/>}/>
            <Route path='/policy' element={<PolicyPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>      
    </>
  )
}

export default App
