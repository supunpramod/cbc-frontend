
// import { Link } from 'react-router-dom';
// import { BsGraphUp } from "react-icons/bs";
// export default function AdminHomePage(){
//     return(
//         <div className="bg-blue-300 w-full h-screen flex">
//             <div className="bg-blue-500 w-[20%] h-screen flex flex-col items-center">
//             <Link className="flex flex-row items-center" to="/admin/dashboard"> <BsGraphUp />Dashboard</Link>
//             <Link to="/admin/products">Products</Link>
//             <Link to="/admin/orders">Orders</Link>
//             <Link to="/admin/Customers">Customers</Link>
//             </div>
            

//             <div className="bg-red-500 w-[80%] h-screen"></div>
           
//         </div>
//     )
// }



import { Link ,Routes, Route} from 'react-router-dom';

import { BsGraphUp, BsBoxSeam, BsCartCheck, BsPeople } from "react-icons/bs";
import AdminProductPage from './admin/adminProductPage';

export default function AdminHomePage() {
    return (
        <div className="bg-gray-100 w-full h-screen flex ">
            {/* Sidebar */}
            <div className="bg-blue-600 w-[20%] h-screen flex flex-col items-center py-8 text-white">
                <h1 className="text-xl font-bold mb-6 text-orange-500">Admin Panel</h1>
               
                    <Link className="flex items-center gap-2 px-4 py-2 hover:bg-blue-700 w-full" to="/admin/dashboard">
                        <BsGraphUp /> Dashboard
                    </Link>
                    <Link className="flex items-center gap-2 px-4 py-2 hover:bg-blue-700 w-full" to="/admin/products">
                        <BsBoxSeam /> Products
                    </Link>
                    <Link className="flex items-center gap-2 px-4 py-2 hover:bg-blue-700 w-full" to="/admin/orders">
                        <BsCartCheck /> Orders
                    </Link>
                    <Link className="flex items-center gap-2 px-4 py-2 hover:bg-blue-700 w-full" to="/admin/customers">
                        <BsPeople /> Customers
                    </Link>
               
            </div>
            
            {/* Main Content */}
            <div className="bg-red-500 w-[80%] h-screen p-6">
                <Routes path="/*">
                <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
                <Route path="/products" element={<AdminProductPage/>}/>
                <Route path="/orders" element={<h1>Orders</h1>}></Route>
                <Route path="/Customers" element={<h1>Customers</h1>}/>
                <Route path="/*" element={<h1>404 not found the admin page</h1>}/>
                </Routes>
            </div>
        </div>
    );
}
