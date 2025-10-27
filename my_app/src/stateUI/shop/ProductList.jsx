import ProductItem from "./ProductItem";

export default function ProductList(props){
    // <ul>만 생성
    return(
        <>
            <ul>
                {props.products.map((product) => (
                    // 자식 컴포넌트
                    <ProductItem key = {product.id} product = {product} addCart ={props.addCart}/>
                ))}
            </ul>
        </>
    )
}