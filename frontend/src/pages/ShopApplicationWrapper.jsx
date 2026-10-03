import Navbar from '../components/navigation/Navbar'
import { Outlet } from 'react-router-dom'

const ShopApplicationWrapper = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default ShopApplicationWrapper