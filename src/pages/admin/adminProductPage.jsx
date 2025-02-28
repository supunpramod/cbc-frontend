import axios from "axios"
export default function AdminProductPage(){


getProducts()
    return(
        <div>
            <h1>Admin product page</h1>
        </div>
    )
}


async function getProducts(){
    const res=await axios.get("http://localhost:5000api/products")
    console.log(res)
}