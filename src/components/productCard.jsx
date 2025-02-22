export default function ProductCard(props){
    return(
        <div>
        <h1>{props.name}</h1>
        <h2>Price:{props.price}</h2>
        <button>Add to cart</button>
        <img src={props.src}></img>
        </div>
    )
} 
