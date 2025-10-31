import ProductItem from "../ExJ06/ProductItem"
export default function ProductList(props){
    return(
        <ul>
            <ProductItem data = {props.data} />
        </ul>
    )
}