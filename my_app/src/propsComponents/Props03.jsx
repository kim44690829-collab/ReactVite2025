function Product({name, price}){
    return(
        <>
            <h2>{name}</h2>
            <p>가격 : {price.toLocaleString()}원</p>
        </>
    )
}
export default Product
