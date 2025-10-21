// 자식 컴포넌트인 Child를 import 받아야함
import Child from "./child"

function Parent(){
    return(
        <>
            <Child name = "홍길동" />
            <Child name = "개나리" />
            <Child name = "진달래" />
        </>
    )
}
export default Parent