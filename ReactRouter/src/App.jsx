import './App.css'
import {createBrowserRouter,Route, RouterProvider,createRoutesFromElements} from 'react-router-dom'
import Layuot from './Layuot'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import GitHub from './Components/GithubAPI/GitHub'
import GetUser from './Components/GithubAPI/GetUser'
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layuot/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='user/:userId' element={<User/>}/>
        <Route loader={GetUser}
        path='github' element={<GitHub/>}/>
      </Route>
    )
  )

  return (
   
    <RouterProvider router={router}/>
    
  )
}

export default App
