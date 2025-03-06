import axios from "axios"
export default function AdminProductPage(){

    //   const[products,setProducts]=useState([])


axios.get("http://localhost:5000/api/products")
.then((res)=>{
    console.log(res.data)
    setProducts(res.data)
})
 

    return(
        <div>
            <h1>Admin product page</h1>
            {/* {
                products.map(
                    (product,index)=>{
                        return(
                            <div key={product._id}>
                            {index}
                                {product.productName}
                                </div>
                        )    
                    }
                )
            } */}
        </div>
    )
}


async function getProducts(){
    const res=await axios.get("http://localhost:5000api/products")
    console.log(res)
}