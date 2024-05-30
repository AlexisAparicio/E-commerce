import {useRoutes} from 'react-router-dom'
import Home from '../Home'
import Myaccount from '../MyAccount'
import MyOrder from '../MyOrder/Index'
import MyOrders from '../Myorders/Index'
import NotFound from '../NotFound/Index'
import Signin from '../Signin/Index'
import './App.css'

function App() {
  return (
    <div className="bg-red-100">
    <Home />
    <Myaccount />
    <MyOrder />
    <MyOrders />
    <NotFound />
    <Signin />
    </div>
  )
}

export default App
