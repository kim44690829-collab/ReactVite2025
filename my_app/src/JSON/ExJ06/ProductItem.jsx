export default function ProductItem(props){
    return(
        <>
            {props.data.slice(0,20).map((data) => (
                <li key={data.id}>
                    <img src={`https://picsum.photos/150?random=${data.id}`} />
                    <p>{data.title.slice(0,10)}</p>
                    <p>{(10000).toLocaleString()}원</p>
                </li>
            ))}
        </>
    )
}